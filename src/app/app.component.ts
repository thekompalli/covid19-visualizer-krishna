import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Chart from 'chart.js';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private titleService:Title){
    this.titleService.setTitle("COVID19");
  }

  ngOnInit(){}
}
