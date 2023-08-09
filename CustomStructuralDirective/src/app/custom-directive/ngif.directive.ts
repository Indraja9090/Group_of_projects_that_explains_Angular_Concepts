import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgif]'
})
export class NgifDirective {


/* Inorder to create custom structural directive we need to have 2things,
		- What to add or remove
		- From where to add or remove		*/

/* To simply say :
  `template` has the view template on which we have used custom structural directive.
  'viewContainer` has the `container` inside which we will add or remove the view.*/
  constructor(private template: TemplateRef<any>,private viewContainer: ViewContainerRef){
  
  }
  
  /* The custom structural directive on host element will be assigned with a conditional value,
    hence that would be passed to @Input setter funtion*/
  @Input('appNgif') set displayView(condition: boolean){
    //Hence if the `condition` is `true` we gonna add directive associated view to DOM 
    if(condition){	
      /*`createEmbeddedView()` - Will create or embed a view inside this dynamic `viewContainer`*/
      /* passed `template` as its parameter as we wanna embed it in DOM */
      this.viewContainer.createEmbeddedView(this.template);
    }else {
       /*`clear()` -  Dynamically removes all views that are currently associated with the container.
          The views are removed from the DOM, meaning they are no longer rendered on the screen.*/
       this.viewContainer.clear();
    }
  }
    
}
/* Attribute Directive changes the look and behaviour of an element on which we have used it
   Structutal Directive manipulates the DOM by adding/removing element on which we have used it*/
/*If REMEMBER! - When we use Custome Attribute Directive on a <element>,
			the reference to this element must be passed as a parameter to its Directive class `constructor()`.

	Similarly  When we use Custome Structural Directive on a <element>, we need
		- the reference to this element must be passed as a parameter to its Directive class `constructor()` and,
		- we also need the container element `<ng-template>` i.e., where Angular 
						place this `ngIf` host element view template is present after expanding `*`.
*/
/*In Angular, the `TemplateRef` is a class provided by the `@angular/core` module. 
It represents the template of a component or a structural directive. 
It is used in conjunction with the ng-template directive to define reusable chunks of UI that can be dynamically rendered or manipulated.

The `TemplateRef` class allows you to access and manipulate the content of a template defined in your Angular application. 
It provides methods and properties that give you control over the template's structure and elements.

One common use of `TemplateRef` is within structural directives such as `ngIf` or `ngFor`. 
These directives accept a template as input and conditionally render or repeat elements based on certain conditions. 
The TemplateRef is used to pass the template content to these directives.

EXAMPLE : 
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myStructuralDirective]'
})
export class MyStructuralDirective {
  @Input() set myStructuralDirective(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
}*/
/*`templateRef`: This parameter of type `TemplateRef<any>`,
	- Represents the reference to the template associated with the directive. 
	- It provides access to the structure and content of the template defined in the Angular component or host element.

With the `templateRef`, you can perform various operations such as 
	creating embedded views, 
	accessing the template's elements or properties, and 
	passing the template to other directives or components.

`viewContainer`: This parameter of type ViewContainerRef 
	- Represents the container where views are rendered. 
	- It provides methods for creating, inserting, and removing views dynamically.

The `viewContainer` allows you to control the rendering of views associated with the directive. 
You can create embedded views using 
	the `createEmbeddedView` method of the viewContainer, 
	insert them into the container, and
	clear the container using the clear method*/