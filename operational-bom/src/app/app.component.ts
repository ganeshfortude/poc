import { Component, ViewEncapsulation } from '@angular/core';
import { SelectEvent } from '@progress/kendo-angular-layout';
import { sampleStyles } from './sample-styles';

@Component({
  selector: 'my-app',
  template: `
    <div class="wrapper">
      <kendo-tabstrip (tabSelect)="onTabSelect($event)">
        <kendo-tabstrip-tab title="Style">
          <ng-template kendoTabContent>
            <div class="content">

            </div>
          </ng-template>
        </kendo-tabstrip-tab>
        <kendo-tabstrip-tab title="KIT/PACK">
          <ng-template kendoTabContent>
            <div class="content">

            </div>
          </ng-template>
        </kendo-tabstrip-tab>
        <kendo-tabstrip-tab title="Variants">
          <ng-template kendoTabContent>
            <div class="content">

            </div>
          </ng-template>
        </kendo-tabstrip-tab>
        <kendo-tabstrip-tab title="Manage SKU's">
          <ng-template kendoTabContent>
            <div class="content">

            </div>
          </ng-template>
        </kendo-tabstrip-tab>
        <kendo-tabstrip-tab title="Copy Styles">
          <ng-template kendoTabContent>
            <div class="content">

            </div>
          </ng-template>
        </kendo-tabstrip-tab>
        <kendo-tabstrip-tab title="Operational BOM" [selected]="true">
          <ng-template kendoTabContent>
            <div class="content">

              <kendo-grid [data]="gridData" [height]="300">
                <kendo-grid-column
                  field="color"
                  title="Color"
                  [width]="150"
                  [headerStyle]="{ 'background-color': '#4a5905' }"
                  [headerClass]="'headerCustomClass'"
                >
                </kendo-grid-column>
                <kendo-grid-column
                  field="smv"
                  title="SMV"
                  [headerStyle]="{ 'background-color': '#4a5905' }"
                  [headerClass]="'headerCustomClass'"
                >
                </kendo-grid-column>
                <kendo-grid-column
                  field="operationType"
                  title="Operation Type"
                  [headerStyle]="{ 'background-color': '#4a5905' }"
                  [headerClass]="'headerCustomClass'"
                >
                </kendo-grid-column>
                <kendo-grid-column
                  field="action"
                  title="Action"
                  [headerStyle]="{ 'background-color': '#4a5905' }"
                  [headerClass]="'headerCustomClass'"
                >
                </kendo-grid-column>
              </kendo-grid>

            </div>
          </ng-template>
        </kendo-tabstrip-tab>
        <kendo-tabstrip-tab title="BOM">
          <ng-template kendoTabContent>
            <div class="content">

            </div>
          </ng-template>
        </kendo-tabstrip-tab>
      </kendo-tabstrip>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [`
      .wrapper {
          display: flex;
          justify-content: left;
      }

      kendo-tabstrip {
          width: 800px;
      }

      .content {
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
      }

      img {
          width: 120px;
          height: 120px;
      }

      h2 {
          font-size: 4em;
          font-weight: lighter;
      }

      h2 > span {
          padding-left: 5px;
          font-size: .3em;
          vertical-align: top;
      }

      .headerCustomClass {
          color: #fff;
      }

      th.headerCustomClass {
          text-align: right;
      }
  `]
})
export class AppComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

  public gridData: any[] = sampleStyles[0].styleDetails;
}
