import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

	/*When we will use `selector` on an html element,
		- we gonna receive that html element as the 1st argument to `constructor()`           	
		- We also need instance of Renderer2 as a second argumnet to `contsructor()`
	Hence the Angular does the Dependency injection here via `constructor()`*/
  	constructor(private eLement: ElementRef, private renderer: Renderer2) {

  	}
  
	/*1.Defined a property given,`selector` value as its name and decorated with `@Input`
						 inorder to assign value from Component host element.
	  2.We also set this `@Input property` as method() using `setter` method on it,
				inorder to write somelogic to set the value of that property */
	@Input() set appHighlight(condition: boolean){
		/* Only if `condition` is `true` then only we wanna apply logic of `apphightlight` on host element*/
		if(condition){
			this.renderer.addClass(this.eLement.nativeElement, 'highlight');
		}
			
  	}

}
