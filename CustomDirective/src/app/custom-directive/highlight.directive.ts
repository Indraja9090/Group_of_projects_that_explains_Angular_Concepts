import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  /* 1.ALWAYS REMEMBER : On whichever <HTML element> or <Component selector> we use this `setBackground` Attribute directive,
                      that <HTML element> or <Component selector> reference passed as PARAMETER to the `constructor()`
     Hence this `customAttriEleRef` is type `ElementRef` which will have a `nativeElement` property which stores 
            actual <HTML element> which has this `appHighlight` Attribute directive   */
  /* 2.Created a parameter variable `renderer` which has reference to class `Renderer2` - Which allows
       to manipulates the DOM without access the DOM'S actual <HTML element> directly */
  /* 3. As `cutsomAttriEleRef` & `renderer` local to `constructor()` and they CAN NOT BE ACCESSED outside of `constructor()`.
     Hence to make the accessable anywhere in class `HighlightDirective`
                            keep `private` keyword to `cutsomAttriEleRef` & `renderer` */
  constructor(private cutsomAttriEleRef: ElementRef, private renderer: Renderer2) {
    console.log(cutsomAttriEleRef.nativeElement);
  }
  ngOnInit() {
    /* setting `CSS style` to <html element> by applying
                      custom directive`appHighlight` on it at app.html */
    this.renderer.setStyle(this.cutsomAttriEleRef.nativeElement, "backgroundColor", "#F1948A");
    this.renderer.setStyle(this.cutsomAttriEleRef.nativeElement, "color", "green");
    this.renderer.setStyle(this.cutsomAttriEleRef.nativeElement.querySelector('h4'), 'textAlign', 'center');

    /* setting `CSS class` to <html element> by applying custom directive`appHighlight` on it at app.html  */
    /* `continer` is the class whoes values are defined in app.css*/
    this.renderer.addClass(this.cutsomAttriEleRef.nativeElement, "container");
    //this.renderer.addClass(this.element.nativeElement, "margin: 10px 20px; padding: 10px 20px;");

    /* setting `HTML Attribute` to <html element> by applying
                      custom directive`appHighlight` on it at app.html  
     The `title` attribute defines some extra information about an HTML element.*/
    this.renderer.setAttribute(this.cutsomAttriEleRef.nativeElement, "title", "I'm a tooltip");
  }
}

/* `Renderer2` class provide several methods() which can be used to
		- set `CSS style` for an <HTML element> or <Component selector>
		- add `CSS class` to <HTML element>
		- Also set some `HTML Attribute` for <HTML element>		*/
/* PARAMETERS that `setStyle()` expect :
   1st parameter - `<html element>` - for which we wanna set CSS style
	  and the `cutsomAttriEleRef` has reference to that <html element>
   2nd parameter - `CSS style` -  which we want to set to `<html element>`
   3rd parameter - `value` for the CSS style 
   4th parameter - `flag` - for style variations,which is optional
		            No flags are set by default.                        */

/*1. The `Renderer2` provides a set of methods that abstract away the direct manipulation of the DOM,
          offering a safer and more platform-independent way to work with the DOM elements. 
  2. It is commonly used when you need to modify the DOM programmatically, create or update elements, apply styles, or handle events.

Creating and modifying elements:

1.createElement(): Creates a new element with the specified tag name.
2.createText(): Creates a text node with the specified content.
3.appendChild(): Appends a child element to a parent element.
4.removeChild(): Removes a child element from its parent.

Modifying element attributes and properties:

1.setAttribute(): Sets the value of an attribute on an element.
2.removeAttribute(): Removes an attribute from an element.
3.setProperty(): Sets the value of a property on an element (e.g., value, innerHTML).

Applying styles and classes:

1.setStyle(): Sets the value of a CSS style property on an element.
2.addClass(): Adds a CSS class to an element.
3.removeClass(): Removes a CSS class from an element.

Listening to events:

1.listen(): Registers an event listener on an element.*/

/* The `querySelector()` method - 
        is a built-in method in JavaScript that allows you to select the first element that matches a specified CSS selector within a given context.
        It is commonly used to access and manipulate elements in the DOM (Document Object Model).

    SYNTAX -    <element>.querySelector('selector')

          HERE `selector`  -   A string representing the CSS selector to match the desired element(s).
  1.The `querySelector()` method returns the first element within the specified context that matches the given selector.
                                               If no element is found, it returns null.
  2.The `querySelector()` method is called on an <element> to find a descendant <element> that matches the provided CSS selector.
  3.The `selector argument` can be any valid CSS selector, such as element names, class names, IDs, attribute selectors, or combinations of these.

      EXAMPLE -     const parentElement = document.getElementById('parent');
                    const childElement = parentElement.querySelector('.child');

  In this example, the querySelector() method is used to select the first element with the class name "child" 
                      that is a descendant of the element with the ID "parent". The selected element is stored in the `childElement` variable.
NOTE :  `querySelector()` returns only the first matching element. 
        If you want to select multiple elements that match a selector, you can use the `querySelectorAll()` method instead, 
                                                                    which returns a NodeList containing all the matching elements.*/
