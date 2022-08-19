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
import { OperationalBomModule } from './operational-bom/operational-bom.module';


@NgModule({
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
        OperationalBomModule
    ],
    declarations: [AppComponent],
    bootstrap:    [AppComponent]
})
export class AppModule {}
