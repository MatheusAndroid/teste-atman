import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import {  Controller } from './models/controller';
import { Incident } from './models/incident';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
      ),
    responseType: 'text' as 'json'
  }
  url = "https://dev.atmansystems.com/attlas-public/api/"
  controllersUrl = "Controllers"
  incidentsUrl = "Incidents"
  
  getControllers(){
    return this.httpClient.get<Controller[]>(this.url + this.controllersUrl, this.httpOptions).pipe(map(res => {return JSON.parse(res.toString())}))
  }
  getControllerById(id :number){
    return this.httpClient.get<Controller[]>(this.url + this.controllersUrl + `/${id}`, this.httpOptions).pipe(map(res => {return JSON.parse(res.toString())}))
  }
  getIncidents(){
    return this.httpClient.get<Incident[]>(this.url + this.incidentsUrl, this.httpOptions).pipe(map(res => {return JSON.parse(res.toString())}))
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
