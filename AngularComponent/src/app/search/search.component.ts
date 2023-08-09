import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchValue: string = "search here"; /* TWO-WAY Data Binding */

  /* ONE- WAY Binding using Event Property */
  clearSearchValue(){
    this.searchValue = " "; 
  }

  /*At DOM's developer console, On expansion of event-type `InputEvent` which has been raised on DOM user actions,
    we see  `target` property - stores <input> element at code, on which we are handling `(input)` event.
    Form this we came to know the datatype of event-data which is emitted by event `(input)` is `Event`
    And this event-data has a property `target` - which store <input> element.
    Hence type of `target` will be `HTMLInputElement`.
    `target` property has a `value` property which has the value entered in UI <input> textbox. */
  changeSearchValue(eventData: Event){    

    console.log(eventData);
    console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value /* ONE- WAY Binding using Event Property */
  }


   
}
