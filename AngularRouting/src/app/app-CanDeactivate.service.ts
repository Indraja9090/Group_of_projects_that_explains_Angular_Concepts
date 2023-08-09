import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { Observable } from "rxjs";

/*If we wanna use `canDeactivate` route guard on other components as well,
       for this we gonna create GENERAL PURPOSE DEACTIVATE ROUTE GUARD. */
export interface IDeactiavteComponent{
    /*Declaring a method for this interface `canExit` which doesnt take any parameters*/
    /* It gonna return,
          either an `Obervable` emitting boolean value
          or `Promise` which will resolve to a boolean value
          or directly a `boolean` value*/
    canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}
/*Since we wanna use `canDeactivate` Route Guard we need to make 
    `CanDeactivateGuardService` to implement an interface `CanDeactiavte`
REMEMBER : `CanDeactivate` is of generic type,Hence need to specify its type*/
/*Hence Multiple Component route gonna use `canDeactivate` route guard then that  
    Component class should implement this `IDeactiavteComponent` interface */
export class CanDeactivateGuardService implements CanDeactivate<IDeactiavteComponent>{
    /*Takes 4 parameter,
        1st: Component on which we wanna use this route Guard
        2nd: ActiavtedRouteSnapshot
        3rd: RouterStateSnapshot
        4th-Optional parameter: RouterStateSnapshot*/
    /*POINT TO NOTE: 
    Now `canDeactiavte` route guard has become a `Generalpurpose route guard` which allow us to 
    use it on any route but its associated Component MUST IMPLEMENT `IDeactivateComponent` interface*/
    canDeactivate(component: IDeactiavteComponent, currentRoute: ActivatedRouteSnapshot, 
                  currentState: RouterStateSnapshot, nextState: RouterStateSnapshot){
        //Hardcoded return value Doesnt allow user to navigate away from the current route
        //return false; 

        return component.canExit();

    }

}
/*We only allowed to use `canDeactivate route guard` on `ContactComponent`,
        i.e.,BCOZ we explicitly specified interface <generictype> and 
                                            `canDeactivate()` method parameter as `ContactComponent`*/  
