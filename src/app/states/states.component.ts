import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediateService } from '../mediate.service';
import { AuthsService } from '../auths.service';


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {
  opened = false;
  toggleSidebar(){
    this.opened = !this.opened;
  }

  public stateData = [];
  heads = ['stateName', 'confirmed', 'deceased', 'recovered'];

  constructor(private _mediateService:MediateService, private auth:AuthsService) { }
  logout(){
    return this.auth.logout();
  }

  ngOnInit(): void {
    this.stateData = this._mediateService.getData()
  }

}
