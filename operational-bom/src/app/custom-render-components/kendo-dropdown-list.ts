import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';


@Component({
    selector: 'cus-kendo-dropdown',
    template: `
    <kendo-dropdownlist [data]="data" [disabled]="disabled" value="SQ">
    </kendo-dropdownlist>
    `,
    styles: []
})

export class KendoDropdownList implements ICellRendererAngularComp {

    params;

    data: any[] = [];
    disabled: boolean = false;

    agInit(params): void {
        console.log(params);
        this.params = params;
        this.data = params.items || [];
        this.disabled = params.data.disabledSeq || false;
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