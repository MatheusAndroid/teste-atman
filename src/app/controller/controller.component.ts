import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Controller} from '../models/controller'
import {ApiService} from '../api.service'
import { NextObserver, Observable } from 'rxjs';
@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  constructor(private apiService: ApiService) {
    
  }
  controller = {} as Controller
  controllers: Array<Controller> = []; 

  ngOnInit(): void {
    this.getControllers()
    console.log("busquei controllers", this.controllers)
  }
  getControllers(){
    this.apiService.getControllers().subscribe(data => {
      this.controllers = data  
      console.log(this.controllers)

    })
  
}}
