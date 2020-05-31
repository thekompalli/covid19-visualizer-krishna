import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Chart from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class MediateService {
stateData = [];
stateDetails = [];
chart1 = [];
chart2 = [];
chart3 = [];
chart4 = [];
chart5 = [];
chart6 = [];
  constructor(private http: HttpClient) { }

  getData(){

    this.http.get<any[]>("https://api.covid19india.org/v2/state_district_wise.json").subscribe(posts => {
      posts.forEach(i => {
        let lst = []
        let obj = {};
        obj["stateName"] = i["state"];
        this.stateData.push(obj);
        i["districtData"].forEach(j =>{
           let obj2 = {};
           obj2["distName"] = j["district"];
           obj2["confirmed"] = j["confirmed"];
           obj2["deceased"] = j["deceased"];
           obj2["recovered"] = j["recovered"];
           obj2["active"] = j["active"];
           lst.push(obj2);
           obj[i["state"]] = lst;
        })
      })
     })
     return this.stateData;
  }



  getStateData(){
    let lst = [];
    this.http.get('https://api.covid19india.org/data.json').subscribe(posts => {
      posts["statewise"].forEach(i => {
        let obj = {};
        obj["stateName"] = i["state"];
        obj["confirmed"] = i["confirmed"];
        obj["deaths"] = i["deaths"];
        obj["recovered"] = i["recovered"];
        obj["active"] = i["active"];
        lst.push(obj);
      })
      lst.push(lst.shift());
      this.stateDetails = lst;
    })
    return this.stateDetails
  }


  getCumulative(){
    let confirmedDetails = [];
    let deathDetails = [];
    let recoveredDetails = [];
    let activeDetails = [];
    let dailyConfirmed = [];
    let dailyDeceased = [];
    let dailyRecovered = [];
    let dates = [];
    let chart1 = [];
    let chart2 = [];
    let chart3 = [];
    let chart4 = [];
    let chart5 = [];
    let chart6 = [];
    this.http.get('https://api.covid19india.org/data.json').subscribe(posts => {

      posts["cases_time_series"].forEach(i =>{
        dates.push(i["date"]);
        confirmedDetails.push(i["totalconfirmed"]);
        deathDetails.push(i["totaldeceased"]);
        recoveredDetails.push(i["totalrecovered"]);
        dailyConfirmed.push(i["dailyconfirmed"]);
        dailyDeceased.push(i["dailydeceased"]);
        dailyRecovered.push(i["dailyrecovered"]);
      })

      chart1.push(new Chart('canvas', {
        type: 'bar',
        data: {
          labels: dates,
          datasets: [
            {
              label:"Confirmed",
              data:confirmedDetails,
              barThickness:2,
              backgroundColor: '#ff0000',
              fill: true
            },
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
      chart2.push(new Chart('canvas2', {
        type: 'bar',
        data: {
          labels: dates,
          datasets: [
            {
              label:"Deceased",
              data:deathDetails,
              barThickness:2,
              backgroundColor: '#ffffff',
              fill: true
            },
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
      chart3.push(new Chart('canvas3', {
        type: 'bar',
        data: {
          labels: dates,
          datasets: [
            {
              label:"Recovered",
              data:recoveredDetails,
              barThickness:2,
              backgroundColor: '#008000',
              fill: true
            },
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
      chart4.push(new Chart('canvas4', {
        type: 'bar',
        data: {
          labels: dates,
          datasets: [
            {
              label:"Confirmed",
              data:dailyConfirmed,
              barThickness:2,
              backgroundColor: '#ff0000',
              fill: true
            },
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
      chart5.push(new Chart('canvas5', {
        type: 'bar',
        data: {
          labels: dates,
          datasets: [
            {
              label:"Deceased",
              data:dailyDeceased,
              barThickness:2,
              backgroundColor: '#ffffff',
              fill: true
            },
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
      chart6.push(new Chart('canvas6', {
        type: 'bar',
        data: {
          labels: dates,
          datasets: [
            {
              label:"Recovered",
              data:dailyRecovered,
              barThickness:2,
              backgroundColor: '#008000',
              fill: true
            },
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
  this.chart1 = chart1;
  this.chart2 = chart2;
  this.chart3 = chart3;
  this.chart4 = chart4;
  return [this.chart1, this.chart2, this.chart3, this.chart4, this.chart5, this.chart6];
}
}

