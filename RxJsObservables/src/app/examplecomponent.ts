import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './Serviceexample';

@Component({
  selector: 'app-observable-examplecomponent',
  templateUrl: `
    <!--we use the 'async' pipe to subscribe to 'data$' and display the data when it becomes available.
        The 'async' pipe handles the subscription and automatically unsubscribes 
                                            when the component is destroyed, preventing memory leaks.-->
    <div *ngIf="data$ | async as data">
      <h1>{{ data.title }}</h1>
      <p>{{ data.description }}</p>
    </div>
  `,
  providers: [DataService]
})
export class ExampleComponent implements OnInit {
  data$: Observable<any>;
  // inject the `DataService` and use the `getData` method to fetch the data from the API
  constructor(private dataService: DataService) { }
  //when the component initializes (ngOnInit), we call the getData method from the DataService and,
                                                   //  assign the returned Observable to the data$ property. 
  ngOnInit() {
    this.data$ = this.dataService.getData();
  }
}
/*In the component's template, use the async pipe to subscribe to the Observable and display the data. 
  This allows Angular to handle the subscription and automatically unsubscribe when the component is destroyed.*/
  /*ABOVE TEMPLATE EXPLANATION : 
        `data$`: 1.This refers to the Observable data$ that is being subscribed to.
                 2.The `data$` Observable is passed to the `async` pipe.
        `async`: 1.The async pipe is used to subscribe to the data$ Observable and 
                        automatically handle the subscription and unsubscription.
                 2.It simplifies the process of subscribing to Observables in Angular templates.
                 3.The `async` pipe subscribes to the `data$` Observable and waits for the emitted value.
                 4.When the emitted value is received, the async pipe assigns it to the local template variable data.
      `as data`: 1.This assigns the emitted value from the Observable to a local template variable called data.
                 2.This variable can then be used within the template to access the emitted value.
       `ngIf` directive checks if data has a truthy value (i.e., it is not null, undefined, or false).
                            If data has a truthy value, the content inside the <div> element is rendered.
        Within the <div>, you can access the properties of data using the dot notation, such as 
                                    data.title and data.description, to display the data in the template.*/