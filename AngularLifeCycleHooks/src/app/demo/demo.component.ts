import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
/* Enough to import hook's interface methods, Not manditory to write them to class */
export class DemoComponent implements OnInit,OnChanges,DoCheck,
AfterContentInit,AfterContentChecked,AfterViewInit,OnDestroy{

  /* value: string = 'procademy'; */
  @Input() value: string = 'procademy';

  constructor(){
  console.log('constructor called');
  //console.log(this.value); ----- Commented bcoz to explore `ngOnChanges()`
  }

  /*The ONLY Lifecycle hook which takes ARGUMENT/PARAMETER.*/
  ngOnChanges(change: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(change);  
  }

  /* 1. This hook will be invoked only ONCE right after FIRST CHANGE DETECTION CYCLE.
    REMEMBER - `ngOnInit()` called only afer the constructor got executed.
  2. By the time when this hook get called, the @Input property of Components are updated.
  3. Hence its perfect place to add any intialization logic for Component  */
  ngOnInit(){
    console.log('ngOnInit called only afer the constructor got executed');
    //console.log(this.value); ------ Commented bcoz to explore `ngOnChanges()`
  }

  ngDoCheck(){
    console.log('ngDoCheck called');

  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  /* Gets called ONLY ONCE during the FIRST CHANGE DETECTION CYCLE 
  i.e., when components view and all its child views are fully initialized by Anguklar. */ 
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }


  ngOnDestroy(){
    console.log('ngAfterViewChecked called');
  }


}
 
/* `constructor()`:
1. When this Aangular App will run,
        Angular finds that we have used the <app-demo> selector in app.html
                     Then Angular instantiates DemoComponent class.
    When a Component class get instantiated,
           the first method which gets called is `constructor()`.
    It is primarily used for `dependency injection` and `basic initialization`.

2. ALWAYS REMEMBER :
         when constructor gets called,the @Input properties of Component 
                              will not be updated and also not available to use.

ForExample: At app.html, Even the @Input `value`  is binded to
           AppComponent's `inputText` property initially whose is `empty string`
                                        but `constructor()` logs only "procademy"	*/

/* `ngOnChanges()`:
1.Gets called
            - When Angular App runs for 1st time and also,
            - After each time any Components `@Input property` value changes.

  For Example : 1. At UI <input> textbox, EVERYTIME user enter data and PRESS `submit` buttom,
                  the DemoComponent's @Input `value` will get updated (BCOZ it is binded with
                          AppComponent's property "inputText" which has reference to 
                                      DOM <input> textbox `value` at app.html).
2. The ONLY Lifecycle hook which takes ARGUMENT/PARAMETER.
    EXPALANTION :   ngOnChanges(change: SimpleChanges){
                      console.log('ngOnChanges called');

                       At console this `change` parameter logs value which refers to
                                            DemoComponent's @Input `value` property.
                                            we see as,
                                            value: SimpleChange
                                                    |
                                                currentValue: " "
                                                firstChange: true
                                                previousChange: undefined    
                      console.log(change);  
                      }
3. Hence for EVERYTIME DemoComponent's @Input `value` updated,the hook `ngOnChanges()` will be called. 
     We can also OBSERVE THE CHANGES at developers console by expanding 
                        `{value: SimpleChange}` after couple of `submit` button
                                  |
                              currentValue: "def"  --- it's the value enter by user on current `submit`.
                              firstChange: false
                              previousChange: "abc" --- it's the value enter by user on previous `submit`.
4. ALWAYS REMENBER :
         `ngOnChanges()` WILL NOT BE CALLED when there is no change in @Input `value`.
  For Example: If user PRESSED `submit` button WITHOUT CHANGING PREVIOUSLY ENTERED DATA,
      then Angular will not invoke `ngOnChanges()`.
*/
/* ngDoCheck():
1.Get called EVERYTIME CHANGE DETECTION CYCLE RUNS. 
2. NOTE that,
      At DEVELOPER CONSOLE, we see - `ngDoCheck()` was called twice that's BCOZ
          a CHANGE DETECTION CYCLE occured again as Angular loaded a `core.mjs` file. 

And FOR EXAMPLE - user entered data at UI textbox and PRESSED `submit` button 
              then Angular runs both `ngOnChanges()` and `ngDoCheck()` called, BCOZ
                        - DemoComponent's @Input 'value` updated and
                        - CHANGE DETECTION CYCLE occured as click `Event` happend 
                                          on `submit` button at UI                 */
/*`ngAfterContentInit()` : 
1. Gets called when Components pro-jected content has been fully initialized.
2. REMEMBER this hook will be called ONLY ONCE during FIRST CHANGE DETECTION CYCLE happen,
                    after that `ngAfterContentInit()` doesnt get called by Angular.

For Example : Even the Component selector's PRO-JECTED CONTENT UPDATED ,
                          `ngAfterContentInit()` will not get called.   */
/*`ngAfterContentChecked()` : 
1. Get called - EVERYTIME CHANGE DETECTION CYCLE RUNS and,
              - EVERYTIME Component selector's PRO-JECTED CONTENT UPDATED .
2.NOTE that,
 At DEVELOPER CONSOLE, we see `ngAfterContentChecked()` was called twice that's BCOZ
                a CHANGE DETECTION CYCLE occured again as Angular loaded a `core.mjs` file.
For Example: If user ENTER data at UI textbox and PRESS `submit` button,
             Angular runs 'ngOnChanges()`,`ngDoCheck()`,`ngAfterContentChecked()` that's BOCZ 
                          - DemoComponent's @Input 'value` updated and
                          - CHANGE DETECTION CYCLE occured as click `Event` happend 
                                                  on `submit` button at UI
                          - DemoComponent selector's PRO-JECTED CONTENT UPDATED dynamically as
                                                    it has string-Interpolation-data-binding. */
/*`ngAfterViewChecked()` :
1.Gets called FOR EACH CHANGE DETECTION CYCLE.
For Example: If user ENTER data at UI textbox and PRESS `submit` button,
             Angular runs 'ngOnChanges()`,`ngDoCheck()`,`ngAfterContentChecked()`,`ngAfterViewChecked()` that's BOCZ 
                          - DemoComponent's @Input 'value` updated and
                          - CHANGE DETECTION CYCLE occured as click `Event` happend 
                                                                on `submit` button at UI.
                          - DemoComponent selector's PRO-JECTED CONTENT UPDATED dynamically as
                                                          it has string-Interpolation-data-binding.
                          - The HTML template view of webpage updated `                             */
/*`ngOnDestroy()` :
1.Gets called ONLY RIGHT BEFORE Component or directive gets Destroyed.
FOR EXAMPLE:  <app-demo [value]="inputText" *ngIf="destroy"> 
              Here we binded *ngIf to AppComponent's `destroy` property value,initially which is `true`.
                                  
              At app.html we also created a `Destroy` button with `(click)` event which sets 
                                                    AppComponent's `destroy` property value to `false`.
              Hence  By this `ngOnDestroy()` will be called just before `DemoComponent` 
                                                              gonna destroyed from DOM by Angular  */
