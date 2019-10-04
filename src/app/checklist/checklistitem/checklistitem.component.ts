import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checklistitem',
  templateUrl: './checklistitem.component.html',
  styleUrls: ['./checklistitem.component.scss']
})
export class ChecklistitemComponent implements OnInit {
  @Input()
  item: any;
  constructor() { }

  ngOnInit() {
  }

}
