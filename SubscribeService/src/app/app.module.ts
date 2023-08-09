import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { EnrollService } from './services/enroll.service';

@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule
  ],
  /*In Angular, the `providers` array in the `@NgModule` and `@Component` decorators is used
                                                   to configure dependency injection for a class or component. 
  It specifies which services or dependencies should be available for injection into the class.*/
  providers: [EnrollService], /*Specifies that the `EnrollService` should be available 
                                                      for dependency injection throughout the entire application.
                               This means that any component or service within the AppModule
                                            can inject and use the `EnrollService` by specifying it as a dependency.*/
  bootstrap: [AppComponent]
})
export class AppModule { }

/* The providers array allows you to define the scope of service availability for injection.
      By specifying a service in providers, you make it available for injection in the current component and its child components.
      By specifying it in AppModule, you make it available for injection throughout the entire application.*/
