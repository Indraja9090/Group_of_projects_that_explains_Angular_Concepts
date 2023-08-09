import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild';
  /*1.The parameters passed to @ViewChild may specify the component or element to be referenced and additional configuration options.

    2.In this case, `DemoComponent` is the component being referenced. 
      The second parameter, Anonymous object `{ static: true }`, is an optional configuration object that sets the `static` property to `true` 

    3.The `static` property determines when the reference is resolved.
      By setting it to `true`, the reference is resolved during the component's creation and will be available immediately.
      This means that `demoComp` will be initialized with the instance of `DemoComponent` as soon as the parent component is created.

    4.Once the `demoComp` variable is declared and assigned, you can access properties and methods of the `DemoComponent` instance using `demoComp`.
      This allows you to interact with the child component programmatically from the parent component.*/
  @ViewChild(DemoComponent, {static: true}) demoComp: DemoComponent; 
	
 
  /* These properties Assigned with reference-varible `#dobInput` & `#ageInput` which stores
                  reference to DOM <input type="date"> & <input type="text"> element.
  Sinec this property stores a reference to html element,
                its datatype gonna be ElementRef  */
  @ViewChild('dobInput') dateOfBirth: ElementRef  /* Hence `dateOfBirth` has reference to DOM <input type="date"> element */
  @ViewChild('ageInput') age: ElementRef/* Hence `age` has reference to DOM <input type="text"> element */

  
  calculateAge(){
    console.log(this.dateOfBirth);
    console.log(this.age);

    /*The `new Date()` function creates a new Date object, and you pass the input value to it.
    This will create a Date object representing the birth year entered by the user.

    As this `Date(this.dateOfBirt.nativeElement.value)` return `date&time` value ,hence
    by using `getFullYear()` we extracts the year component(e.g., 2023) from `date&time` and,
                  stores it in `birthyear`. */
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();

    /* extracting only the year from the current data&time returned by Date object */
    let currentYear = new Date().getFullYear(); 
    let calculatedAge = currentYear - birthYear;

    /* 1. NOW the above `calculatedAge` value is assigned to DOM <input>'s `value` property
          whose DOM reference stored in @ViewChild property 'age' 
          
       2. NOTE that -  Based on `(blur)` event  triggered,
          the UI <input> `value` property will be assigned with `calculatedAge`. */
    this.age.nativeElement.value = calculatedAge;
  }

}
/* @ViewChild() decorator help to assign,
                          Component class `property` 
                                    with
a reference to an `HTML element`,`component-selector element`or `a decorator` */ 

/* Hence Uisng `@ViewChild()` decorator -
  we can get access to an `html element` or a `component` or a `directive`
                        from the `view template`
                                to
                          a Component class
  we can also get access to `child-component class`
                      in the parent-component class using `@ViewChild decorator */
/*
  By using the "!" operator (non-null assertion operator) after the property declarations (dateOfBirth! and age!),
            - informs the compiler to trust that the property will not be null or undefined.
            - inform TypeScript that even though the properties are initially undefined, they will be assigned a value at runtime.

    @ViewChild('dobInput') dateOfBirth!: ElementRef  
    @ViewChild('ageInput') age!: ElementRef

*/
 
/* By using `dateOfBirth` which has reference to DOM <input type="date"> element 
  We pass the string `value` i.e., which user has selected date in UI <input> date-textbox
            To this `Date` object, which inturn,
  returns a new date&time based on UI <input> string `value` that we passed  */

/* calculateAge() method got executed based-on `(blur)` event on element
              <input type="date" #dobInput (blur)="caluculateAge()">
  At developer console we see that,
        this method() logs `ElementRef {nativeElement: input}` */

/* `nativeElement` property is `ElementRef` property which stores the DOM's actual html element i.e.,
      <input type="date" #dobInput (blur)="caluculateAge()">

/* ALWAYS REMEMBER : DOM <input>'s `value` property stores the data entered by user in webpage.
  Hence Initially when this App rendered in browser,the DOM <input> `value` property has empty string  */
