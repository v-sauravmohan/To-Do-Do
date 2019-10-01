import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetdataService {
  dataPath: string;
  constructor(private http: HttpClient) {
    this.dataPath = '../../assets/JSON/todo_data.json';
   }

  getData() {
    return this.http.get(this.dataPath);
  }

  putData() {
    console.log('put data');
  }
}

