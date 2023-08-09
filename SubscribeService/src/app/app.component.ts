import { Component } from '@angular/core';
import { EnrollService } from './services/enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*CONCEPT : Hierarchical Dependency Injection - Angular inject the Dependencies on a Hierarchical basis
    Apart from providing a Service on a Component we can also provide a Service on other places i.e., At AppModule ,
    Then the same instance of the service is available throughout the Application i.e., to all Components,Directives & Other Services*/
  providers: [EnrollService] /* This will again creates an instance of EnrollService and will Overwrite the instance of EnrollService created by `AppModule`
                                 Hence this instance will be propogate throughtout the ChildComponents of this AppComponent.
                            In this case The instance of EnrollService created by AppComponent will be injected in the javascriptComponent & AngularComponent 
                                                      but not the instance created by AppModule*/   
})
export class AppComponent {
  title = 'SubscribeService'; 

  constructor(private enrollService: EnrollService){ 
    
  }

}
/*NOTE :     
    In Angular, the providers array in the `@NgModule` and `@Component` decorators is used to configure dependency injection for a class or component.
    It specifies which services or dependencies should be available for injection into the class.*/
/* The providers array allows you to define the scope of service availability for injection.
      By specifying a service in providers, you make it available for injection in the current component and its child components.
      By specifying it in AppModule, you make it available for injection throughout the entire application.*/