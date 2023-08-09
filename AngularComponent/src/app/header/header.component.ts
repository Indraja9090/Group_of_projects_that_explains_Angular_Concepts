import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  slogan: string = "Your One Stop Shop For Everything";

  imgSource: string = "/assets/shopping.jpg"

  getSlogan(){
    return "This is new slogan for this web application";
  }

}
