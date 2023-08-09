import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { DataService } from './Serviceexample';

@Component({
  selector: 'app-search',
  template:  `
  <!--how you can use Observables in Angular to implement a search feature with live suggestions:-->
      <input type="text" [formControl]="searchControl" placeholder="Search" />

      <ul>
        <li *ngFor="let suggestion of suggestions$ | async">{{ suggestion }}</li>
      </ul>
    `,
  styleUrls: ['./search.component.css'],
  providers: [DataService]
})
export class SearchComponent {
  searchControl = new FormControl();
  suggestions$;

  constructor(private dataService: DataService) {
    this.suggestions$ = this.searchControl.valueChanges.pipe(
      debounceTime(300), // Delay 300ms between keystrokes
      distinctUntilChanged(), // Only emit when the search query changes
      switchMap(query => this.dataService.getSuggestions(query))
    );
  }
}

/*In the component's template, use the `searchControl` FormControl to bind to the search input.
  The suggestions are displayed in real-time using the suggestions$ Observable with the async pipe.

In this example, as the user types in the search input, 
              the `valueChanges` property of the `searchControl` FormControl emits the search query value. 
The pipe operators `debounceTime(300)` and `distinctUntilChanged()` ensure that only when there's a pause in typing or
                         when the search query changes, the request is made to the API.
The `switchMap` operator performs the actual API request using the getSuggestions method from the DataService,
                                          passing the search query as a parameter.
The resulting Observable of suggestions is then assigned to suggestions$, 
                          which is used in the template with the async pipe to display the suggestions in real-time.*/