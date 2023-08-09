import { Component } from '@angular/core';

@Component({
  selector: '[app-nav]',  /* We can use selector value as HTML element attribute by keeping it in [] */
  /* selector: '.app-nav' ---  We can use selector value as CSS class property to HTML element by keeping `.` */
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  sitename: string = "eShopping";

}
