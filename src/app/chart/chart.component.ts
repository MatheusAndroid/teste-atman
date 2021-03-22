import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet, SingleDataSet } from "ng2-charts";
import { Incident } from '../models/incident';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() incidents!: Incident[] 
  constructor() { }
  
  doughnutChartLabels: Label[] = ['Controlador Funcionando', 'Falhas', 'Intermitente'];
  doughnutChartData: MultiDataSet = [
    [65, 15, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    
  }
  ngOnChanges(): void{
   
  }
  
}
