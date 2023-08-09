import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, catchError, map, throwError } from "rxjs";
import { Product } from "../model/products.model";

@Injectable({
    /*Similar to providing service at AppModule*/ 
    providedIn: 'root'
})
export class ProductService{
    /*Creating an instance to subject which going to emit
            an observable error object's property `message` which is `string` type*/
    error = new Subject<string>();
    constructor(private http: HttpClient){
        
    }
    /*NOTE: We are subscribing to the observable in service class itslef
        hence we need to handle obervable errors in class where they do not subcribe to observable in its class
                    by using `Subject` which can be helpful to use error at multiple places of our angular app*/
    //creating product in DB
    createProduct(valueFormControl: {prodname: string, descrip: string, price: String}){
        console.log(valueFormControl);// logs {prodname: 'iphone', descrip: 'iphone pro 14', price: '1299'}
        /*Takes many parameter but our required parameters are 
                        BD url(i.e., which we created with `Firebase`
                        body we want to send with post request and
                        header - is an optional parameter which we can use to set custom headers*/
        /*Creating an instance to `HttpHeaders` class by passing an object to its `constructor()`
                in that object we specify our custom headers as `key-value` pairs*/
        const headers = new HttpHeaders({
            'myHeader': 'procademy'
        });
        /*This will add body of object `valueFormControl` 
            i.e., value of all form controls as key-value pairs to `Products` folder  with UNIQUE INDETIFIER
            Example: Products -> NZKy.. ->  descrip: "iphone pro 14"
                                            price: "1299"
                                            prodname: "iphone"                     */
        this.http.post<{name: string}>('https://angularbyprocademy-ba4dd-default-rtdb.firebaseio.com/Products.json', 
                        valueFormControl,
                        {headers: headers}).subscribe((response) => {
                            console.log(response);
                        },
                        //2nd parameter to `subscribe()` 
                        //returns an error when user tries to `Add Product` as the write mode to `FireBase` BD is set to false
                        (obsError) => {
                            console.log(obsError); //logs `HttpErrorResponse {headers: HttpHeaders,..} --> `message: string`
                            //calling `next()` method on subject `error
                            this.error.next(obsError.message);
                        }
                        );
    }                    
    /*NOTE: Here we are returnig th observable and subcribing to it in AppComponent class
            hence it is easy to handle observable errors in class where they subscribe to observable in its calss*/
    //responsible for making an HTTP GET request to retrieve product data from a Firebase Realtime Database.
    fetchProduct(){
        //sending some `headers data` with the `get()` request to serve
        /*calling a `set()` method on `Httpheaders` inside which we can specify header we want to send as key-value pair
                    where 1st string will be `keyname` 2nd string will be `keyvalue`*/
    //Finally this header will tell the server that we are sending some data in JSON formate
    //we can also chain headers on existing header
    //This header will allow cross origin resource sharing to all
    //REMEMGER : The header will ALWAYS PASS as the last argument to the http request method
        const header = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*')
        /*CONCEPT : Passing query parameter as argument to http request method*/
        const params = new HttpParams().set('print', 'pretty').set('pageNum', '1');
         /*`get()` also returns an observable which needed to be subscribe to receive the emitted data*/
        /*The `pipe()` method used to chain operators(in this case, `map()`) onto the Observable returned by http.get().*/
        /* Here `response` stores ------> {NZky..: {..}, NZL0..: {..}}
                for each iteration on `response` 
                    `key` stores -------> NZKy*/
        //when the `fetchProduct()` method is called, it will return an Observable that emits the transformed product data.

        /*CONCEPT : Passing query parameter attached with request URL*/
                                                    //specifying `query parameter` i.e., `print=pretty` to URL
                            //The `query` string `print` will tell server that we want response in a formated way

        //return this.http.get<{[key: string]: Product}>('https://angularbyprocademy-ba4dd-default-rtdb.firebaseio.com/Products.json?print=pretty',

        return this.http.get<{[key: string]: Product}>('https://angularbyprocademy-ba4dd-default-rtdb.firebaseio.com/Products.json',
        //since we wanna send headers we gonna pass an anonymous object inside which we specify `headers` string assigned with `header` instance 
        {'headers' : header, params : params}).pipe(map((response) => {
            const products = [];
            for(const key in response){
                /*It checks if each property is directly owned by the object using the `hasOwnProperty()` method.*/
                /*In JavaScript, objects can have a prototype, which is essentially a reference to another object.
                JavaScript first checks if the property exists on the object.
                        If it doesn't, it looks for the property on the object's prototype. 
                        If the property is found on the prototype, it is used.*/
                if (response.hasOwnProperty(key)) {
                //using spread operator on `response` indexing [key] and
                // adding new key-value pair inoder to delete data using the `id` i.e., `NZKy`
                products.push({...response[key], id: key})
                }
            }
            return products; //has [{descrip: string, prodname: string, price: string,id: NZKy..}, {..}, {..}]
            }),
            //2nd operator that chained to `map()`
            // `catchError` operator is used to handle any HTTP errors that occur during the request.
            //`catchError` operator takes a callback function as an argument, which is executed when an error occurs.
            catchError((obsError) => {
                //write logic for hadling the error message by logging it in BD or a file 
                /*Must return that error message to the subcriber of this observable i.e., AppComponent class 
                    in this way the subscriber aware about the error and hence call its 2nd callback function which handles the error*/
                /*The `throwError` function is used to create an observable that emits an error. 
                    It is returned from the `catchError` callback function, 
                            which ensures that the observable returned by `fetchProduct()` emits the error.*/
                return throwError(obsError)    
            }) 
            )
    }

    //deleting product from DB
    deletingProduct(id: string){
        let header = new HttpHeaders();
        header = header.append('MyHeader1', 'value1');
        header = header.append('MyHeader1', 'value2');
    /*The only required argument to `delete()` is the `URL`*/
    /*we need to follow the URL pattern of `unique identifier` path in `Products` folder in `FireBase` BD */
    /*REMEMBER always to specify `.json` end of URL*/
    /*`delete()` return an observable*/
    this.http.delete('https://angularbyprocademy-ba4dd-default-rtdb.firebaseio.com/Products/'+id+'.json',
    {'headers': header}).subscribe();
    }

    //deleting all products from DB
    deletingAllProducts(){
    /*The only required argument to `delete()` is the `URL`*/
    /*we need to follow the URL pattern of `unique identifier` path in `Products` folder in `FireBase` BD */
    /*REMEMBER always to specify `.json` end of URL*/
    /*`delete()` return an observable*/
    this.http.delete('https://angularbyprocademy-ba4dd-default-rtdb.firebaseio.com/Products.json').subscribe();
    }
    //`put()` has 2 required arguments i.e., URL & 
    updateProduct(id: string, updateValues: Product){
        this.http.put('https://angularbyprocademy-ba4dd-default-rtdb.firebaseio.com/Products/'+id+'.json', updateValues).subscribe(); 
    }
    
}
/*EXPLANATION: `HttpHeaders()` are immmutable
        At `createProduct()` - When we created an instance to `HttpHeaders()` 
                                    we simply passed an object to `HttpHeaders()` constructor 
    But At `fetchProduct()` - When we are creating an instance to `HttpHeaders()`
            on this instance of `HttpHeaders()` we are calling the chain of `set()` methods specifying headers to `get()` request
        NOTE that 1st `set()` will return a new instance of http REQUEST headers(where defined headers will be set) 
                                without changing the existing instance */

/*We have `append()` method jsut like we have `set()` method

        The chain of `set()` methods returns the new instance after mofiying the given header
            That is,  If a header with the specified name already exists, the existing value is replaced with the new value. 
                                                                                        If the header does not exist, it is added. 
        The `set()` method returns a new `HttpHeaders` object with the updated headers.
            Syntax:    set(name: string, value: string | string[]): HttpHeaders: 
    EXAMPLE: 
        const headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application1/json');
        headers = headers.set('Content-Type', 'application2/json');


The `append()` method is used to add a new header value for a given header name, without replacing any existing values.
     If a header with the specified name already exists, the new value is appended to the existing values. 
     The append() method returns a new HttpHeaders object with the updated headers.
Example: 
    const headers = new HttpHeaders();
    headers = headers.append('Accept', 'application1/json');
    headers = headers.append('Accept', 'application2/json');

The `Accept` header is appended with the value `application/json`. If the `Accept` header already existed with other values, 
                                the new value is added to the existing values.
*/
                

/*The `map()` operator is applied to the response data. 
    It transforms the response data into the desired format before emitting it as the output of the Observable. 
    The map() operator takes a callback function as an argument, which is executed for each emitted value. 
    The callback function in this code is an arrow function `(response) => { ... }` .*/

/*using the spread operator `{...response[key]}` spreads the values of response[key] (the product properties) into a new object . 
The `id property is added to the new object with the value `key`. 
This creates a new object that includes all the original product properties along with an additional id property.*/

/*The `for...in` loop in JavaScript is used to iterate over the properties of an object. 
    It allows you to loop through all the enumerable properties of an object, 
            including its own properties and properties inherited from its prototype chain.

IMPORTANT NOTE : The `for...in` loop iterates over enumerable properties, including properties inherited from prototypes. 
    To iterate only over an object's own properties (excluding inherited ones), we can use the `hasOwnProperty()` method 
                                                                            to check if a property belongs directly to the object.
The syntax of the for...in loop:
            for (key in object) {
                if (object.hasOwnProperty(key)) {
                    // code to be executed
                }
            }
The `key` is a placeholder for each property name that is being iterated over. 
                    It represents the current property name in each iteration of the loop.

The `object` is the object whose properties you want to iterate over.

Inside the loop, you can access the value of each property using the `object[key]` syntax.*/