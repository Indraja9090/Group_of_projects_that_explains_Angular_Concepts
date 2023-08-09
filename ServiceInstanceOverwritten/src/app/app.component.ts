import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, LoggerService] //With this an instance of `UserService` class will be available inside `constructor()` parameter `userService`
})
export class AppComponent implements OnInit {
  title = 'ServiceInstanceOverwritten';

  /*Created a property `users` to be assigned with the Array of objects initialized at `UserService` class*/
  users: {name: string, status: string}[] = [];
  /*From this we had tell Angular that we want an instance of UserService class,But
        we have not tell Angular how it can provide an instance of UserService class.
  Hence to tell Angular we need to specify `providers` property inside @Component metada*/
  constructor(private userService: UserService, private loggerService: LoggerService){

  }
  /*The ngOnInit() method is a lifecycle hook in Angular that is called after the component has been initialized 
                                                                    and its input properties have been set.
   It is commonly used to perform initialization tasks or fetch data from external sources.*/
  // Additional initialization or data-fetching logic can be placed here        
  ngOnInit(){
    /*NOTE THAT : This `userService` instance is created for AppComponent and however it can be used to its ChildComponents as well i.e., AdduserComponent
                  Hence here we used `userSerice` instance to access `users` property of `UserSErvice` class and,
                      assign its value to `users` property of `AppComponent`.*/
    this.users = this.userService.users; //This initialization logic will be executed when the component is initialized.
  }
}
/*The ngOnInit() method is often used to fetch data from an API, subscribe to observables, or perform any other necessary setup tasks for the component.
  It is a good place to initialize component properties, call services, or perform any other one-time setup operations.*/