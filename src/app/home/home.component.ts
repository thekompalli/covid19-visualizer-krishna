import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Chart from 'chart.js';
import { AuthsService } from '../auths.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened = false;
  toggleSidebar(){
    this.opened = !this.opened;
  }
  
  stateDetails = [];
  confirmedDetails = [];
  deathDetails = [];
  recoveredDetails = [];
  dailyConfirmed = [];
  dailyDeceased = [];
  dailyRecovered = [];
  dates = [];
  heads = ["stateName", "confirmed", "deaths", "recovered", "active"];
  stateHeading = ["State Name", "Confirmed", "Deaths", "Recovered", "Active"];
  chart1 = [];
  chart2 = [];
  getArrayNumber(length){
    return new Array(length/19);
  };
  startIndex = 0;
  endIndex = 20;
  updateIndex(pageIndex){
    this.startIndex = pageIndex*20;
    this.endIndex = this.startIndex+20;
  }

  getName(index){
    return this.stateDetails[index]["stateName"]
  }
 


  constructor(private http: HttpClient, private auth:AuthsService) { }
  logout(){
    return this.auth.logout();
  }
  ngOnInit(): void {

    this.http.get('https://api.covid19india.org/data.json').subscribe(posts => {
  
      posts["statewise"].forEach(i => {
        let obj = {};
        obj["stateName"] = i["state"];
        obj["confirmed"] = i["confirmed"];
        obj["deaths"] = i["deaths"];
        obj["recovered"] = i["recovered"];
        obj["active"] = i["active"];
        this.stateDetails.push(obj);
      })
      this.stateDetails.push(this.stateDetails.shift())
    })
    
  

    this.http.get('https://api.covid19india.org/data.json').subscribe(posts => {
      posts["cases_time_series"].forEach(i =>{
        this.dates.push(i["date"]);
        this.confirmedDetails.push(i["totalconfirmed"]);
        this.deathDetails.push(i["totaldeceased"]);
        this.recoveredDetails.push(i["totalrecovered"]);
        this.dailyConfirmed.push(i["dailyconfirmed"]);
        this.dailyDeceased.push(i["dailydeceased"]);
        this.dailyRecovered.push(i["dailyrecovered"]);
      })
      this.chart1.push(new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              label:"Confirmed",
              data:this.confirmedDetails,
              borderColor:'#1e90ff',
              fill: false
            },
            {
              label: "Deceased",
              data: this.deathDetails,
              borderColor: '#ff0000',
              fill: false
            },
            {
              label: "Recovered",
              data: this.recoveredDetails,
              borderColor: '#80ff00',
              fill: false
            }
          ]
  
        },
        options:{
          legend: {
            display: true,
            
            labels: {
              fontColor: "#1e90ff"
            }
          },
          scales:{
            xAxes: [{display: true}],
            yAxes: [{display: true}]
          }
        }
      })
      )
      
      this.chart2.push(new Chart('canvas2', {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              label:"Daily Confirmed",
              data:this.dailyConfirmed,
              borderColor:'#1e90ff',
              pointHoverRadius: 5,
              fill: true,
              backgroundColor:'#1e90ff'
            },
            {
              label: "Daily Deceased",
              data: this.dailyDeceased,
              borderColor: '#ff0000',
              pointHoverRadius: 5,
              fill: true,
              backgroundColor:'#ff0000'
            },
            {
              label: "Daily Recovered",
              data: this.dailyRecovered,
              pointHoverRadius: 5,
              borderColor: '#80ff00',
              fill: true,
              backgroundColor:'#80ff00'
            }
          ]
  
        },
        options:{
          legend: {
            display: true,
            
            labels: {
              fontColor: "#1e90ff"
            }
          },
          scales:{
            xAxes: [{display: true}],
            yAxes: [{display: true}]
          }
        }
      })
  
      
      )


    })
    
   
  }
  }

