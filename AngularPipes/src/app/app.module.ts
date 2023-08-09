import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PercentagePipe } from './customPercentage.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './customFilter.pipe';
import { FilteringLogicInComponentComponent } from './filtering-logic-in-component/filtering-logic-in-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PercentagePipe,
    FilterPipe,
    FilteringLogicInComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
