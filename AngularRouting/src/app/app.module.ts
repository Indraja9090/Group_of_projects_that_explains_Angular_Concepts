import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesService } from './services/courses.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CourseGuardService } from './services/course-guard.service';
import { AppAuthService } from './app-auth.service';
import { CanDeactivateGuardService } from './app-CanDeactivate.service';
import { PromiseResolveService } from './app-promiseResolve.service';

/*REMEMBER we can also define `Routes` in separate module TypeScript file or in AppModule */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    ErrorComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CoursesService,
              CourseGuardService,
              AppAuthService,
              CanDeactivateGuardService,
              PromiseResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
