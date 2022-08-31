import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';


@Component({
    selector: 'cus-kendo-numeric-input',
    template: `
    <kendo-numerictextbox
      [value]="value"
      [min]="0"
      [max]="100"
      [autoCorrect]="autoCorrect"
      [disabled]="disabled"
    >
    </kendo-numerictextbox>
    `,
    styles: []
})

export class KendoNumbericInput implements ICellRendererAngularComp {

    params;

    value: number = 0;
    min: number = 0;
    max: number = 100;
    autoCorrect: boolean = false;
    disabled: boolean = false;

    agInit(params): void {
        this.params = params;
        this.value = params.value;
        this.min = params.min;
        this.max = params.max;
        this.autoCorrect = params.autoCorrect;
        this.disabled = params.disabled;
    }

    refresh(params?: any): boolean {
        return true;
    }

    // onClick($event) {
    //     if (this.params.onClick instanceof Function) {
    //         // put anything into params u want pass into parents component
    //         const params = {
    //             event: $event,
    //             rowData: this.params.node.data
    //             // ...something
    //         }
    //         this.params.onClick(params);

    //     }
    // }
}