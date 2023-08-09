import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLifeCycleHooks';

  /*Created to store the data provided by user,which gonna store in DOM `value` property of <input>*/
  inputText: string = ' ';
  destroy: boolean = true;
  /* `inputEle` is a reference to DOM's host <input> element */
  onSubmit(inputEle: HTMLInputElement){
    this.inputText = inputEle.value;
  }

  onDestroyComponent(){
    this.destroy = false;
  }
}
