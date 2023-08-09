import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, AfterContentInit {

  /*This decorator is used to get a reference to the element with the template variable #paragraph from the parent component's template.*/
  @ContentChild('paragraph') paragraphEle: ElementRef;
  constructor() { }

  /* This logs `undefined` - Because,
	    a Component property decorated with `@ViewChild` or `@ContentChild` get initialized
                            only right before the `ngAfterContentInit()` Lifecycle hook  executed     
   Hence by the time when this`ngOnInit()` called,
		 the @ContentChild `paragraphEle` property  has not been intialized yet and hence it is `undefined`*/
  ngOnInit(){
    console.log(this.paragraphEle); //logs `undefined`
  }

  /*This hook is called after the content of the component has been initialized, including the @ContentChild properties.*/
  ngAfterContentInit(){

    //This logs `ElementRef {nativeElement: p }` 
    console.log(this.paragraphEle);
    console.log(this.paragraphEle.nativeElement.textContent);
    //This logs `Am passed from ParentComponent TEMPLATE to ChildComponent CLASS
    this.paragraphEle.nativeElement.textContent = 'Am projected content got updated at Component class.'; 
    console.log(this.paragraphEle.nativeElement.textContent);
  }

}
