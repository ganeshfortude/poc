import { Component, OnInit } from '@angular/core';
import { sampleStyles } from './sample-styles';

@Component({
  selector: 'app-operation-bom-home',
  templateUrl: './operation-bom-home.component.html',
  styleUrls: ['./operation-bom-home.component.css']
})
export class OperationBomHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public gridData: any[] = sampleStyles[0].styleDetails;

}
