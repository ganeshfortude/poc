import { Component } from '@angular/core';
import { SelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
}
