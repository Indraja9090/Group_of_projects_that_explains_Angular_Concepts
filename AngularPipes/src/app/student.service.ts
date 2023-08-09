import { Student } from "./student.model";


export class StudentService{
    students: Student[] = [
        {name: 'Mark Vought', course: 'MBA', marks: 520, DOB: new Date('11-12-1997'), gender: 'Male'},
        {name: 'Steve Smith', course: 'BTECH', marks: 420, DOB: new Date('09-12-1986'), gender: 'Female'},
        {name: 'Marry Jane', course: 'MBA', marks: 540, DOB: new Date('10-18-1992'), gender: 'Male'},
        {name: 'John Doe', course: 'MBA', marks: 380, DOB: new Date('11-14-1995'), gender: 'Male'},
        {name: 'Sarah Smith', course: 'M.SC', marks: 430, DOB: new Date('12-10-1998'), gender: 'Female'},
        {name: 'Jonas eber', course: 'M.SC', marks: 320, DOB: new Date('01-21-1999'), gender: 'Male'}
    ];

    totalMarks: number = 600;
}