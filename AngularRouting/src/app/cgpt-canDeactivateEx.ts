/*To make the canDeactivate route guard applicable on multiple component routes,*/
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
/*-----------AppRoutingModule---------*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuardService } from './can-deactivate.guard';
import { Component1Component } from './component1.component';
import { Component2Component } from './component2.component';

const routes: Routes = [
  {
    path: 'component1',
    component: Component1Component,
    canDeactivate: [CanDeactivateGuardService] // Apply the guard to Component1Component
  },
  {
    path: 'component2',
    component: Component2Component,
    canDeactivate: [CanDeactivateGuardService] // Apply the guard to Component2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuardService] // Provide the guard at the module level
})
export class AppRoutingModule { }

/*------------Component1Component-----------*/
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate.guard';

@Component({
  selector: 'app-component1',
  template: `
    <h1>Component 1</h1>
    <!-- Your component's content goes here -->
  `
})
export class Component1Component implements CanComponentDeactivate {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    // Add your custom logic to determine if the component can be deactivated
    // For example, you can prompt the user for confirmation before leaving the page
    const confirmLeave = confirm('Are you sure you want to leave this page?');
    return confirmLeave;
  }
}
/*Ensure that the components (Component1Component and Component2Component) implement the `CanComponentDeactivate` interface,
         which includes the `canDeactivate` method. This method is responsible for checking whether the component can be deactivated.

By following this approach, the `canDeactivate` route guard will be applicable to multiple component routes,
     allowing you to control the navigation behavior based on the implementation of the `canDeactivate` method in each component.*/