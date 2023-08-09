import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AppAuthService } from './app-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularRouting';
  displayLoadingIndicator = false;
  /*injecting `Router` class to access the `appRoutes` we defined in `AppRoutingModule`,
    The router objects have the `navigation events` happens when we navigate from one path to another
    Hence We can write some logic to be executed by sucribing to a navigation event */
  constructor(private activatedRoute: ActivatedRoute,
              private authService: AppAuthService,
              private router: Router){

  }
  /*Inside this method we wanna retrieve the value of active URL `fragment`
     hence we need instance of ActivatedRoute*/
  ngOnInit(){
    /*`fragment` returns an Observable */      
    this.activatedRoute.fragment.subscribe((urlFragValue) => {
      console.log(urlFragValue);
      this.jumpTo(urlFragValue);
    });
    /*`router` object has an `events` property which emits an `Observable` 
        Hence we are subscribing to that Observable to receive its data
        We can pass a callback function which gets executed when a new value is emitted by Observable 
                                                                and receives that value
        In this case Observable emits the type `Event`*/
    this.router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart){    /*true when navigation happen in url `NavigationStart` event will be raised
                                                        Hence that event instance will be assigned to `routerEvent`*/
        this.displayLoadingIndicator = true;
      }
      /*We wrote user confirmation box popups to ask user to  save the data, 
        if user clicks `ok` he satys in same page which means `navigation event will not end` &
        user cant navigate to other until he clicks `cancel` which makes currently `navigated page event get cancelled`*/
      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel
                                              || routerEvent instanceof NavigationError){
        this.displayLoadingIndicator = false;
      }
    });
  }
/* to `section` we gonna receive value of `id` attribute on HTML content
`scrollIntoView()` It is a built-in JavaScript function 
                  that can be called on a DOM (Document Object Model) element.*/ 
  jumpTo(eleId){
    document.getElementById(eleId).scrollIntoView({behavior: 'smooth'});
  }

  logIn(){
    this.authService.logIn();
  }

  logOut(){
    this.authService.logOut();
  }

}
/*When you invoke scrollIntoView({behavior: 'smooth'}) on an element,
       it triggers a smooth scroll animation to bring that element into the visible area of the browser window.
 The `behavior: 'smooth'` parameter specifies that
         the scrolling should be animated with a smooth transition rather than an instant jump.*/

/*In the above example, getElementById('eleId') retrieves the DOM element with the ID "eleId". 
      Then, scrollIntoView({ behavior: 'smooth' }) is called on that element,
                      instructing the browser to scroll to the element smoothly.*/