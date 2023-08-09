import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-filtering-logic-in-component',
  templateUrl: './filtering-logic-in-component.component.html',
  styleUrls: ['./filtering-logic-in-component.component.css']
})
export class FilteringLogicInComponentComponent implements OnInit{
  students: Student[];
  totalMarks: number;
  _filterText: string = '';
  /*Created to donot affect the original array reference i.e.,`students`   
              whose value assigned from this.studentService.students*/
  filteredStudents: Student[];
  /*Intitiallyy a pending promise `[object Promise]` will be assigned to `totalStudents`*/
  totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.filteredStudents.length)       
    }, 2000)
  })
   /*"_filterText", This naming convention is often used to indicate that 
          the variable is intended to be a private member within the class or component.
  getter method "filterText()" retrieves the value of the private variable "_filterText" and returns it. 
   It indicates that the variable should not be accessed or modified directly
                            from outside the class or component but rather through the getter method..*/
  get filterText(){
    console.log("Getting filterText");
    return this._filterText;

  }

  /*whenever we enter a data in <input> box that data will be return to `value`*/
  set filterText(value: string){
    console.log("setting filterText");
    this._filterText = value;
    this.filteredStudents = this.filterStudentByGender(value);
  }

  constructor(private studentService: StudentService){

  }
 
  ngOnInit(){
    //So far here this.students refers to the array with 6 elements
    this.students = this.studentService.students; 
    this.totalMarks = this.studentService.totalMarks;
    this.filteredStudents = this.students;
  }
  /*To this `filtertrem` parameter we want to assign data entered in <input> box*/
  filterStudentByGender(filterTerm: string){
    if(this.students.length === 0 || this._filterText === ''){
      return this.students;
    }else{
    /*`filter()` iterates on each element of an array and 
        returns the elements of an array that meets the condition
            specified in its callback function*/
      return this.students.filter((student) => {
        return student.gender.toLowerCase() === filterTerm.toLowerCase()

      })
    }   
  }
/*SENARIO-1
Case-1: `impure change`*/

  addStudent(){
    /*directly pushes a new student object into the existing `students` array. 
                                                However the array reference remains the same*/
    this.students.push({name: 'Indraja', course: 'BTECH', marks: 580, DOB: new Date('5-20-1987'), gender: 'Female'});
    this.filteredStudents = this.filterStudentByGender(this._filterText);
    console.log(this._filterText);
  }

  /*Case-2: `pure change`*/
  //addStudent(){    
    //let studentsArrayCopy = Object.assign([], this.students);
    //studentsArrayCopy.push({name: 'Indraja', course: 'BTECH', marks: 580, DOB: new Date('5-20-1987'), gender: 'Female'});
    //this.students = studentsArrayCopy; 
  //}

  /*SENARIO-1
  Case-1: `impure` change*/
  changeGender(){
    /*`gender` value Change happening to the same array reference from `this.studentService.students`*/
    this.students[0].gender = 'female';
    this.filteredStudents = this.filterStudentByGender(this._filterText);
  }

  /*Case-2: `pure` change*/
  //changeGender(){
    //let studentsArrayCopy = Object.assign([], this.students);
    //studentsArrayCopy[0].gender = 'female';
    //this.students = studentsArrayCopy; 
  //}

  onMouseMove(){

  }

}
/*The `filterText` getter and setter methods provide the interface for accessing and modifying the value of `_filterText`.*/
/*In Angular, the AsyncPipe is a built-in pipe that provides a convenient way to handle asynchronous data streams,
                                                                                  such as observables or promises, in templates. 
      It simplifies the process of subscribing to and unsubscribing from asynchronous data sources,
                                          reducing the need for manual subscription management in component code.*/