import { Component, OnInit } from '@angular/core';
import { MediateService } from '../mediate.service';
import { AuthsService } from '../auths.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  chart = [];
  opened = false;
  toggleSidebar(){
    this.opened = !this.opened;
  }
  

  constructor(private _mediateService:MediateService, private auth:AuthsService) { }
  logout(){
    return this.auth.logout();
  }

  ngOnInit(): void {
    this.chart = this._mediateService.getCumulative();
  }
}
