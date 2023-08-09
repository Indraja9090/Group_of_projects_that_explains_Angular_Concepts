import { query } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  course;
  /*This gonna assign with currently active route paramter value from URL*/
  courseId;
  unSubParamMapObs;
  editMode: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private coursesService: CoursesService,
              private router: Router){
    
  }

  ngOnInit(): void{
    /* Uisng `snapshot.paramMap` Retrieving the value `id` param from currently active route
       REMEMBER THAT : `snapshot` property will return only the initial value of `id` but 
                                            will not return the updated value of `id` parameter */ 
    //this.courseId = this.activatedRoute.snapshot.paramMap.get('id');

    /* `snapshot` property also has another property i.e., `params[]`,
                  which we can use to retrieve `id` parameter*/ 

    //this.courseId = this.activatedRoute.snapshot.params['id'];
    
    //this.course = this.coursesService.courses.find((x) => x.id == this.courseId);

    /*When you access activatedRoute.paramMap, it returns an observable that emits
                                                       the current parameter map as its value.
    By subscribing to the paramMap observable, we can react to changes in the route parameters.
    Whenever the route parameter changes, the subscription function will be called with the updated parameter values.*/
  
    this.unSubParamMapObs = this.activatedRoute.paramMap.subscribe(param => {
      this.courseId = param.get('id');
      this.course = this.coursesService.courses.find((x) => x.id == this.courseId);
    });

    /*CONCEPT : Retieveing the appended `query parameters` from active route to Component class,
            either by calling map i.e., `queryParamMap` on `snapshot` property of ActivatedRoute object
                       or subscribing to Observable emitted by paramMap on ActivatedRoute object*/
           
    //this.editMode = Boolean(this.activatedRoute.snapshot.queryParamMap.get('edit'));
    //console.log(this.editMode);
    
    this.activatedRoute.queryParamMap.subscribe(param => {
      this.editMode = Boolean(param.get('edit'));
      this.course = this.coursesService.courses.find((x) => x.id == this.courseId);
    });
  }
  /*REMEMBER THAT : When this `CourseComponent is destroyed Angular will internally unsubcribe from this `paramMap`,
                  BUT GOOD PRACTICE is to `unsubscribe` the Observable EXPLICITLY*/
  ngOnDestroy(){
    this.unSubParamMapObs.unsubcribe();
  }

  retrieveQueryParams(){
    this.router.navigate(['/courses/course', this.courseId], {queryParams: {edit: true}})
  }
    
}
/*If we wrote like 
        this.router.navigate(['/courses/course'], { queryParams: { edit: true } });
  After clicking `EditMode Appear` 
      The resulting URL will still be http://localhost:4200/courses/course/103.
                   will not be http://localhost:4200/courses/course?edit=true.

  The reason for this behavior is that the `router.navigate` method is navigating
                         to the same route '/courses/course' without changing the route parameters.
   In this case, the route parameter 103 is still present in the URL, 
                      and the query parameter `edit=true` is added BUT DOES NOT AFFECT THE EXISTING ROUTE.

/*From `courses` array we want to get course `id` 
                      that matches with the currently active route `courseId`
      Hence we use `find()` method specifying a callback function 
              which iterating  over each elemment in `courses` array
              and return that element whihc satisfy the given condition 
*/
/*`queryParamMap` is a map which store URL query parameters as `KEY-VALUE` pairs abd
            using `get()` we can get value of URL query parameter i.e., `edit` 
        As `get()` returns a string value hence we need to convert string into boolean w.r.t type of `editMode` property
*/
/*REMEMBER : When we click on `Show Detials` button in path `/courses` Angular navigates us to path `/courses/course/:id`
                    let say http://localhost:4200/courses/course/102

     Which means an instance of its associated CourseComponent has been created & Obviously `ngOnInit()` will be executed
                                                                      ONLY ONCE at CourseComponent creation,
        Hence by this time `this.activatedRoute.snapshot.queryParamMap.get('edit')` returns `NULL` value. 
            Converting `NULL` to Boolean will be FALSE and is assigned to `editMode` property 
              That is why <input> will not be rendered in UI
*/ 
/*The find() method is a built-in JavaScript array method 
              that is used to search for an element in an array that satisfies a given condition.
      It takes a callback function as an argument, which is executed for each element in the array
                                until a match is found or the end of the array is reached.
The find() method stops iterating as soon as it finds the first matching element.
    If you want to find all matching elements, you can use the `filter()` method instead, 
              which returns an array of all elements that satisfy the provided condition.
*/
/*In Angular, the ActivatedRoute object represents the currently activated route and
           provides access to route parameters, query parameters, and other route-related information. 
  The `paramMap` and `snapshot.paramMap` properties on the ActivatedRoute object 
                                                        are used to access the route parameters.                                                      
*/
/*The paramMap property is an Observable that emits a new value whenever the route parameters change.
                                It is typically used when you need to react to parameter changes dynamically. 
                You can subscribe to the paramMap observable to receive the updated parameter values.
*/
/*In an Angular application using routing, the component gets initialized when its corresponding route is activated.
 The initialization process involves creating an instance of the component, 
                        rendering its template, and executing the component's lifecycle hooks.
*/
/*It's important to note that components may be re-initialized if the same route is visited again,
                                        or if parameters or query parameters associated with the route change. 
  In such cases, the component goes through the initialization process again, 
                      allowing you to update the component's state and re-render the template as needed.*/