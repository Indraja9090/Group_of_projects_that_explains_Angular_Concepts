import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
//import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
   /*If we explicitly specified `providers` to `AdduserComponent` 
    Hence Angular creates and inject a new separate instance for `AdduserComponent` and its ChildComponents
                Doestnt use instance created for its parent component `AppComponent` */
  //providers: [UserService, LoggerService]
})
export class AdduserComponent {

  newUserName: string = ' ';
  newUserStatus: string = ' ';

  //constructor(private userService: UserService, private loggerService: LoggerService){}
  constructor(private userService: UserService){
    console.log(this.userService.users); //logs existing array of `users` property of `UserService` class
  }

  addUser() {
    this.userService.addNewUser(this.newUserName, this.newUserStatus);  
    
  /*logs new array of `users` property of `UserService` class with given <input> values at DOM after clicking on `Create User` button*/
    console.log(this.userService.users); 
  }

}
/*NOTE THAT : If we explicitly specify `providers` then AdduserComponnet has its own separate instance `userService` to `UserService` class
    Hence the `AppuserComponent` view template input event data will be available to its own instance `userService`
            but not to the instance `userService` created for AppComponent as it got overrided by `AppuserComponent` instance `userService`*/
    /*So, the client input event data of `AdduserComponent` 
              which is added to `users` property of `UserService` class by creating its own instance `userService` to `UserService` class
     WILL NOT BE RENDERED TO VIEW TEMPLATE of `AppComponent` even we loop over `users` property of `AppComponent`
              whose values are assigned with `users` property of `UserService` class by creating its own instance `userService`*/