import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Product } from './model/products.model';
import { ProductService } from './service/products.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'AngularHTTPRequest';
  allProducts: Product[] = [];
  isFetching: boolean = false;
  @ViewChild('productsForm') form: NgForm;
  editMode: boolean = false;
  currentProductId: string;
  errorMessage: string = null;
  errorSub: Subscription;

  constructor(private productService: ProductService){
    
  }
  /*We are calling `fetchProduct()` inside ngONInit() bcoz 
              we want to load all the products we have when Component get intialized */
  ngOnInit(){
    this.fetchProduct();
    //stores the subscription return by the `subscribe()`
    this.errorSub = this.productService.error.subscribe((obsErrorMessage) => {
      this.errorMessage = obsErrorMessage;
    })
  }
  /*`NgForm` object's `value` property will be stored in `valueFormControl`*/
  onProductCreate(valueFormControl: {prodname: string, descrip: string, price: string}){
    if(this.editMode){
      this.productService.updateProduct(this.currentProductId, valueFormControl);
    }else{
      this.productService.createProduct(valueFormControl);
    }
    
  }

/*CONCEPT: HAndling Http Response Errors - 
          occurs When users are Unauthorized, server errors, network error, offline, page `read` option set to false...*/
  private fetchProduct(){
    this.isFetching = true;
    //`fetchProduct()` returns an Observable
    /*The 1st argument i.e., callback function to `subscribe()` gets executed 
                        whenever the observable to which we have subcribed emits the data
      However To handle obsevable errors we can pass callback function as 2nd argument */
    this.productService.fetchProduct().subscribe((response) => {
      /*We need to transform the data that is fetched from BD inorder to use display in our UI view
          We can write logic for data transformation in `subscribe()` method but,
                  good practice is to use `Observable operators` like `pipe()`, `map()`*/

      //console.log(response); /*logs an obj,in which we have 
                                  //unique identifiers (created in `Products` folder in `FirBase` BD) as properties 
                              //Eaxmple: {NZky..: {..}, NZL0..: {..}} */
      console.log(response);   //logs [{descrip: string, prodname: string, price: string,id: NZKy..}, {..}, {..}] 
      this.allProducts = response;
      console.log(this.allProducts);
      this.isFetching = false;                 
      },
      //This callback function argument receives an error object which has occured 
      (error) => {
        console.log(error); //logs `HttpErrorResponse{headers: HttpHeaders,...}` --> `message: string` 
        //this `error` object will have a `message` property 
          this.errorMessage = error.message
      });
  }

  onProductsFetch(){
    this.fetchProduct();
  }

  onDeleteProduct(id: string){
    this.productService.deletingProduct(id);
  }

  onDeleteAllProducts(){
    this.productService.deletingAllProducts();
  }

  onEditClicked(id: string){
    this.currentProductId = id;
    //getting product based on unique id from BD
    /*`find()` finds an elements in an array based on given condition and
       iterates over that array and it return first element which satisfies the condition */
    //`allProducts` --- has [{descrip: string, prodname: string, price: string,id: NZKy..}, {..}, {..}]
    let foundProduct = this.allProducts.find((prod) => {
      //comparision stmnt
      //The `find()` method uses the returned value to determine if the current element satisfies the condition.
      return prod.id === id
    });
    console.log(foundProduct); //logs {descrip: string, price: string, prodname: string, id: string}

    //Populate the <form> with product details of associated `Edit` button in UI
    console.log(this.form); //logs `NgForm{ }` ------  of <form> template
    this.form.setValue({
      prodname: foundProduct.prodname,
      descrip: foundProduct.descrip,
      price: foundProduct.price
    })

    //Change the `Add button` to `update product`
    this.editMode = true; //setting to true when UI `Edit` button clicked 
  }
  //good practice to unsubscribe the observable when component is destroyed
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }


}
/*In Angular, the `post()` method is typically used in combination with the `HttpClient` module to send HTTP requests. 
  The `post()` method is used to send a POST request to a specified URL and accepts the  parameters:
                          this.http.post(url, data, optionalParameters).subscribe(response => {
                            // Handle the response
                          });
  
/*We need to specify some value after BD Url
              hence in BD it creates a Folder named `Products` and data we wanna post will be stored in here*/
    /*NOTE THAT: `valueFormControl` JS object but http `post()` method converts `JS object` to `JSON object`
          BCOZ we can not send Js object in body*/ 
    /*Also Note,
        `post()` method returns an observable which emits the data ONLY WHEN THERE IS A SUBSCRIBER*/