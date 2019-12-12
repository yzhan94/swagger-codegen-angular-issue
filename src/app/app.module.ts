import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApiModule } from '../hello-world-consumer';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
