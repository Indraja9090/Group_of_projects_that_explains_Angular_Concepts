import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNgstyle]'
})
export class NgstyleDirective {

  /*When we will use `selector` on an html element,
        - we gonna receive that html element as the 1st argument to `constructor()`           	
        - We also need instance of Renderer2 as a second argumnet to `contsructor()`			
  Hence the Angular does the Dependency injection here via `constructor()`*/
  constructor(private eLement: ElementRef, private renderer: Renderer2) {
  }
  /*`selector` value can be given as Alias name to `setStyle` but then  we must use this alias name on host element 
         Hence The CSS class values that are binded to `appNgStyle` will be passed to this custom property `setStyle`  */

  //@Input('appNgStyle') set setStyle(cssClassObject: Object){ 

  /*Replacing `setStyle` with selector value `appNgStyle` makes, CSS style values that are binded to `appNgStyle` 
                                              will dynamically apply on its host element.
            Hence this approach can be `custom Attribute directive binding` as similar to [ngClass] binindg*/
  @Input() set appNgstyle(cssStyleObject: Object){ 	//`cssStyleObject` receives {backgroundColor: 'pink', color: 'white', fontWeight: 'bold'}
    /* entries(cssStyleObject) method loops over `cssStyleObject` and
      returns a array-list of arrays in [key, value] pairs for each property of the `cssStyleObject`.*/
    let entries = Object.entries(cssStyleObject) 
    console.log(entries);  // logs [0] - ['backgroundColor', 'pink'] & [1] - ['color', 'white'] --- from Arraylist of arrays
    /* Below logic will dynamically apply CSS styleproperty values  on host element */
    for(let entry of entries){	//For each iteration we receive an array[]
      /* in each obtained Array where 
        [0] - stylepropertyname i.e., 'backgroundColor' on 1st-iteration & 'color' on 2nd-iteration
        [1] - stylepropertyvalue i.e., 'pink' on 1st-iteration & 'white'  on 2nd-iteration*/
      this.renderer.setStyle(this.eLement.nativeElement, entry[0], entry[1]);
      
    }
  }
}
/*Always Remember : when we use setter method on propertyname we can use that property like a method()
                    which allows us to write logic in it to set the value of that property to host element*/