import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';
/* `..`  -  Represents the parent directory of the current directory.
   `../`  -  Indicates going up one level in the directory hierarchy.
   `services/emroll.services` -  Represents the path within the `services` directory.*/
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
  //We can specify in a `providers` array to tell Angular what type of instance it need to provide to this Component
  /*Commented to Explain `Angular's Dependency Injector` is a `Hierarchical Injection` which means,
	If we provide service on ONE Component,Angular will create and inject an instance of that service for that component 
                                                                                        and all its child Components as well.
	HENCE If we place this `providers` at AppComponent class Angular will create an instance for `EnrollService` 
					and assign it to AppComponent `constructor()` parameter `enrollService` as well as 
					    assign the same instance to its ChildComponent's `constructor()` parameter.*/
    /*The instance created for this JavascriptComponent will
                          overwrite the instance created by AppComponent and also
			                    overwrite the instance created by AppModule*/

  // providers: [EnrollService] 
})
export class JavascriptComponent {

  title = "JavaScript";

  /*From this Angular only know what depencency we want BUT it doesnt know from where it can give us such instance,
    Hence to tell Angular we need to specify at `providers` to `@Component` */
  constructor(private enrollService: EnrollService){ 
  }
  onEnroll() {
   /*Commented To use `Service` in Angular inorder to avoid REPEATED CODE ,
     BCOZ other Components in this APP has same <button> `click` event binded with same method() logic-->

  //alert('Thank you for Enrolling to' + this.title + 'course.');
 
  /*Here we can call the `OnEnrollClicked()` method defined in `EnrollService` class, via
    - importing `EnrollService` class from `"../services/enroll.services"`;
    - creating an instance to that `EnrollService` class. */

  //const enrollService = new EnrollService();        //Here we are Instantiating an object of the `EnrollService` class by our own.
 
  /* BUT,Good practice is to ASK Angular to provide instance of `EnrollService` class,
     BECAUSE Here we are making `JavascriptComponent & AngularComponent` classes TIGHTLY COUPLED with `EnrollService` class 
      Hence Angular offers a great a tool i.e., `Angular's Dependency Injector`,
          which will give us access to our services in `EnrollService` class*/
 
   this.enrollService.onEnrollClicked(this.title);
   
  }
 
}
/* IMPORTANT TO NOTE : 
    1.When Angular encounters a component requesting a service dependency, 
            it looks for the nearest provider defined in the component's own @Component decorator,
            its parent component's @Component decorator, or any providers specified in the `AppModule` or any imported modules.
     It uses the first provider it finds.
    2.Since there is no providers array for EnrollService in the @Component decorator of JavascriptComponent,
      Angular will look for a provider in its parent component (if any) or in the AppModule providers array.
    3.since we have specified the `EnrollService` provider in the `@Component` decorator of the AppComponent, which is the parent component of JavascriptComponent,
                   then the `JavascriptComponent` and its child components will receive the `EnrollService` instance provided by the `AppComponent`.
    4.The `AppModule` provider for `EnrollService` will not be used in this scenario.*/
/* The providers array allows you to define the scope of service availability for injection.
      By specifying a service in providers, you make it available for injection in the current component and its child components.
      By specifying it in AppModule, you make it available for injection throughout the entire application.*/