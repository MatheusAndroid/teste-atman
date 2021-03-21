import { Component, OnInit } from '@angular/core';
import {Incident} from '../models/incident'
import {ApiService} from '../api.service'
@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  public incidents : Incident[]
  constructor(private apiService: ApiService) {
    this.incidents = []
   }

  ngOnInit(): void {
    this.getIncidents()
  }

  getIncidents(){
    this.apiService.getIncidents().subscribe((data : Incident[])=>{
      console.log("incidents", data)
      this.incidents = data
    })
  }

}
