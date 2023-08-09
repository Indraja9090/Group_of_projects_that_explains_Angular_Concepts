import { Component } from '@angular/core';
import { InputService } from '../Services/input.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  inputText: string;

  constructor(private inputService: InputService){
    
  }

  onButtonClicked(){
    //console.log(this.inputText);
    this.inputService.raiseInputEmitterEvent(this.inputText);
  }

}
