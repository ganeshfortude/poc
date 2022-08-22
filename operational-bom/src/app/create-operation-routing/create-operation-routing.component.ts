import { Component, NgZone, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { sampleJobGroups } from './sample-job-groups';
import { DataResult, process, State } from '@progress/kendo-data-query';
import { fromEvent, Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { RowClassArgs } from '@progress/kendo-angular-grid';

const tableRow = node => node.tagName.toLowerCase() === 'tr';

const closest = (node, predicate) => {
  while (node && !predicate(node)) {
    node = node.parentNode;
  }

  return node;
};

@Component({
  selector: 'app-create-operation-routing',
  templateUrl: './create-operation-routing.component.html',
  styleUrls: ['./create-operation-routing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateOperationRoutingComponent implements OnInit {

  constructor(private renderer: Renderer2, private zone: NgZone) { }

  ngOnInit(): void {
  }

  public state: State = {
    skip: 0,
    take: 15
  };

  public gridData: DataResult = process(sampleJobGroups[0].operations, this.state);

  private currentSubscription: Subscription;

  public ngAfterViewInit(): void {
    this.currentSubscription = this.handleDragAndDrop();
  }

  public ngOnDestroy(): void {
    this.currentSubscription.unsubscribe();
  }

  public dataStateChange(state: State): void {
    this.state = state;
    this.gridData = process(sampleJobGroups[0].operations, this.state);
    this.currentSubscription.unsubscribe();
    this.zone.onStable
      .pipe(take(1))
      .subscribe(() => (this.currentSubscription = this.handleDragAndDrop()));
  }

  public rowCallback(context: RowClassArgs) {
    return {
      dragging: context.dataItem.dragging
    };
  }

  private handleDragAndDrop(): Subscription {
    const sub = new Subscription(() => {});
    // @ts-ignore
    let draggedItemIndex;

    const tableRows = Array.from(document.querySelectorAll('.k-grid tr'));
    tableRows.forEach(item => {
      this.renderer.setAttribute(item, 'draggable', 'true');
      const dragStart = fromEvent<DragEvent>(item, 'dragstart');
      const dragOver = fromEvent(item, 'dragover');
      const dragEnd = fromEvent(item, 'dragend');

      sub.add(
        dragStart
          .pipe(
            tap(({ dataTransfer }) => {
              try {
                const dragImgEl = document.createElement('span');
                dragImgEl.setAttribute(
                  'style',
                  'position: absolute; display: block; top: 0; left: 0; width: 0; height: 0;'
                );
                document.body.appendChild(dragImgEl);
                // @ts-ignore
                dataTransfer.setDragImage(dragImgEl, 0, 0);
              } catch (err) {
                // IE doesn't support setDragImage
              }
              try {
                // Firefox won't drag without setting data
                // @ts-ignore
                dataTransfer.setData('application/json', {});
              } catch (err) {
                // IE doesn't support MIME types in setData
              }
            })
          )
          .subscribe(({ target }) => {
            const row: HTMLTableRowElement = <HTMLTableRowElement>target;
            draggedItemIndex = row.rowIndex;
            const dataItem = this.gridData.data[draggedItemIndex];
            dataItem.dragging = true;
          })
      );

      sub.add(
        dragOver.subscribe((e: any) => {
          e.preventDefault();
          // @ts-ignore
          const dataItem = this.gridData.data.splice(draggedItemIndex, 1)[0];
          const dropIndex = closest(e.target, tableRow).rowIndex;
          const dropItem = this.gridData.data[dropIndex];

          draggedItemIndex = dropIndex;
          this.zone.run(() =>
            this.gridData.data.splice(dropIndex, 0, dataItem)
          );
        })
      );

      sub.add(
        dragEnd.subscribe((e: any) => {
          e.preventDefault();
          // @ts-ignore
          const dataItem = this.gridData.data[draggedItemIndex];
          dataItem.dragging = false;
        })
      );
    });

    return sub;
  }

}
