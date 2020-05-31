import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediateService } from '../mediate.service';

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
  obj = {};
  tableHeadings = ["District", "Confirmed", "Deceased", "Recovered"];
  head = ["distName", "confirmed", "deceased", "recovered"];
  constructor(private route:ActivatedRoute, private _mediateService:MediateService) { }

  ngOnInit(): void {
    this.stateData = this._mediateService.getData();
    this.stateDetails = this._mediateService.getStateData();


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
