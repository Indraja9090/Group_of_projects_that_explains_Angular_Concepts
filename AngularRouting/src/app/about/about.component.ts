import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  /*`ActivatedRoute` class provides us access to information about
             a route associated with a Component that is currently loaded in UI*/ 
  constructor(private router: Router,private activatedRoute: ActivatedRoute){
  
  }
  /*Gonna write a logic to navigate to `Home` page
     Hence we need Angular to inject the `Router` class to this Component class*/ 
  navigateToHome(){
    /* path 'home' will append to ROOT URL http://localhost:4200/home
         but not to CURRENT URL http://localhost:4200/about/home */

    //this.router.navigateByUrl('home');   

    //path 'home' will append to CURRENT URL http://localhost:4200/about/home 
    this.router.navigate(['home'],{relativeTo: this.activatedRoute});
  }
}
/*We can call either of two methods on `router` instance,
        `navigateByUrl()` method specifying a string with URL segment
        `navigate()` method specifying an array inside which we can specify
                                        URL segment
  REMEMBER :
  `navigateByUrl()` and `navigate()` take URL segment as ABOSLUTE PATH,
            unless we provide with starting point
  Even we do not specify `/` to navigate path `home` it will be append to ROOT URL 
  
  However if we want to use provide RELATIVE PATH to `navigateByUrl()` or `navigate()`,
  then we need to get access to the current active route in UI  and also 
              need to tell above methods by specifing another parameter as `object`*/