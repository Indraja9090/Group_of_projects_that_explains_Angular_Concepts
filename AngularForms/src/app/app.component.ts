import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  defaultCountry = 'India';
  firstName: string;
  lastName: string;
  email: string;
  gen: string;
  country: string;
  gender = [
    {id: '1', value:'Male'},
    {id: '2', value:'Female'},
    {id: '3', value:'Other'},
  ];
  defaultGender = 'Male';

  /*Definig property `form` of type `NgForm` and decorated with `@ViewChild` 
  To this  @viewChild() we pass local-reference variable of <form> as argument*/
  @ViewChild('formRef') form: NgForm;

  /*`formRef` gonna receive an instance of <from> element*/

  //onSubmit(formRef: HTMLFormElement){
    //console.log(formRef); //logs the `<form>` template as DOM object   
  //}

  /*`formRef` gonna receive an instanec of `ngForm`*/
  //onSubmit(formRef: NgForm){
    //console.log(formRef); //logs an object of type `NgForm`   
  //}

  /*Using `@viewChild` decorator*/
  onSubmit(){
    console.log(this.form); //logs an object of type `NgForm`  
    this.firstName = this.form.value.personaldetails.firstname;
    this.lastName = this.form.value.personaldetails.lastname;
    this.email = this.form.value.personaldetails.email;
    this.country = this.form.value.country;
    this.gen = this.form.value.gender;
    /*resets the forms controls values once <form> has been submitted
          and also resets the form controls CSS class i.e., 
           `class="ng-touched ng-dirty ng-valid"` 
                              back to 
           `class="ng-untouched ng-pristine ng-invalid"`*/
    this.form.reset();
  }
  /*writing the logic which set default values to FormGroup object's control fields*/
  setDefaultValues(){
    /*this can set the values to `firstname`,`lastname`,`email properties in `personalDetails` object 
                          which is property in `value` property of `NgForm` object of <form>
        But will not display these values in UI fields
            Hence we use `setValue()` method which set values for 
                            form controls in NgForm object as well as its associated UI fileds*/
    //this.form.value.personalDetails.firstname = 'Indraja';
    //this.form.value.personalDetails.lastname = 'Araveti';
    //this.form.value.personalDetails.email = 'abc@example.com';

    /*need to pass an Object with EXACT property heirarcy of `value` object which is property of `NgForm` object of <form>*/
    /*If we miss defining any propety in this heirarchy we may get an error saying
            Must supply a value for form control with name: hobbies*/
    /*REMEMBER: Usage of `setValue` method is good when we want to set values to all 
                    form controls */
    //this.form.setValue({
      //country: '',
      //gender: '',
      //hobbies: '',
      //personaldetails: {
        //firstname: 'Indraja',
        //lastname: 'Araveti',
        //email: 'abc@example.com'
      //}
    //})

    /*accessing `this.form` which is `NgForm` object 
              onwhich we need to call `form` property and then call `pathValue().
    We need to pass ONLY the from-control property structure (of `value` object to `pathvalue())
              whoes values are we need to be set  */
    this.form.form.patchValue({
      personaldetails: {
        firstname: 'Indraja',
        lastname: 'Araveti',
        email: 'abc@example.com'
      }
    })

  }

}
