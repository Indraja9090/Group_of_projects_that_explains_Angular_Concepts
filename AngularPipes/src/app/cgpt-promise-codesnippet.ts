/* Example scenario : 
        where a service class creates a Promise that resolves an array of objects,
                         and ComponentA subscribes to it, performs some logic, and 
                                        emits the result to ComponentB,*/
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    // returns a Promise of an array of objects.
    getData(): Promise<any[]> {
    return new Promise((resolve, reject) => {
        // `getData()` Simulating an asynchronous operation  using setTimeout()
        setTimeout(() => {
        const data = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' },
            { id: 3, name: 'Alice' },
        ];
        //after a delay of 2000 milliseconds, it resolves the Promise with an array of objects.
        resolve(data);
        }, 2000);
    });
    }
}
/*----------ComponentA----------------*/
/*We emit the modified resolved promise data from ComponentA to ComponentB 
        using an appropriate mechanism such as an `EventEmitter` or a `Subject`. */                                    
import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { DataService } from './data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-component-a',
  template: `
    <!-- Displaying data received from the service -->
    <h1>Data: {{ data }}</h1>
  `,
})
export class ComponentA implements OnInit {
  @Output() dataEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();
  //Using Subject
  dataSubject: Subject<any[]> = new Subject<any[]>();
  data: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().then((result) => {
      // Perform logic on the resolved data
      // For example, filtering or mapping
      this.data = result.filter((item) => item.id > 1);

      this.dataEmitter.emit(this.data);
      
      //this.dataSubject.next(this.data);
    });
  }
}
/*----------ComponentB----------------*/
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-component-b',
  template: `
    <!-- Displaying data received from ComponentA -->
    <h1>Data from ComponentA: {{ receivedData }}</h1>
  `,
})
export class ComponentB implements OnInit {
  receivedData: any[];

  constructor() {}

  ngOnInit() {
    // Subscribe to the EventEmitter or Subject emitted by ComponentA
    //Example-1: an EventEmitter called 'dataEmitter'
    dataEmitter.subscribe((data) => {
      // Receive the emitted data and assign it to the 'receivedData' property
      this.receivedData = data;
    });
    //Example-2: an Subject called 'dataSubject'
    const dataSubscription = dataSubject.subscribe((data: any[]) => {
        this.receivedData = data;
    });
  }
}
