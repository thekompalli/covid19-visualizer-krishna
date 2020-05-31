import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediateService } from '../mediate.service';


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  public stateData = [];
  heads = ['stateName', 'confirmed', 'deceased', 'recovered'];

  constructor(private _mediateService:MediateService) { }

  ngOnInit(): void {
    this.stateData = this._mediateService.getData()
  }

}
