import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit{

  users: {name: string, job: string, gender: string, country: string, age: number, avatar: string}[] = [];
  //angular provide and inject the instance of  `UserService` class to `AllusersComponent` from its parent compnent 'Appcomponent`
  constructor(private userService: UserService){

  }

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  showDetails(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}){
    this.userService.showUserDetails(user);
  }
}
