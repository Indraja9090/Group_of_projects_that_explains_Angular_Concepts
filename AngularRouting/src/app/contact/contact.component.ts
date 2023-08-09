import { Component } from '@angular/core';
import { IDeactiavteComponent } from '../app-CanDeactivate.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactiavteComponent{
  firstName;
  lastName;
  country;
  subject;
  /*Since we are implementing interafce `IDeactiavteComponent` we also need to
      implement the method `canExit` defined in `IDeactiavteComponent` interface*/
  canExit(){
    /* if this `firstNmae` has UI input string value then return value will be true,
                            has empty string then return value will be true
      bcoz `if` statement will typecast the string value to its boolean type`*/ 
    /* if any one of these properties has a value condition returns true*/
    if(this.firstName || this.lastName || this.country || this.subject){
      /*If user click `ok` button this `confirm()` method return true,
      If user click `cancle` button this `confirm()` method return false*/
      return confirm('You have unsaved chnages. Do you really want to discard these changes?');
    }else{
      return true; //letting user to navigate away if he doesnt try to fill <form> 
    }
  }
}
