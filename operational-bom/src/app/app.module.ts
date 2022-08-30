import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppRoutingModule } from './app-routing-module';
import { OperationBomHomeComponent } from './operation-bom-home/operation-bom-home.component';
import { APP_BASE_HREF } from '@angular/common';
import { CreateOperationRoutingComponent } from './create-operation-routing/create-operation-routing.component';
import { CreateOpBomComponent } from './create-op-bom/create-op-bom.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http'
import { KendoNumbericInput } from './custom-render-components/kendo-numeric-input';
import { KendoDropdownList } from './custom-render-components/kendo-dropdown-list';


@NgModule({
  declarations: [
    AppComponent,
    OperationBomHomeComponent,
    CreateOperationRoutingComponent,
    CreateOpBomComponent,
    KendoNumbericInput,
    KendoDropdownList
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    IconsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    DropDownsModule,
    GridModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
