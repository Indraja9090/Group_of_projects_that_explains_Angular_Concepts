import { Component, OnInit } from '@angular/core';
import { Observable, from, interval, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { InputService } from './Services/input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InputService]
})
export class AppComponent implements OnInit {
  title = 'RxJsObservables';

  constructor(private inputService: InputService){

  }
  /*CONCEPT : Observable - Used to handle Asynchronous data
                         - Emitts some data, also emitts errors, also emitts signal which tell that 
                                                                observable has done the emitting all data */
  
                                /*create a new object based on the Observable class, and is then assigned to the myObservable variable
                                In order to make it emit values or events, We would typically need to define its behavior 
                                              by providing a callback function that describes how it should produce those values.
                                The argument `observer` will be injected by the rxjs library.
                                    This `observer` is nothing but a subscriber which is waiting for the data*/ 

 /*CONCEPT : Created an Observable `myObservable` using Observable constructor()
 /* myObservable = new Observable((observer) => {
                  console.log('Observable starts');
                                  //To emit the some data, we can call `next()` method on this `observer`
              /*  observer.next('1');
                  observer.next('2');
                  observer.next('3');
                  observer.next('4');
                  observer.next('5');   */
                                                  /*`setTimeout()` used to emit the data after certain time interval.
                                                    It takes a callback function and a time interval
                                                    We use next() method to emit values     */
  //             setTimeout(() =>{observer.next('1')}, 1000); //After 1sec this next() will be called
  //             setTimeout(() =>{observer.next('2')}, 2000);
  //             setTimeout(() =>{observer.next('3')}, 3000);
                                                //to emitt an error from Observable we can use `error()`method.
                                                /*  IMPORTANT TO REMEMBER: Whenever an Observable emits an error, After that if we have 
                                                        any values or complete signal to be emitted then those values or signal will not get emitted*/
                // setTimeout(() =>{observer.error(new Error('Please try again later'))}, 3000)
  //             setTimeout(() =>{observer.next('4')}, 4000);
  //             setTimeout(() =>{observer.next('5')}, 5000);
                                          //Once Observable has done emitting all the data,it can also emits a signal telling data emittion completed.
                                          //To emit a complete signal from an Observable we use `complete()` method which doesnt take any parameter.
                                          /*IMPORTANT TO REMEMBER : Once compelte signal emitted from Observable then 
                                                                                values after that will not be emitted */
                //setTimeout(() =>{observer.complete()}, 6000)
  //              setTimeout(() =>{observer.complete()}, 3000); //Values which are gonna emit after 3sec will not be emitted                                     
//            }); 
                              /*CONCEPT : Created an Observable using `create()` method,
                                  However behind the scenes `create()`uses the Observable constructor
                                Hence its almost similar to creating an Observable using its constructor*/

// myObservable = Observable.create((observer) => {
//        setTimeout(() =>{observer.next('A')}, 1000); 
//        setTimeout(() =>{observer.next('B')}, 2000);
//        setTimeout(() =>{observer.next('C')}, 3000);
//        setTimeout(() =>{observer.next('D')}, 4000);
        //setTimeout(() =>{observer.error(new Error('Please try again later'))}, 4000)
//        setTimeout(() =>{observer.next('E')}, 5000);
//        setTimeout(() =>{observer.complete()}, 7000);
//  });

                        /*NOTE : Using an `operator` we can transform the data returned by this Obvservable and 
                                        then we can return a new Observable with this transformed data
                          REMEMBER : `operator` are nothing but a function
                          IMPORTANT TO REMEMBER : When we create an Observable using `of` or `from` operator ,then
                                                    after emitting all the data that Observable will also emits a complete signal.
                                  Hence we dont have to explicitly emits complete signal as we does for Observables created using
                                                                                                      `constructor` & `create` methods */  
  array1 = [1, 2, 3, 4, 5];
  array2 = ['A', 'B', 'C', 'D', 'E'];

                      /*CONCEPT : Creating an Observable using built-in operator i.e.,`of` from rxjs library
                        we can pass ANY NO. OF ARGUMENTS which will be emitted as data from this Observable.*/

  //  myObservable = of(this.array1, this.array2, 20, 79, 'Hello');  // At console array elements will be emitted all at once

                      /*CONCEPT : Creating an Observable using `from` operator
                        We can pass ONE ARGUMENT that must be any iterable(i.e., an array, string, or any other iterable) to `from` operator 
                        We can also pass a `promise` to convert that promise into an Observable */

//myObservable = from(this.array1); // At console array elements this Observable emit values one by one, due to `from` operator

                         /*This `map` operator is a function used to apply some logic to the data emitted by source Observable
                            It takes a callback function as its argument, and this callback function is goingto receive a value
                                                                                which the `source Observable` will emit i.e., `myObseravble`*/
//  transformedObs = this.myObservable.pipe(map((value) => {
//      return value * 5;               //Here we are transforming the data of this source Observable `myObseravble` and `map` operator going to 
//     }));                                                      //  return a new Observable which emits this transformed data 
  
                            /*`filter` operator conditionally filters out the transformed data from the source Observable i.e., transformedObs*/
//  filteredObs = this.transformedObs.pipe(filter((value) => {
//       return value >= 15 
//      }));
                                /*new observable called `transformedObs` is created by applying additional operators to the `myObservable` observable.
                                  The `pipe` method is used to chain the operators together, 
                                          allowing you to transform and filter the values emitted by the myObservable observable.*/
//  transformedObs = this.myObservable.pipe(
//     map((value) => {return value * 5}),         //`map` operator is applied first. It takes each value emitted by the `myObservable` observable 
                                                                                                                          // and multiplies it by 5
//     filter((value) => { return value >= 15})   //`filter` operator is then applied to the values emitted by the `map` operator. 
//   );                                                      //  It checks whether each value is >= 15 and only allows those values to pass through*/

                            /*Instead assigning to `transformedObs` we can directly apply `pipe` operator on `Observable` creation
//myObservable = from(this.array1).pipe(
//  map((value) => {return value * 5}),                    // Multiply each array1 element by 5
//  filter((value) => { return value >= 15})       // Filter out array1 elements that are after multiplied by 5 and which are >= 15                          
// );

                        /*CONCEPT : The Observable created by the `interval` function
                                                        will keepon emitting the data indefinitely unless we unsubcribe to that observable.
              The `interval` function is an operator in RxJS that CREATES AN OBSERVABLE that emits sequential numbers at a specified interval.                                                         
                                                          It is commonly used to create observables that emit values periodically.*/

conuterObs = interval(1000); 
obsFromSubscri;                           /*This Observable `myObservable` will only emit the data if there is a subcriber,
                                        if there is no subcriber then Observable `myObservable` will not emit the data */
  ngOnInit() {
    /*`subscribe()` takes 3 OPTIONAL parameters which are callback functions
                                    a function to handle emitted values,
                                    a function to handle errors, and 
                                    a function to handle the completion of the Observable.
                                  this.myObservable.subscriber(next, error, complete); */
                                              //First callback function which gets executed everytime when Observable returns a new value
                                              //Second callback function which gets executed everytime when Observable returns an error
                                              //Third callback function which gets executed once Observable has returns all value
                                  
                                  //This `value` parameter has the value which the Observable has emitted 
//    this.myObservable.subscribe((value) => {
    //this.transformedObs.subscribe((value) => {
    //this.filteredObs.subscribe((value) => {
                                              /* logs ---->   Observable starts
                                                              1
                                                              2
                                                              3
                                                              4
                                                              5
                                                Here the data has been streamed one by one but not emitted at once*/
//                            console.log(value);         
//                          },
                                  //`error` parameter assigned with the error which this Observable will return i.e., with above Error object                                           
//                        (error) => {
                                            //error object has a `message` property                                                
//                            alert(error.message);                                            
//                        },
//                        () =>{
//                          alert('Observable has completed emitting all values');
//                        });  

                      /*Subcribing to the Obervable `conuterObs` created by `interval()`,And passing `next() callback method` to the `subscribe` method.                              
                              And this `callback function` gonna receive the `value` emitted by Observable*/
                      /*To `unsubcribe` the Observable return by the `subcribe` method we assigned to property `obsFromSubscri`*/      
//    this.obsFromSubscri = this.conuterObs.subscribe((value) => {
//      console.log(value);
//    });
                                                                                
  }

  subscribeObs(){
    this.obsFromSubscri = this.conuterObs.subscribe((value) => {
      console.log(value);

    });
  }

  unSubscribeObs(){
    /*unsubcribing the Observable returned by the `subcribe` method of `conuterObs`*/
    this.obsFromSubscri.unsubscribe();
  }

}

/*NOTE : To use Observables in Angular Application we must nee to import `rxjs` library,
                which is installed automatically while we creating Angular Project 
              Observable class is typically provided by a library or framework such as RxJS,
                                     and it represents a stream of values or events over time.
                                     
        Inside the subscription, we log the received values, handle any errors that occur, and log a message when the Observable completes.
        Wemay also unsubscribe from the Observable after period of time using the `unsubscribe` method on the subscription object.*/
/* The `new` keyword is used to create an instance of an object from a constructor function or a class*/
/*
In RxJS, the `pipe` operator is a function used to combine multiple operators together and create a pipeline for
                                                      transforming, filtering, or modifying data emitted by an Observable. 
It allows you to chain operators in a declarative and composable manner.
The `pipe` function takes one or more operators as arguments, separated by commas, and returns a new Observable with the applied operators.

IMPORTANT TO REMEMBER : In `pipe` operator function last operator argument function returns a new Observable based on
                                                                                 return value of its previous operator argument function
*/