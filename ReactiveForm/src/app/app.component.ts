import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ReactiveForm';
  formStatus;

  /*defining a property with type FormGroup*/
  reactiveForm: FormGroup;

  /*the ngOnInit() method initializes a reactive form 
    by creating a FormGroup instance called reactiveForm and
       defining multiple form controls within it./
  /*The ngOnInit() method is a lifecycle hook in Angular that is called
                                     when the component is being initialized.*/
  ngOnInit(){
    /*To create a reactive form first gonna instantiate `FormGroup` 
                and this `FormGroup` constructor takes a JS object as its argument.*/
    /*a new instance of FormGroup is created and 
                    assigned to the `reactiveForm` property of the component.*/
    //this.reactiveForm = new FormGroup({   
              /*To perform validations on form controls Angular provided `Validators` 
                    which has propertis and method to enforce specific validation rules on form controls
              They help ensure that the user input meets certain criteria and meets the expected format or values.*/  
      //firstname: new FormControl(null, Validators.required),
      //lastname: new FormControl(null, Validators.required),
      //email: new FormControl(null, [Validators.required, Validators.email]),
                /*Here `india`,`male` are the values of associated input field form control `value` property */
      //country: new FormControl('India'),
      //gender: new FormControl('male'),
      //hobbies: new FormControl(null)              
    //});

    /*Grouping `FormControl` objects */
    this.reactiveForm = new FormGroup({  

      personaldetails: new FormGroup({
        firstname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        lastname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        /*We need to use array when we need to specify more than one validators*/
        //REMEMBER: `required` & `email` are `Sync` validators
        //we can pass asyn validator as 3rd Arrgument        
        email: new FormControl(null, [Validators.required, Validators.email], this.emailNotAllowed)
      }) ,                    
      country: new FormControl('India'),
      gender: new FormControl('male'),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required),        
      ])             
    });
    console.log(this.reactiveForm);

    /*CONCEPT : ValueChanges event
     Listening to `valueChanges` event which will be raised everytime value of form control field changes*/
    //REMEMBER : The `valueChanges` event returns an observable which emits the user enter value in form control field
    this.reactiveForm.valueChanges.subscribe((value) => {
      console.log(value); /*whenever `valueChanges` event raised it 
                                  logs an obj having all control fields in `reactiveForm` FormGroup
                          which ever control field value changed that value will be assigned to it*/
    });

    this.reactiveForm.get('personaldetails.firstname').valueChanges.subscribe((value) => {
      console.log(value);   //logs every letter we type in `firsstname` control field
    });

    /*CONCEPT : StatusChanges event
      `statusChanges` event is an observable that is triggered when the status of a form control changes.
  Wich means for every entry in applied validators form control fileds in <form> 
                        the `statusChanges` event will be raised*/
    /*The `statusChanges` event is subscribed to in the `ngOnInit` method. 
        Whenever the validation status of the name form control changes (e.g., from valid to invalid or vice versa), 
        the subscriber function is called, and the new status is logged to the console.*/
    /*Here i wanna listen to `statusChanges` event on `reactiveFrom` FormGroup level which means the entire <form>*/
    this.reactiveForm.statusChanges.subscribe((value) => {
      console.log(value); //logs status of FormGroup <form> i.e., valid or invalid for every entry in all its form control fields  
      this.formStatus = value;
    });

    /*`setValue()` on reactive form*/
    // setTimeout(() => {
    //   this.reactiveForm.setValue({
    //     personaldetails: {
    //       firstname: '',
    //       lastname: '',
    //       email: 'abc@example.com',
    //     },
    //     gender: '',
    //     country: '',
    //     hobbies: '',
    //     skills: []
    //   });
    // }, 4000)

    /*`patchValue()` on reactive form
    REMEMBER : we do not need to call `patchValue()` on `form` property of `reactiveForm` 
                                                    as we do for `template driven form`*/
    setTimeout(() => {
      this.reactiveForm.patchValue({
        personaldetails: {
          email: 'abc@example.com',
        }
      });
    }, 4000);    
  }

  onSubmit(){
    console.log(this.reactiveForm);
    /*`reset()` on reactive form*/
    this.reactiveForm.reset({
      personaldetails: {
        firstname: '',
        lastname: '',
        email: 'abc@example.com',
      },
      gender: 'female',
      country: 'India',
      hobbies: '',
      skills: []          
    });
  }

  addSkills(){
    /*to add new element to array we can use `push` method on array to which we need to add new element*/
    /*As `get()` able to return a FormArray, FormGroup, or FormControl 
          hence Here we are explicitly specifying type of `get()` return value*/
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }
  /*CONCEPT: Custom Validators
        NOTE that `validators` say `required`,`email`...are nothing but a methods*/
  noSpaceAllowed(control: FormControl){
    /*The indexOf() method is a built-in JavaScript function that is used to
        search for a specified value within a string or an array and
        returns the index at which the value is found. If the value is not found, it returns -1.
    Syntax for strings:     string.indexOf(searchValue, startIndex)
    Syntax for array :      array.indexOf(searchElement, startIndex)
*/
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed: true} //returning an error code as key-value pair to `errors` object property of FormControl
    }
    return null;
  }
  //custom async validator WHICH MUST RETURN either a promise or an Observable
  /*which ever FormControl we use this validator `emailNotAllowed` that will be passed as argument to it*/ 
  /*CODE EXPLANATION : When user tries to enter `procademy@gamil.com` on form control field which has `emailNotAllowed` validator
            the dynamic Angular CSS class changes after 5sec from 
        class="ng-touched ng-dirty ng-pending" to class="ng-touched ng-dirty ng-invalid" */
  emailNotAllowed(control: FormControl): Promise<any> | Observable<any>{
    const response = new Promise((resolve, reject) =>{
      setTimeout(() =>{
        if(control.value === 'procademy@gmail.com'){
          //We wanna send an error code when this promise will be resolved
          resolve({emailNotAllowed: true});
        }else{
          resolve(null);
        }
      }, 5000)
  });
  return response;
  }
}
/* `FormGroup` is a class provided by the `@angular/forms` module that represents a collection of FormControl instances
                                                                 and provides a way to track the form's state and validity.*/
/*Within the `FormGroup` constructor, 
                  multiple FormControl instances are defined for each form control in the reactive form.
For example, `firstname` is a form control that represents the first name input field in the form. 
                                                                  It is initialized with an initial value of null.
Similarly, lastname, email, country, gender, and hobbies are form controls 
      representing their respective input fields, and they are also initialized with an initial value of null.*/

/*By creating a FormGroup and defining form controls within it, 
          we are setting up the structure and initial state of a reactive form. 
Each form control can be accessed using the dot notation on the reactiveForm object. 
          For example, to access the firstname form control, you can use `this.reactiveForm.controls.firstname`.
This approach allows us to manage and validate the form inputs,
         access their values, and perform various form-related operations using the reactiveForm instance.*/

/*Difference in Having FormGroup and FormArray as property in `FormGroup` object say `reactiveForm` :
        When we create FormGroup object we pass an `object` inside which FormControl objects are specified as key-value pairs
        When we create FormArray object we pass an array inside which we specify FormControl objects as elements*/

/*n the context of JavaScript or frameworks like Angular, the `valueChanges` event refers to 
                  an event or observable that is triggered when the value of an input or form control changes. 
It is commonly used in reactive forms to track changes to form controls and perform actions or validations based on those changes.

In Angular, the `valueChanges` and `statusChanges` event is part of the `AbstractControl` class, 
    which is the base class for form controls such as `FormControl`, `FormGroup`, and `FormArray`. 
The `valueChanges` event is an observable that emits the new value whenever the value of the form control changes.*/
