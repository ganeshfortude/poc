import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-op-template',
  templateUrl: './select-op-template.component.html',
  styleUrls: ['./select-op-template.component.css']
})
export class SelectOpTemplateComponent implements OnInit {

  gridData: unknown[] = [];

  @Input() opTemplateModal: boolean = false;
  @Output() closeEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.gridData = sampleData;
  }

  close() {
    this.closeEvent.emit();
  }

  truncateValue(value: any[], length?: number): string {
    if (!Array.isArray(value)) return '';
    console.log('doing')
    let result = value.slice().splice(0, length || 10).join(', ');
    if (value.length > (length || 10)) result += '...';
    return result;
  }

}

const sampleData = [{
  operationName: 'Template A',
  operations: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]
}, {
  operationName: 'Template B',
  operations: [100, 101, 102, 103, 104]
}, {
  operationName: 'Template C',
  operations: [100, 101, 102, 103, 104, 105, 106, 107]
}]
