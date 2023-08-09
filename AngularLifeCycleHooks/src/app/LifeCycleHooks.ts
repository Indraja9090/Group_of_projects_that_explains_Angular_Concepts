/*
# Angular Lifecycle Hook: 

1.when a new component is created in Angular project and when Angular finds one of the Component selectors,
       it will instantiate the new version of that Component and it will add it to the DOM.
Example:
  <app-product></app-product>
  <app-product></app-product>
  <app-product></app-product>
	  
Here Angular will instantiate the ProductComponent class 3 times.
Which means, Everytimes Angular finds the Component's selector element
                             Angular will instantiate that Component class to DOM.

2.Once a newly generated Component class is instantiated 
   Angular goes through different phases in this creation process and,
        it also gives us a chance to actually hook into these phases and execute some code.

3.we can hook into these phases by implementing some methods 
                 which angular will call if they are present in the Component class.

  Hence these methods are called as Angular Lifecycle Hooks.

# Change detection cycle:

            It's mechanism by which angular keeps the template in sync with the component.

Example:
  <div>Hello {{ name }}</div>

    Here Angular will instantly update DOM everytime the value of `name` property changed.

1. BY running a change detection cycle 
     on every event(Which are input,DOM events,timer events like settimeout,setinterval,httprequest etc)
                       that may result in a change in DOM.
 
2. During Change Detection cycle Angular checks
       each and every bound property in the template with the component class.

3. And If angular detects any change it will update the DOM.

   During This Process Angular raises
           the Lifecycle hooks during the important stages of change detection mechanism

1st LIFE-CYCLE HOOK:
    Once Angular instantiates the class,
              it kick-start the first change detection cycle of the component or a directive creation,i.e.,

	    `ngOnChanges` - Raised at very beginning i.e., when Angular project starts and also
                        evertime when @input property of Component is changed by parent Component
                                            then angular raises ngOnChanges hook otherwise it will not raise. 
2nd LIFE-CYCLE HOOK:
		`ngOnInit` - Raised when angular creates the Component and updates its @Input properties.
			         Remeber This hook id fired only once and immediately after its creation 
							i.e., during first change detection.
3rd LIFE-CYCLE HOOK:	
 	    `ngDoCheck`- Raised during every change detection cycle even if there is no change in any @Input property.

4th LIFE-CYCLE HOOK: 
        `ngAfterContentInit`- Its a component only hook  i.e., It's not applicable on directive 
			                  Raised only once during the first change detection cylce 
                          i.e., after the Component-selector-element's pro-jected content has been fully initialized.
5th LIFE-CYCLE HOOK:
	    `ngAfterContentChecked`  - Its a component only hook  i.e., It's not applicable on directive.
				                    Almost similar to `ngAfterContentInit` Raised after every change detection cycle.
6th LIFE-CYCLE HOOK: 
	    `ngAfterViewInit` - Its also a component only hook i.e., It's not applicable on directive. 
			                Called only once during the first change detection cycle,
                                   i.e., when all the view of component and its child component has been intialized
			                If there is any change happens after the first change detection cycle in the view,
				                                at that time this hook will not get called
7th LIFE-CYCLE HOOK:	
	    `ngAfterViewChecked` - Its also a component only hook i.e., It's not applicable on directive.
			                   Raised after `ngAfterViewInit` and also during every change detection cycle.
			                   Angular fires this hook after it checks & updates the component's view and child view.
			                   If there is any changes happens after the first change detection cycle in the view,
				                                                        at that time this hook will be called				
8th LIFE-CYCLE HOOK:
	ngOnDestroy: Called when *ngIf will remove component from DOM as component's *ngIf sets to false  
                     Which means Called right before the component or directive will be destroyed itself in angular.
		     Correct place to Unsubscribe Observables and detach event handlers to avoid memory leaks.
*/