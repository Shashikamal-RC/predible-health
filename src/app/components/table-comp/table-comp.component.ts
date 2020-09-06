import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.scss']
})
export class TableCompComponent implements OnInit {

  @Input('tableData') tableData;

  constructor() { }

  ngOnInit(): void {
  }

}
