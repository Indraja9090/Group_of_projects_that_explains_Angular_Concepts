import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
    /*When ever new user created in UI those input event data will be added to `users` property of `UserService` class
                    then that data will be rendered in UI view template of AppComponent,
      Hence when input event data will be added to `users` property of `UserService` class below log statement will be exectued in console DOM
      
      Hence we gonna inject `LoggerService` instance into `UserService` class and `Component` class 
                        which uses `UserService` as well as `LoggerService` properties  i.e., AppComponent

      We can also specify `LoggerService` to @NgModule property `providers` in `AppModule` class,
            which creates and inject to all components and services classes which require services of `LoggerService` as their dependencies
      */
    logMessage(name :string, status: string){
        console.log('A new user with username "'+name+'" with status "'+status+'" has been added.');
    }
}