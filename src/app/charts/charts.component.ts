import { Component, OnInit } from '@angular/core';
import { MediateService } from '../mediate.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  chart = [];
  

  constructor(private _mediateService:MediateService) { }

  ngOnInit(): void {
    this.chart = this._mediateService.getCumulative();
  }
}
