import { Component } from "@angular/core";

@Component({
  // use this selector to insert into your index
  selector: 'pm-root',
  // linked template vs inline template
  template: /*html*/`
  <div>
  <h1>{{pageTitle}}</h1>
  <h3> This is the first component </h3>
  <div>
  `
})

export class AppComponent {
  // can put breakpoints in this to watch values as it builds
  pageTitle: string = 'Acme Product Management';
}