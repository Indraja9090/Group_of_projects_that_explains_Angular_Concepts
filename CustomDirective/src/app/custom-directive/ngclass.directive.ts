import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNgclass]'
})
export class NgclassDirective {

  /* custom directive referenced <element> will be passed as a parameter to `constructor()` and also
    we need `renderer` is an instance to Renderer2 which allow us to manipulating the DOM programmaticly*/
  constructor(private eLement: ElementRef, private renderer: Renderer2){
  
  }
  /*`selector` value can be given as Alias name to `display` but then  we must use this alias name on host element 
         Hence The CSS class values that are binded to `appNgclass` will be passed to this custom property `display`  */

  //@Input('appNgclass') set display(cssClassObject: Object){	

  /*Replacing `display` with selector value `appNgclass` makes the CSS class values that are binded to `appNgclass` 
                                                        will dynamically apply on its host element.
        Hence this approach can be `custom Attribute directive binding` as similar to [ngClass] binindg*/
  @Input() set appNgclass(cssClassObject: Object){	//`cssClassObject` receives --- {container: 10 > 5, 'change-font': true}
    // entries(cssClassObject) method returns a array-list of arrays in [key, value] pairs for each CSSproperty of the object.		 
    let entries = Object.entries(cssClassObject);	
    console.log(entries);  // logs array-indexs, [0] -- ['container', '10 > 5'] & [1] -- ['change-font', 'true'] from Array-list of Arrays
    /* Below logic will dynamically apply CSS class on host element only if CSS classproperty has `true` conditionvalue  */
    /*  for(let entry of entries){	    //For each iteration we receive an array[]
          if(entry[1]){		         // in each obtained Array where 
                                    // [0] - cssclasspropertyname i.e., 'container' on 1st-iteration & 'change-font' on 2nd-iteration
                                   // [1] - cssclasspropertyvalue i.e., '10 > 5' on 1st-iteration & 'true'  on 2nd-iteration
            this.renderer.addClass(this.eLement.nativeElement, entry[0]);
          }
        } */
/* Below code gonna destructure the Array list returned by `entries()` */
    for(let [className, condition] of entries){
      if(condition){
        this.renderer.addClass(this.eLement.nativeElement, className);
      }
    }
  }
}
/* NOTE : 1.`set` allows us to use a `property` like a method() which allow us to write logic code inside it
            inorder to dynamically apply CSS styles to host element using CSS class values received as parameter to this `display` method()	 
           */     
/*EXAMPLE : `Object.entries()`
  const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
  };
  const entries = Object.entries(person);
  console.log(entries);
  
  OUTPUT:
  -------
  [
    ["name", "John"],
    ["age", 30],
    ["occupation", "Developer"]
  ]
*/

