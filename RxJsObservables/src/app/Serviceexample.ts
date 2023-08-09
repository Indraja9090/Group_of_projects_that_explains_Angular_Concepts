/*example of how you can use Observables in Angular to fetch data from an API using the HttpClient module:*/
/*First, make sure we have imported the HttpClient and HttpHeaders modules in our Angular component:*/


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//created a service `DataService` that handles the API requests.
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.example.com/data'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getSuggestions(query: string): Observable<string[]> {
    const url = `${this.apiUrl}?q=${query}`;
    return this.http.get<string[]>(url);
  }
}


/* `${this.apiUrl}` : This is a template literal that refers to the apiUrl property of the current object or class. 
                      It is assumed that apiUrl contains the base URL of the API endpoint.
    `?q=${query}`: This is a query parameter appended to the URL. 
                   The q parameter is used to send a query string to the API endpoint. 
                   The value of the `query `variable (presumably obtained from user input or some other source) is interpolated 
                                                                                        into the URL using template literal syntax.

For example, if this.apiUrl is 'https://api.example.com/search' and query is 'angular', 
                                        the resulting URL would be 'https://api.example.com/search?q=angular'.
             This URL is typically used to make a GET request to the API, passing the search query as a parameter.*/
