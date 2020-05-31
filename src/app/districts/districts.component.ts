import { Component, OnInit } from '@angular/core';
import { MediateService } from '../mediate.service';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss']
})
export class DistrictsComponent implements OnInit {
  stateData = [];

  constructor(private _mediateService:MediateService) { }

  ngOnInit(): void {
    this.stateData = this._mediateService.getData();
  }

}
