import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediateService } from '../mediate.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-district-details',
  templateUrl: './district-details.component.html',
  styleUrls: ['./district-details.component.scss']
})
export class DistrictDetailsComponent implements OnInit {
  distDetail:any[];
  stateData = [];
  chartData = [];
  stateDetails = [];
  zoneDetails = [];
  obj = {};
  lst = [];
  zonelst = [];
  tableHeadings = ["District", "Confirmed", "Deceased", "Recovered"];
  head = ["distName", "confirmed", "deceased", "recovered"];
  zoneHead = ["district", "lastupdated", "zone"];
  constructor(private route:ActivatedRoute, private _mediateService:MediateService, private http:HttpClient) { }

  ngOnInit(): void {
    this.stateData = this._mediateService.getData();
    this.stateDetails = this._mediateService.getStateData();
    
    this.http.get<any[]>("https://api.covid19india.org/zones.json").subscribe(posts => {
      let temp = [];
   posts["zones"].forEach(k => {
     if (this.obj["stateName"] == k["state"]){
        temp.push(k);
     }
   })
   this.lst = temp;
   console.log(this.lst)
  })


    this.route.paramMap.subscribe(i => {
      this.stateData.forEach(dist => {
        if (dist['stateName'] == i.get('name')){
          this.distDetail = dist[i.get('name')];
          this.stateDetails.forEach(p =>{  
            if (p["stateName"] == i.get('name')){
              this.obj = p;
            }
          })
        }
      })
    })
    console.log(this.obj)
  
  
    
  }
  
}
