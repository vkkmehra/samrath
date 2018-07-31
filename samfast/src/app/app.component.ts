import { Component } from '@angular/core';
declare var jQuery;
declare var $;
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
    jQuery(document).ready(function($) {
      $(".scroll").click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
      });
    });   
    
    $(window).load(function() {
      $("#flexiselDemo1").flexisel({
        visibleItems: 3,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,    		
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
          portrait: { 
            changePoint:480,
            visibleItems: 1
          }, 
          landscape: { 
            changePoint:640,
            visibleItems: 2
          },
          tablet: { 
            changePoint:991,
            visibleItems: 2
          }
        }
      });
      
    });    
  }
}
