import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template:  `<!-- CONCEPT : One-Way Binding - Using 'Preperty Binding' -->
              
          <-- <div class="alert alert-success" [hidden]="displayNotification"> -->

          <div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}">

                This website uses cookies to provide better user experience.
                  
      <!-- CONCEPT : One-Way Binding - Using 'Event Binding' -->

      <!-- Ingeneral whenever event happens at UI ,it will emits an event-data,
      which will be passed as argu to the method which is assigned to an event property at template file.
      But since we are not using this arug(i.e event-data) in 'closeNotification()' at component class,
      we can also omit this event data which means doesnt manditry to pass as param to 'closeNotification($event)',
      as it is optional param-->

                  <div class="close"><button class="btn" (click)="closeNotification()"> X </button></div>

              </div>`,
  styles: ["div{margin :10px 0px; padding: 10px 20px; text-align: center;}",
           "p{font-size: 20px;}",
           ".close{float: right; margin-top: -15px;}",
           ".fadeOut{visibility:hidden; opacity:0; transition: visibility 0s 2s, opacity 2s linear}"
          ]
})
export class NotificationComponent {

  displayNotification: boolean = false;

  closeNotification(){
    this.displayNotification = true;
  }

}

/* fadeOut :  the` fadeOut` class is often used to create a fading effect for an element.
 It's commonly used in animations or transitions when you want an element to gradually disappear.

<div class="fadeOut">
  This element will fade out.
</div>

.fadeOut {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

` opacity `property  to 0 - Which makes the element completely transparent and effectively invisible.
` transition ` property - Used to specify the duration (1s), timing function (ease-in-out),
                          and the property being animated (opacity).
 This creates a smooth transition effect over a 1-second period.*/