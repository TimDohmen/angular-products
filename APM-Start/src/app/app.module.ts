import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  // so html can find its selector
  // components must be declared in a module
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  // startup component
  bootstrap: [AppComponent]
})
export class AppModule { }
