import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {  Controller } from './models/controller';
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
  
  getControllers(): Observable<Array<Controller>>{
    return this.httpClient.get<Array<Controller>>(this.url + this.controllersUrl, this.httpOptions).pipe(retry(2),catchError(this.handleError))
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
