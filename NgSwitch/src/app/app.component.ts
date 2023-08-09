import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgSwitch';

  occupation: string = 'teacher ';

  /*when The value of `occupation` which is dinded to `[ngSwitch]`, doesnt match with any `*ngSwitchCase` values then 
	`*ngSwitchDefault` directive content will be rendered to DOM*/
  
  //occupation: string = 'doctor ';

}
