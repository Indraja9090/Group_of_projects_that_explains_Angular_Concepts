/*1.Follow the naming-conevntions that service `classname` must follow with `Service` word.
  2.REMEMBER - Service class is a normal typescript class which doesnt required to be decorated as 
				`Component` class and `Directive` class does*/
export class EnrollService {
/*Expecting a value to `title` parameter inorder to display that `title` value at DOM alert message*/
    onEnrollClicked(title: string) {
    alert('Thank you for Enrolling to ' + title + ' Course.');
    }
}