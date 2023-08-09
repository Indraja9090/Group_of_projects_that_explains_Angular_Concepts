import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  
  /*all: number = 10;
    free: number = 4;
    premium: number = 6;*/
  /* we can give alias name to @Input() property of custom component and that alias name must use for binding. */
  @Input('total') all: number = 0; 
  @Input() free: number = 0;
  @Input() premium: number = 0;

  /* This property keeps track of the `value` of <input> radio-button which user has selected in wedpage */
  selectedRadioButtonValue: string = 'All';

  /* To pass data(i.e.,<input> radio-button `value` from child-component to parent-component,
   We gonna create 'custom-event` in child-component by instantiating `EventEmitter` class by using `new` keyword.
   syntax:
   @Output()
   custom-event-propertyname: datatype-of-custom-event-propertyname<specify-datatype-it-is-emitting> = new EventEmitter<specify-datatype-it-is-emitting>()  */
  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  /*Creating a method which will raise custom-event `(filterRadioButtonSelectionChanged) ` */
  /* Whenever custom-event `(filterRadioButtonSelectionChanged)` raised at webpage,
    	`filterRadioButtonSelectionChanged` will emit the data of type string, 
	i.e., `value` of <input> radio-button that user has selected at webpage.
	And this `value` we gonna store in `selectedRadioButtonValue`  */
  onRadioButtonSelectionChanged(){
  /* custom-event `(filterRadioButtonSelectionChanged)` emits
  whatever the <input> radio-button `value` that `selectedRadioButtonValue` property has */
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }							  

}
