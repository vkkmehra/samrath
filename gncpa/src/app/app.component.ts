import { Component } from '@angular/core';
declare var jQuery;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  /**
   *
   */
  constructor() {
    jQuery(document).ready(function ($) {
      $(".scroll").click(function (event) {
        event.preventDefault();        
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
      });
      $().UItoTop({ easingType: 'easeOutQuart' });
    });
  }
}
