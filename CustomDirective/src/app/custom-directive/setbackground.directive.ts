import { Directive, ElementRef } from '@angular/core';

@Directive({
    // Wrapped in `[ ]` to make it use as Attribute to <HTML element> or <Component selector>
    selector: '[setBackground]'
})    
export class SetBackgroundDirective {


    // private elementRef: ElementRef;

    constructor(private customAttriEleRef: ElementRef) { 
        /* Here we setting the CSS style to DOM <HTML element> by directly accessing it */        
        // customAttriEleRef.nativeElement.style.backgroundColor = '#C8E6C9';

        //this.elementRef = customAttriEleRef;
    }

    /* writing Directive logic inside `constructure()` WILL NOT BE PROFESSIONAL.
        Hence we gonna write the logic in `ngOnInit()` - which will be called 
                          right after the Directive class is completely initialized */
    ngOnInit() {
        //this.elementRef.nativeElement.style.backgroundColor = '#C8E6C9';
        this.customAttriEleRef.nativeElement.style.backgroundColor = '#C8E6C9';
    }
}
/*1.On whichever <HTML element> or <Component selector> we use this `setBackground` Attribute directive,
                            that <HTML element> or <Component selector> reference passed as PARAMETER to the `constructor()` and 
        It will only be local to `constructor()` and CAN NOT BE ACCESSED outside of `constructor()`.
2.Hence At first, we created a property `elementRef` and assigned with `customAttriEleRef` at `constructor()`.     
    BUT there also a shorthand way to use `customAttriEleRef` outside of `constructor()` is 
                                        to keep `private` keyword to parameter `customAttriEleRef`.
Hence Behind the scenes, 
    TypeScript creates Anonymous private property named similar to `customAttriEleRef` at `SetBackgroundDirective` class
            which will assigned with constructor()'s parameter reference `customAttriEleRef` and,
                    will be accessable anywhere in class `SetBackgroundDirective` 
3. Also this `customAttriEleRef` is type of `ElementRef` will have a `nativeElement` property which stores 
        actual <HTML element> - on which we have used this `setBackground` Attribute directive  */
/* REMEMBER! -
    1. We can use `selector` value as <HTML element> or Attribute to <HTML element> or CSS class to <HTML element>.
    2.Always make sure Every `Component` and `Directive` classes in Angular Application 
        must be IMPORTED and DECLARED at AppModule's `declarations` array.		*/

