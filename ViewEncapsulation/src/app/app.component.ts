import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.None  
})
export class AppComponent {
  title = 'ViewEncapsulation';
}




/* CONCEPT : ViewEncapculation.None */

/* Specifying a property `encapsulation` of type `ViewEncapsulation` */

/* Here we configuring the encapsulation behavior of a component's styles with option `None`.*/
/*  `ViewEncapsulation.None` - disables the default encapsulation behavior for this component.

     It means that the component's styles will not be only encapsulated within the component's view,
     instead allowing them to potentially affect other components and the global styles of the application. */

/* Hence here the specified CSS style for `button` in app.css will be applied to 
			all <button> of `child-component` as well  */
