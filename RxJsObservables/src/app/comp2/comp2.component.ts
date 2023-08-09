import { Component, OnInit } from '@angular/core';
import { InputService } from '../Services/input.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit{
  enteredText: string;

  constructor(private inputService: InputService){
    
  }

  ngOnInit(): void {
    /*subscribing to the custom event `inputEmitter` defined in `InputService` class which emits 
                  the <input> value received from comp1 view template 
      And this `subcribe` method takes a `next callback function` as argument and this `next callback function` 
                receives the value which the observable emits i.e., `inputEmitter` */
    this.inputService.inputEmitter.subscribe((value) => {
      this.enteredText = value;
    })
  }

}
