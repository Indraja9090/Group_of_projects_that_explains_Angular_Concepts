import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class InputService {
    /*Created a custom event to emit data of comp1 to comp2 who doesnt have parent-child relationship*/
    //inputEmitter = new EventEmitter<string>();

    /*Instead using custom event we can also use `Subject` from rxjs library to pass data from comp1 to comp2,
          Hence we create a new subject by using `new` keyword followed by `Subject class constructor()` and
                as this `Subject()` is gonna return an Observable we assign it to `InputService` class property
        Also needed to specify the type of data which the Observable(i.e., returned by `inputEmitter` Subject)  will emit*/
    inputEmitter = new Subject<string>();

    /*Created a method which will raise this event `inputEmitter`
      The argument `data` gonna receive string value entered by client in <inpt> of comp1 view template  */
    raiseInputEmitterEvent(data: string){
        //this.inputEmitter.emit(data);

        /*As of now `inputEmitter` is a `Subject` not a `EventEmitter`
            hence we need to call `next` method on `inputEmitter`
          Also needed to specify the type of data which the Observable(i.e., returned by `inputEmitter` Subject)  will emit*/ 
            this.inputEmitter.next(data);
    }
}
/* NOTE : 
   A Subject is a type of Observable that allows you to emit values to multiple subscribers. */