import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  stateData = [];
  heads = ['stateName', 'confirmed', 'deceased', 'recovered'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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
          obj2["recovered"] = j["recovered"]
          lst.push(obj2);
          obj[i["state"]] = lst;
       })
     })
    })
    console.log(this.stateData)
  }

}
