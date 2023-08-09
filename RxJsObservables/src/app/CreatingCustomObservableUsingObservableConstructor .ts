import { Observable } from 'rxjs';
/*an observer is an object with three optional methods that can be defined to handle different types of events:
              next(value): This method is called when an Observable emits a value. 
                           It receives the emitted value as an argument and is responsible for handling that value
              error(error): This method is called when an Observable encounters an error. 
                            It receives the error object as an argument and is responsible for handling or reporting the error.
              complete(): This method is called when an Observable completes, indicating that it has finished emitting values.
                          It does not receive any arguments and is typically used for clean-up or finalization logic.  */
                                      
const customObservable = new Observable(observer => {
  // Emit values asynchronously
  setTimeout(() => {
    observer.next('Hello');
  }, 1000);

  setTimeout(() => {
    observer.next('World');
  }, 2000);

  setTimeout(() => {
    observer.complete();
  }, 3000);

  // Clean up logic (optional)
  return () => {
    console.log('Observable unsubscribed');
  };
});

// Subscribe to the custom Observable
/*Observers can be provided to an Observable's subscribe method to start receiving emitted values.
 The subscribe method takes the observer as an argument and establishes a subscription between the observer and the Observable.
 The observer's methods are then invoked as appropriate based on the Observable's behavior 
                                        (e.g., emitting values, encountering an error, completing).*/
const subscription = customObservable.subscribe(
  value => {
    console.log(`Received value: ${value}`);
  },
  error => {
    console.error(`An error occurred: ${error}`);
  },
  () => {
    console.log('Observable completed');
  }
);

// Unsubscribe from the Observable after 4 seconds
setTimeout(() => {
  subscription.unsubscribe();
}, 4000);

/*In this example, we create a `customObservable` using the `Observable` constructor. 
  The constructor takes a function (often referred to as the "subscriber function") that defines the logic for emitting values to the observer.

Inside the subscriber function, we use `setTimeout` to emit values asynchronously. 
   After 1 second, we emit the value 'Hello', followed by 'World' after 2 seconds.
   Finally, after 3 seconds, we call `observer.complete()` to indicate that the Observable has completed emitting values.

The subscriber function can also include clean-up logic, which is executed when the observer unsubscribes from the Observable. 
In this example, we return a function that logs a message when the Observable is unsubscribed.

We then subscribe to the custom Observable using the subscribe method, 
which takes three arguments: a function to handle emitted values, a function to handle errors, and a function to handle completion.

Finally, we unsubscribe from the Observable after 4 seconds using the unsubscribe method on the subscription object.
*/