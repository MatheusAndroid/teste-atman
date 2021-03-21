import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IncidentComponent } from './incident/incident.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    IncidentComponent,
    MapComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, ControllerComponent]
})
export class AppModule { }
