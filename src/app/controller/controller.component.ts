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

  //controller = {} as Controller
  public controllers: Controller[]
 

  constructor(private apiService: ApiService) {
    this.controllers = []
    
  }

  ngOnInit(): void {
    this.getControllers()
    
  }
  getControllers(){
    this.apiService.getControllers().subscribe((data : Controller[]) => {
      console.log(typeof data, data)
      this.controllers = data
    })
  
}}
