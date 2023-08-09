import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent {
  title = 'AngularPipes';
  students: Student[];
  totalMarks: number;
  filterText: string = '';

  constructor(private studentService: StudentService){

  }

  ngOnInit(){
    //So far here this.students refers to the array with 6 elements
    this.students = this.studentService.students; 
    this.totalMarks = this.studentService.totalMarks;
  }
/*SENARIO-1
Case-1: `impure change` - To understand it first do filter by gender in UI and then click on `Add Student`*/
 /*Here The `customfilterpipe` as far if it is PURE PIPE will not be executed automatically
                                                                when there is NO change in input reference 
  However `customfilterpipe` will be perfomed when it is changed as `IMPURE PIPE` in its metadata of `@pipe`
                                                            when there is no Change input reference 
    In the case of `this.students.push({ ... })`, the array reference remains the same.  */

  addStudent(){
    /*directly pushes a new student object into the existing `students` array. 
                                                However the array reference remains the same*/
    this.students.push({name: 'Indraja', course: 'BTECH', marks: 580, DOB: new Date('5-20-1987'), gender: 'Female'});
  }

/*Case-2: `pure change` - To understand it first do filter by gender in UI and then click on `Add Student`*/
      /*`Object.assign()` method used to create a copy of the `this.students` array and 
                                                            assign it to the variable `studentsArrayCopy`.*/
          /* Now, studentsArrayCopy holds a separate reference to a new array that contains the same values as the original */
            /* It ensures that modifying the copy will not affect the original students array.*/

  //addStudent(){
    
    //let studentsArrayCopy = Object.assign([], this.students);
    //studentsArrayCopy.push({name: 'Indraja', course: 'BTECH', marks: 580, DOB: new Date('5-20-1987'), gender: 'Female'});
          /*assigns the modified `studentsArrayCopy` back to the `students` property of the component, 
                                                                                  updating the list of students.
                       Here `students` property is refering to the new array of `studentsArrayCopy`(i.e.,new element has deen added) 
                                        hence the array reference will change
                      Here The `customfilterpipe` WHICH IS PURE PIPE will be executed automatically when input reference changed */
    //this.students = studentsArrayCopy; 
  //}

  /*SENARIO-2:
  Case-1: `impure` change - When we are trying to change array element's property value without change in array reference 
                                    consider that type of change aas impure change 
        Hence `customfilterpipe` whcih is `pure pipe` will be performed when there is  change in input reference
        However If `customfilterpipe` changed as `impure pipe ` will performed when thers is NO change in input reference*/
  changeGender(){
    /*`gender` value Change happening to the same array reference from `this.studentService.students`*/
    this.students[0].gender = 'female';
  }

  /*Case-2: `pure` change*/
  //changeGender(){
            /*hence the array reference will change*/
    //let studentsArrayCopy = Object.assign([], this.students);
    //studentsArrayCopy[0].gender = 'female';
    //this.students = studentsArrayCopy; 
  //}

  onMouseMove(){

  }
}
