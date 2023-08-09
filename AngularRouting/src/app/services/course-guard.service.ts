
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AppAuthService } from "../app-auth.service";

/*To use canactiave route guard we need to implement `CanActivate` interface
Since we have implemented `CanActivate` interface it will force us to 
                    implement `canActivated()` method 
Since we are implementing CanActivateChild interface it will force us to
                    implement `canActivateChild() method*/
@Injectable()
export class CourseGuardService implements CanActivate, CanActivateChild {

    constructor(private authService: AppAuthService, private router: Router){
       
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): boolean {
                        //return true; //Navigation process Continues
                        //return false; //Navigation process stop and user stays put
        /* if `isAuthenticated()` return true  that mean user has loggedin and 
                                 is authenticated to navigate*/ 
        /*if `isAuthenticated()` return false  that mean user hasnot loggedin and 
                is not authenticated to navigate, hence we make user to navigate Home page*/
        if(this.authService.isAuthenticated()){
            return true;
        }else{
            this.router.navigate(['']) //navigates to Root URL i.e., HomeComponent
            return false;
        }   
    }
    canActivateChild(
        childroute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): boolean {
        /*calling the `canActivate()` by passing `canActivateChild()` method values 
                    `childroute` & `state`
        And returning `canActivate()` return value to defined route 
                                                    which uses `canActivateChild` guard*/
        return this.canActivate(childroute, state);
    }
}