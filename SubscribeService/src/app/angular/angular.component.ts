import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  //We can specify in an array of all the types which we want should be provided to this Component
  providers: [EnrollService] /* This will again creates an instance of EnrollService and will Overwrite the instance of EnrollService created by `AppModule` & `AppComponent`
                                        Hence this instance will be propogate throughtout the ChildComponents of this `AngularComponent`.*/
})
export class AngularComponent {
  title = "Angular";
  /*From this Angular only know what depencency we want BUT it doesnt know from where it can to give us such instance,
  Hence to tell Angular we need to specify at `providers` to `@Component`*/ 
  constructor(private enrollService: EnrollService){ 
  }
  onEnroll() {
    /*Commented To use `Service` in Angular inorder to avoid REPEATED CODE ,
     BCOZ other Components in this APP has same <button> `click` event binded with same method() logic-->
     
    // alert('Thank you for Enrolling to' + this.title + 'course.');
   
    /*Here we are going to call the `OnEnrollClicked()` method defined in `EnrollService` class, via
      - importing `EnrollService` class from `"../services/emroll.services"`;
      - creating an instance to that `EnrollService` class. */
     /* 1.Here we are Instantiating an object of the `EnrollService` class by our own.*/
   
     //const enrollService = new EnrollService(); 
   
    /*BUT,Good practice is to ASK Angular to provide instance of `EnrollService` class,
      BECAUSE Here we are making `JavascriptComponent & AngularComponent` classes TIGHTLY COUPLED with `EnrollService` class 
        Hence Angular offers a great a tool i.e., `Angular's Dependency Injector`,
            which will give us access to our services in `EnrollService` class*/
    
     this.enrollService.onEnrollClicked(this.title);
     
    }
   /*NOTE : 
        The new keyword is used to invoke the constructor function of a class, 
             which is a special method that is automatically called when a new object is created. 
        The constructor function typically initializes the object's properties or performs any necessary setup.*/
}
