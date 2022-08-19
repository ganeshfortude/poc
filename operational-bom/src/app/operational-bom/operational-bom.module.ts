import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalBomRoutingModule } from './operational-bom-routing.module';
import { OperationBomHomeComponent } from './operation-bom-home/operation-bom-home.component';
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  declarations: [
    OperationBomHomeComponent
  ],
  exports: [
    OperationBomHomeComponent
  ],
  imports: [
    CommonModule,
    OperationalBomRoutingModule,
    GridModule
  ]
})
export class OperationalBomModule { }
