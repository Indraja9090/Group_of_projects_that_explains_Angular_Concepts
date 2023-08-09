import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './custom-directive/setbackground.directive';
import { HighlightDirective } from './custom-directive/highlight.directive';
import { HoverDirective } from './custom-directive/hover.directive';
import { BetterHighlightDirective } from './custom-directive/betterhighlight.directive';
import { NgclassDirective } from './custom-directive/ngclass.directive';
import { NgstyleDirective } from './custom-directive/ngstyle.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterHighlightDirective,
    NgclassDirective,
    NgstyleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
