/*The (ngSubmit) event is used in Angular to handle form submissions.
 It is typically used with the <form> element and 
            triggers when the user submits the form by clicking a submit button or pressing the Enter key.*/
/*Note that for (ngSubmit) to work, it's important to have a <button type="submit"> element 
                                                                                inside the <form> tag 
        or use the `ngSubmit` directive on a button or input element.
 This allows the form submission to be triggered properly when the user interacts with the form.*/
import { Component } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
    <form (ngSubmit)="submitForm()">
        <label>
        Name:
        <input type="text" [(ngModel)]="name" name="name" required>
        </label>
        <button type="submit">Submit</button>
    </form>
    `,
})
export class ExampleComponent {
    name: string;

    submitForm() {
    console.log('Form submitted! Name: ' + this.name);
    // Perform additional form submission logic here
    }
}
/*In this method, you can perform any necessary form submission logic,
         such as sending data to a server, processing the form data, or navigating to a different page.*/