import { EventEmitter } from "@angular/core"

export class UserService {
    users = [
        {name: 'Sarvepalli Radhakrishnan', job: 'Teacher', gender: 'Male', country: 'India', age: 86, avatar: 'assets/avatar/Radhakrishnan.jpeg'},
        {name: 'Mahatma Gandhi', job: 'Lawyer', gender: 'Male', country: 'India', age: 78, avatar: 'assets/avatar/Gandhi.jpeg'},
        {name: 'Kapil Dev', job: 'Crickter', gender: 'Male', country: 'India', age: 64, avatar: 'assets/avatar/Kapil.jpeg'},
        {name: 'NTR', job: 'Film Actor', gender: 'Male', country: 'India', age: 72, avatar: 'assets/avatar/NTR.jpeg'},
        {name: 'Sundar Pichai', job: 'CEO', gender: 'Male', country: 'India', age: 51, avatar: 'assets/avatar/Sundar Pichai.jpeg'}
    ]
    //Created an custom Event 
    onShowDetailsClicked = new EventEmitter<{name: string, job: string, gender: string, country: string, age: number, avatar: string}>();

    showUserDetails(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}){
        this.onShowDetailsClicked.emit(user);
    }
}