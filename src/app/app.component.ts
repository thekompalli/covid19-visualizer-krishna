import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened = false;
  toggleSidebar(){
    this.opened = !this.opened;
  }
 
  constructor(private http: HttpClient){}

  ngOnInit(){}
}
