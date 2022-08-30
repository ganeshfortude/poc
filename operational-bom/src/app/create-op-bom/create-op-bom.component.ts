import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ColDef, ColumnApi, GetRowIdParams, GridApi, GridReadyEvent, RowDragEndEvent, RowDragEnterEvent, RowDragLeaveEvent, RowDragMoveEvent } from 'ag-grid-community';
import { KendoDropdownList } from '../custom-render-components/kendo-dropdown-list';
import { KendoNumbericInput } from '../custom-render-components/kendo-numeric-input';
import { sampleJobGroups } from './sample-job-groups';

@Component({
  selector: 'app-create-op-bom',
  templateUrl: './create-op-bom.component.html',
  styleUrls: ['./create-op-bom.component.css']
})
export class CreateOpBomComponent implements OnInit {

  public rowData: unknown[];

  private gridApi!: GridApi;
  private gridColumnApi!: ColumnApi;

  frameworkComponents: any;

  public columnDefs: ColDef[] = [
    {
      field: 'jobGroup',
      rowSpan: params => params.data.rowSpan ? params.data.rowSpan : 1,
      cellClassRules: {
        'custom-cell-span': params => {
          return params.data.rowSpan > 1
        },
      },
      rowDrag: true
    },
    { field: 'operationId' },
    { field: 'operationName' },
    { field: 'operationType' },
    { field: 'department' },
    {
      field: 'smv',
      cellRenderer: 'kendoNumericRenderer',
    },
    {
      headerName: 'Send to FR',
      cellRenderer: params => params.data.sendToFR ? '<span class="k-icon k-i-check"></span>' : '<span class="k-icon k-i-close"></span>',
      cellStyle: { display: 'flex', 'justify-content': 'center', 'align-items': 'center' }

    },
    {
      field: 'sequence',
      rowSpan: params => params.data.rowSpan ? params.data.rowSpan : 1,
      cellClassRules: {
        'custom-cell-span': params => {
          return params.data.rowSpan > 1
        },
      },
      cellRenderer: 'kendoDropdownRenderer',
      cellRendererParams: {
        items: ["SQ"]
      },
    }
  ];


  constructor(private http: HttpClient, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.frameworkComponents = {
      kendoNumericRenderer: KendoNumbericInput,
      kendoDropdownRenderer: KendoDropdownList
    }
  }

  onRowDragEnd(e: RowDragEndEvent) {
    let currentIndex = e.node.rowIndex;
    let droppedIndex = e.overNode.rowIndex;
    this.rowData.splice(droppedIndex, 0, this.rowData.splice(currentIndex, 1)[0]);
    console.log(this.rowData);
    this.ref.detectChanges();
  }

  onRowDragMove(event: RowDragMoveEvent) {
    var movingNode = event.node;
    var overNode = event.overNode;
    var rowNeedsToMove = movingNode !== overNode;
    if (rowNeedsToMove) {
      // the list of rows we have is data, not row nodes, so extract the data
      var movingData = movingNode.data;
      var overData = overNode!.data;
      var fromIndex = immutableStore.indexOf(movingData);
      var toIndex = immutableStore.indexOf(overData);
      var newStore = immutableStore.slice();
      moveInArray(newStore, fromIndex, toIndex, event.vDirection);
      immutableStore = newStore;
      this.gridApi.setRowData(newStore);
      this.gridApi.clearFocusedCell();
    }
    function moveInArray(arr: any[], fromIndex: number, toIndex: number, direction: string) {
      var count = sampleJobGroups.find((ele) => ele.jobGroup == arr[fromIndex].jobGroup).operations.length;

      if (arr[fromIndex].jobGroup == arr[toIndex].jobGroup) toIndex++;
      var calculatedToIndex = -1;

      for (let [i, ele] of immutableStore.entries()) {
        if (ele.jobGroup == arr[toIndex].jobGroup) {
          if (direction == "up") {
            calculatedToIndex = i;
            break;
          }
          calculatedToIndex = i + 1;
        }
      }

      if (calculatedToIndex == -1) calculatedToIndex = toIndex;

      var element = arr.splice(fromIndex, count);
      arr.splice(calculatedToIndex, 0, ...element);
    }
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // add id to each item, needed for immutable store to work
    immutableStore.forEach(function (data, index) {
      data.id = index;
    });
    params.api!.setRowData(immutableStore);
  }

  getRowId(params: GetRowIdParams) {
    return params.data.id;
  }

}

var immutableStore: any[] = processData(sampleJobGroups);

function processData(data: any[]): any[] {
  const processedData = [];

  data.forEach(element => {
    let tempElement = {};

    Object.entries(element).forEach((item: [string, any[]]) => {
      const [key, value] = item;
      const isArray = Array.isArray(value);

      if (isArray) {
        value.forEach((childItem, i) => {
          tempElement = { ...tempElement, rowSpan: i == 0 ? value.length : 1 }
          tempElement = { ...tempElement, ...childItem };
          processedData.push(tempElement);
        })
      } else {
        tempElement = { ...tempElement, [key]: value, };
      }
    })
  })
  console.log(processedData)
  return processedData;
}