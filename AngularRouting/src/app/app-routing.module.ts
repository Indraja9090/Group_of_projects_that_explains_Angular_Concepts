import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseGuardService } from "./services/course-guard.service";
import { CanDeactivateGuardService } from "./app-CanDeactivate.service";
import { PromiseResolveService } from "./app-promiseResolve.service";

/*REMEMBER we can also create `Routes` in separate TypeScript file or in AppModule 
   Routes is an Array of Route Objects,
      hence we specify the route objects in `appRoute*/
/* WE need to tell Angular where to diaplay the view when one of these paths typed in url 
                              as same as we does for `Components` by placing their `selector` values*/
const appRoutes: Routes = [
/*REMEMBER :  the empty route path: '' url matches any route url, so The element that navigates to this path 
                                will always be considered active due to `routerLinkActive` directive . 
                When a child route(home,about,contact,courses) is active then all the parent routes are also marked as active,
                and the routerLinkActive Directive will be applied to the parent routes also */
    {path: '', component: HomeComponent}, // http://localhost:4200 
    //{path: '', redirectTo: 'home', pathMatch: 'full'}, //   http://localhost:4200/Home
    {path: 'home', component: HomeComponent}, //when client navigate with `/home` then its associated `HomeComponent` view template will be rendered
    {path: 'about', component: AboutComponent}, // http://localhost:4200/About

    {path: 'contact', canDeactivate: [CanDeactivateGuardService], component: ContactComponent},

    /*Gaurding the route we wanted with `canActivate` route guard assigned an array sepcifying Service class that implements `CanActivate` interface*/  
    //{path: 'courses', component: CoursesComponent, canActivate: [CourseGuardService]},
    /*uses a `resolve` route guard to fetch data from a promise and pass it to a component.
            Hence On this route we specify the `resolve` property which can be assign with object which has
                                    {userdefine property: assigned with Service class that implements `Resolve` interface}
                To this `userdefine property` `resolve` method return data will be assigned*/ 
    {path: 'courses', resolve: {courses: PromiseResolveService}, component: CoursesComponent},

    /*we define a route path with `route parameter` using `: followed by parametername` i.e., `id` 
        hence `:id` should act as a placeholder whose value will be set Dynamically  with value typed in URL bar
        At URL if we type  http://localhost:4200/courses/course/109 then 
            it will get match with below path 'courses/course/:id' and value `109` will be stored in `:id` parameter*/
    //{path: 'courses/course/:id', component: CourseComponent}, 

    /*  http://localhost:4200/courses/course/102 for this `ErrorComponent` will be rendered
    {path: 'course', children: [   
    {path: 'course/:id', component: CourseComponent}
    ]},   
    */
    /* when we click on `Show Details` button in `/courses` page we navigate to its `routerLink="/courses/course/{{course.id}}" ` path
            Let say http://localhost:4200/courses/course/102 hence `ErrorComponent` will be rendered because `routerLink` path
        `/courses/course/{{course.id}}` doesnt match with any defined `route objects` in AppModule
        BUT if we set `Show Details` button `routerLink` attribute value with ` routerLink="/course/{{course.id}}" ` then
            associated CourseComponent will be rendered because for child route path `course/:id` 
                                        parent route is the empty route `path: ''` i.e., ROOT URL http://localhost:4200/ 
    {path: '', children: [          
        {path: 'course/:id', component: CourseComponent}
    ]},
    */
    /*InOrder to make this child route render its view properly we have to place <router-outlet> in its parent Component template*/
    /*Hence `canActivateChild` route guard will be applied to all child routes of parent route*/
    {path: 'courses',canActivateChild: [CourseGuardService], children: [          
        {path: 'course/:id', component: CourseComponent}
    ]},
    {path: '**', component: ErrorComponent} /* Wildcard routes, And Here `**` means it matches with every route every by client 
                                                            Hence IT SHOULD NOT BE PLACED AS first element in `Routes` array. 
                                                If client entered route doesnt match with any defined route path THEN ALSO it will match with this `**` route
                                                */
    ];
@NgModule({
    /*enable tracing for navigation events by configuring the `enableTracing` option in the RouterModule.
      To enable tracing, we need to set the `enableTracing` option to true 
                    when importing the `RouterModule` in our `AppRoutingModule` class where you define our routes. */
    /*By setting `enableTracing` to true, you will see detailed logs in the browser's console for each navigation event,
                     including navigation start, route activation, guards activation, and navigation end.*/
    imports: [RouterModule.forRoot(appRoutes,{ enableTracing: true })], //We must have to register `appRoutes` to make Our Angular Application know about it 
    exports: [
        RouterModule    /*We need to specify what we want to export from this AppRoutingModule 
                                                                 that can be used in other Modules file  
                        Hence to outsource defined routes we need to export `RouterModule`*/ 
    ]   
})
export class AppRoutingModule{

    
  
}
/*Route parameters are typically denoted by a colon followed by a parameter name in the route definition. 
  When a URL with a matching route pattern is accessed, 
      the value in that part of the URL is captured and made available to the application for further processing.
      */
/*REMEMBER we can also create `Routes` in separate TypeScript file or in AppModule 
                               Routes is an Array of Route Objects                  */
/* WE need to tell Angular where to diaplay the view when one of these paths typed in url 
                              as same as we does for `Components` by placing their `selector` values*/
/* Using `redirectTo` property we can specify the path
                                     to which we want to redirect the user after entering localhost:4200
                   `pathMatch` property simply twll Router how to match the Url, and when it set to `full`,
                                                                            meant path is matched to the entire Url */
/*The canDeactivate route guard in Angular is used to control whether a user can navigate away from a specific route.
 It is commonly used in scenarios where you want to prompt the user for confirmation 
                                    before leaving a page or prevent navigation if certain conditions are not met. 
    1.Form with unsaved changes
    2.Confirmation before navigation:
             if the user is in the middle of a critical task or if navigating away may result in data loss
    3.Authentication status: If we have routes that are only accessible to authenticated users,
    4.Restricting navigation based on business logic:
             if a user is in the middle of a multi-step process and 
                        certain conditions need to be met before progressing to the next step*/
/*Tracing allows you to see detailed logs in the browser's console whenever a navigation event occurs.
 It can be useful for debugging and understanding the sequence of events during navigation.*/