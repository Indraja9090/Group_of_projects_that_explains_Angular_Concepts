/* EXAMPLE : applying a canActivate guard on a parent route that is applicable to its child routes in Angular*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/* define the route guard AuthGuard that implements the CanActivate interface:*/
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // Add your authentication logic here
     // Check if the user is authenticated or has necessary permissions
     // Replace with your authentication logic
    const isAuthenticated = true; // Example: hardcoded value for demonstration
    
    if (isAuthenticated) {
      return true; // Allow access to the route
    } else {
      // Redirect to login page or any other route if not authenticated

      //return this.router.parseUrl('/login');

      this.router.navigate(['/login']);
      return false; // Deny access to the route
    }
  }
}

/*----------AppRoutingModule----------*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogListComponent } from './blog-list.component';
import { BlogDetailComponent } from './blog-detail.component';
import { CommentListComponent } from './comment-list.component';
import { CommentAddComponent } from './comment-add.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'blog', component: BlogListComponent,canActivate: [AuthGuard] },
  { 
    path: 'blog/:postId', 
    canActivateChild: [AuthGuard], // Applying AuthGuard as canActivate guard
    component: BlogDetailComponent, 
    children: [
      { path: '', redirectTo: 'comments', pathMatch: 'full' },
      { path: 'comments', component: CommentListComponent },
      { path: 'comments/add', component: CommentAddComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*----------AppModule----------*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
    
