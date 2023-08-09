import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  /* Inorder to pass the value from Component template to Directive class we can use `custom property binding`
           We must define the properties with `@Input` decorator in order to make use them as `custome property binding`*/     
  @Input() defaultColor: string = 'transparent';
  /*  1.We have given custom directive `selector` value as an alias name to Directive class `@Input` property
          hence we need to use alias name on host element in order to pass value from component to this Directive class `@Input` property
                  2. Hence this approach is the custom Attribute directive which is similar to built-in Attribute Directive i.e.,[ngStyle] */
  @Input('appBetterHighlight') highlightColor: string = 'pink';
  @Input() title: string = 'I am a title';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('title') tooltip: string = this.title;
  constructor(private eLement: ElementRef, private renderer: Renderer2){

  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  /* `@HostBinding` decorator binds the host <element> property to a Variable/property defined in Directive or Component class*/ 
  /* Hence the `BetterHighlightDirective` class property `background` is binded with HTML property `style.backgroundColor` 
                                                                                    whose value is set to `transparent`         */
  @HostListener('mouseenter') onmouseover(){
    this.backgroundColor = this.highlightColor;
    this.border = 'red 2px solid';
  }

  @HostListener('mouseleave') onmouseout(){
    this.backgroundColor = this.defaultColor;
    this.border = 'red 2px solid';
  }
}
/*The @HostBinding() decorator is a built-in decorator provided by Angular
    - allows you to bind a `Component` or `Directive`class property to a host <element>'s property or attribute. 
    - Used to DEFINE A PROPERTY on a `Component` or `Directive` class that will reflect 
                                                        the value of a specific HTML property or attribute on the host <element>.*/
/* NOTE THAT:
   1.At app.html we binded host <element> custom property `[defaultColor]` with value 'yellow' , 
     But we see no color applied at UI that is because when this App loaded in browser the custom property would be assigned with value 'transparent'. 
   2. Hence we Assigned `defaultColor` value to `background` at `ngOnInit()` which is a 
                         First Angular Lifecycle hook which will be INVOKED ONLY ONCE right after FIRST CHANGE DETECTION happen.
     By the time when this hook get called, the @Input property of Components are updated.*/
    