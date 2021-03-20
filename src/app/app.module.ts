import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent, ControllerComponent]
})
export class AppModule { }
