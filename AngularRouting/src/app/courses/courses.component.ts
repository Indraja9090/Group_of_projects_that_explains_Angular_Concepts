import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses = [];
  /*injecting the `ActivatedRoute` which provides the data emitted by resolved promise*/
  constructor(private coursesService: CoursesService, private activatedRoute: ActivatedRoute){
    
  }
  
  ngOnInit(): void{
    /*case-1: Here we are getting `courses` array list from `CoursesService` class*/
    //this.courses = this.coursesService.courses;

    /*case-2:this `getAllcourses` return a promise `coursesList`,
      The `then` method allows you to provide a callback function that will be executed 
          when the Promise is resolved.
      This callback function receives the resolved data*/
    //this.coursesService.getAllCourses().then((data) =>{
      //this.courses = data;
    //});

    /*case-3: CONCEPT : `resolve` Route Guard
    The `resolve` route guard allows us to load some data before it navigates us to the route
                                  that requires this loaded data to view its template*/
    /*`snapshot` property has the `data` property which receives the resolved promise data
          emitted by the active route i.e.,
              {path: 'courses', resolve: {courses: PromiseResolveService}, component: CoursesComponent}*/
    this.courses = this.activatedRoute.snapshot.data['courses']; 


    
  }

}
/*In Angular, the `ActivatedRoute` provides information about the currently activated route,
                                             including its parameters, query parameters, and data. 
The `snapshot` property of `ActivatedRoute` represents a snapshot of the current state of the route at the moment it was activated.

The `data` property on `activatedRoute.snapshot` allows you to access any data that is associated with the route. 
        This data can be defined in the route configuration using the `courses` property within each route definition.*/
