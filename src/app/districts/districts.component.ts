import { Component, OnInit } from '@angular/core';
import { MediateService } from '../mediate.service';
import { AuthsService } from '../auths.service';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss']
})
export class DistrictsComponent implements OnInit {
  stateData = [];
  opened = false;
  toggleSidebar(){
    this.opened = !this.opened;
  }

  constructor(private _mediateService:MediateService, private auth:AuthsService) { }
  logout(){
    return this.auth.logout();
  }

  ngOnInit(): void {
    this.stateData = this._mediateService.getData();
  }

}
