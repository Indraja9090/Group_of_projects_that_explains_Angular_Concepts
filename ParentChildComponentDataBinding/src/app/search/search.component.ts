import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  /* This property contains the `value` of <input> textbox */
  enterSearchValue: string = ' ';

  /* Creating custom-event by instantiating `EventEmitter` class and @Output decorator*/
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  /* Creating a method to raise this custom-event `(searchTextChanged)` */
  onSearchTextChanged(){
    /* custom-event `(searchTextChanged)` emits 
                whatever the <input> textbox `value` that `enterSearchValue` property has */
    this.searchTextChanged.emit(this.enterSearchValue); 
  }
}
