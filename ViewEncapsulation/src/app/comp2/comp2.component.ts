import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  /*Even we specify CSS styles globally in style.css,
	  Those styles will not be applied to associated template elements
	
	  Because of using `ViewEncapsulation.ShadowDOM`,on Comp2Component class
			
    In this case `Comp2Component` creates its own DOM.
    Hence the rendering of `Comp2Component` DOM and `main` DOM happens separatly
    The feature state and style of shadowDOM stay private and it doesnt get affected by `main` DOM 

	  which means, the browser keeps the `Comp2Component`'s DOM i.e., ShadowDOM separate from 
				                                                           Angular App `main` DOM 				*/

	/* Create a separate DOM for this Component and and stays separate from `main` DOM */
	
	encapsulation: ViewEncapsulation.ShadowDom
})
export class Comp2Component {

}
