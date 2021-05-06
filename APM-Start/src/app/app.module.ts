import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';

@NgModule({
  // so html can find its selector
  // components must be declared in a module
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces
  ],
  // our local directives fomr from declarations
  // directives components and pipes from other exports go in imports
  imports: [
    BrowserModule,
    FormsModule
  ],
  // startup component
  bootstrap: [AppComponent]
})
export class AppModule { }
