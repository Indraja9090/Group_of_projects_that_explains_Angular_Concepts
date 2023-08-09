import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./services/courses.service";

@Injectable()  
export class PromiseResolveService implements Resolve<any>{
    
    constructor(private coursesService: CoursesService) {

    } 
    /*It is not going to return a boolean value instead it returns Data
                                    i.e., `courses` array*/                             
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        /*`getAllCourses` method return a promise,hence on that promise we use `then() 
                which will be called when this promise will resolve
        hence `then()` takes a callback function which receives the data emitted by promise*/
        return this.coursesService.getAllCourses().then((promiseData) => {
            return promiseData;
        })
    }

}
/*Inorder to use `resolve` route card we neeed to make Service class implement
    `Resolve` interface which is a generic type.
 If we have created a `Model class` which has a property that resolve a promise 
               Hence we can specify that class name as its generic type*/

/*Since we are implementing Interface `Resolve`, 
                it provides an method `resolve` which we should implement */
                  
/*`PromiseResolveService` MUST BE decorated with `@Injectable()` as this service needs
        a dependency injection of other service class i.e., `CoursesService`*/