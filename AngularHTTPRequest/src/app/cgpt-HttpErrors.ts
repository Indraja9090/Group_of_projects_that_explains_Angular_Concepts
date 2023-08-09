/*an example of how to handle HTTP errors while fetching data from a Firebase URL when the read permission is set to false:*/

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// ...

fetchProduct() {
  return this.http.get<{ [key: string]: Product }>('https://angularbyprocademy-ba4dd-default-rtdb.firebaseio.com/Products.json').pipe(
    map((response) => {
      const products = [];
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          products.push({ ...response[key], id: key });
        }
      }
      return products;
    }),
    catchError((error: HttpErrorResponse) => {
      console.log('An error occurred:', error);
      // Handle the error here, such as displaying an error message to the user
      return throwError('Something went wrong. Please try again later.');
    })
  );
}
