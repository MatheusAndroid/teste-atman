import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IncidentComponent } from './incident/incident.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    IncidentComponent,
    MapComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NoopAnimationsModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent, ControllerComponent]
})
export class AppModule { }
