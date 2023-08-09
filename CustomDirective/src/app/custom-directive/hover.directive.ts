import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private eLement: ElementRef, private renderer: Renderer2){

  }

/* 1.We need to tell Angular that `onMoveOver()` method should be called on `Host <HTML element>` which has
     custom Directive `selector` , Inorder to have these CSS style applied on that <HTML element>
   2. Hence we use `@HostListener()` directive with specified bowser `Event` name 'mouseenter',
             to tell Angular to call `onmoveover()` method when this 'mouseenter' event happens 
			on <HTML element> which has custom Directive `selector`  */
/* When the mouse enters or leaves the host <element>,
             the respective methods `onmouseover()` and `onmouseout()` will be triggered.*/
  @HostListener('mouseenter') onmouseover(){
    this.renderer.setStyle(this.eLement.nativeElement,'margin','5px 10px');
    this.renderer.setStyle(this.eLement.nativeElement,'padding','30px 30px');
    this.renderer.setStyle(this.eLement.nativeElement,'transition','0.5s');
  }

  @HostListener('mouseleave') onmouseout(){
    this.renderer.setStyle(this.eLement.nativeElement,'margin','10px 20px');
    this.renderer.setStyle(this.eLement.nativeElement,'padding','10px 20px');
    this.renderer.setStyle(this.eLement.nativeElement,'transition','0.5s');
  }

}

/*NOTE : 
1.The `@HostListener` decorator is provided by Angular
  - allows you to listen to events on the host element of a component or directive.
  - used to bind event listeners to specific events triggered on the host element.
  - When the specified event occurs, the corresponding method is executed.

2.The event names `mouseenter` and `mouseleave` are built-in browser events. 
  They are triggered when the mouse cursor enters or leaves an host <element> respectively. 
  The `onmouseover()` and `onmouseout()` methods are the event handler methods 
  that will be executed when these browser events occur.*/

/* ALWAYS REMEMBER :
1.Always make sure Every `Component` and `Directive` classes in Angular Application 
		should be IMPORTED and DECLARED at AppModule's `declarations` array
2.Whenever we use CUSTOM DIRECTIVE `selector` - that are `appHover`, `appHighlight`, `setBackground`,
	            on any <HTML element> or <component selector> in a code template,
	that <HTML element> or <component selector> reference must be passed as an ARGUMENT to 
	                                      the associated custom Directive class `constructor()`.
3. Ingeneral the Arguments that are passed to `constructor()` will not be accessable outside of the `constructor()`
	 BUT,if we define those Arguments with `private` kerword,
	     In back-end Angular - create a `Anonymus property` with the same-name of that Argument and,
                           - assigns that Argument's reference to the `Anonymus property` - which makes
                                          it accessable anywhere in custom `Directive` class    */



