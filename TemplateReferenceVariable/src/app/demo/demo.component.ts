import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  /* Since this `inputRef` going to store the reference to <input> element,
     it's datatype will be HTMLInputElement */

  sayHello(inputRef: HTMLInputElement){  

	  alert('Hello'+inputRef.value);

	  /* After typing & clicking on `sayHello` button at UI then
	     At developer console,it logs `<input _ngcontent-uai-cll type="text">`  */
	  console.log(inputRef);		   
  } 

}
