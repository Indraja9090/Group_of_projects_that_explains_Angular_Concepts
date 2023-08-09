import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

/* IMPORTANT TO NOTE :
    As previous Angular Versions:
        We SHOULD NOT decorate a `Service` class with  `@Injectable()` which is gonna be injected
        We MUST decorate a `Service` class with  `@Injectable()` which expect dependencies that need to be injected into it.
    As Future Angular Versions:
        Angular Expecting Every `Service` class MUST BE decorated with `@Injectable()` */
@Injectable()
export class UserService{
 
    users = [
         {name: 'John', status: 'active'},
         {name: 'Mark', status: 'inactive'},
         {name: 'Steve', status: 'active'}
    ];
    //By this Angular inject an instance of `LoggerService` class to `UserService` class` 
    constructor(private loggerService: LoggerService){
    
    }

    /*Gonna receive a user-name from UI and stores in this parameter `name`
            receive a user-status from UI and stores in this parameter `status`*/
    addNewUser(newUserName: string, newUserStatus: string){
	/*push this object element to above `users` property Array*/
       this.users.push({name: newUserName, status: newUserStatus});
       this.loggerService.logMessage(newUserName, newUserStatus);
    }
}
/*The @Injectable() decorator:
In-general When we inject a service to something say `Component` class 
     the that something must have a metadata related to `Service` should be attached to it
  EXAMPLE: 
     @Component({
        selector: '',
        templateUrl: '',
        styleUrl: [''],
        providers: [Service instance type]
     })

   Similarly `Directive` class also has some metadata specified in `@Directive`

   Hence  Angular expect that we need to attach some metadata to `Service` class as well where we want to inject something to it,
        For this we have The @Injectable() decorator to indicate that a `Service` class can be injected with dependencies. 
        It is typically applied to a service class.

This @Injectable() decorator is required when a class has dependencies that need to be injected into it. 
By adding this @Injectable() decorator, Angular can analyze the class and its dependencies, and perform dependency injection when the class is requested.
*/       