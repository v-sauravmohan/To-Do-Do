import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  data: any;
  list: any;
  constructor(private getdata: GetdataService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.getdata.getData().subscribe(
      data => {
      this.data = data;
      this.list = tryGet( () => this.data.to_do_list, []);
      },
      err => {
      console.log(err);
      }
    );
  }
}
