import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth-service.service';
import { Router } from '@angular/router';
import { CookieService } from 'ng2-cookies';

declare var $;

@Component({
  selector: '[app-navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user : any = {};

  constructor(private authService : AuthService, private router : Router, private cookieService : CookieService) {
    this.user = this.cookieService.getAll();
   }

  ngOnInit() { 

    $('.carousel').carousel();
    $('[data-toggle="tooltip"]').tooltip();

    /* ******* */
    $('.datetimepicker3').each(function () {
      $('.datetimepicker3').datetimepicker({
        format: 'LT'
      });
    });
    $('.datetimepicker4').each(function () {
      $('.datetimepicker4').datetimepicker({
        format: 'l'
      });
    });
    
    /* ******** */
    $('#Invoices_popup').on('shown.bs.modal', function (e) {
      var window_Invoices_popup_left = $('.Invoices_popup_left').innerHeight();
  
      $(".Invoices_popup_right_row_in").css('min-height', window_Invoices_popup_left);
    });
   
    /******** */
    $('.selectpicker').selectpicker({
      countSelectedText: 'btn df fdefault',
      size: 8
    });

    /****** */
    var window_height = $(window).innerHeight(); 
    var window_height_footer = $('#footer').height(); 
    $(".content-wrapper").css('min-height', window_height - window_height_footer);
    
    /********* */
    var window_width = $(window).width();
    $(".navbar-toggle-c-single").click(function () {
     
      if (window_width >= 768) {
        $("body").toggleClass('sidebar-mini');
        $(".head-logo").toggle();
      } else {
        $(".sidebar").toggle();
      }
    });

 
  }
 

  signout(e){
    e.preventDefault();
    this.authService.doLogout().then(res => {
      this.router.navigate(['/login']);
    }).catch(err => {
    });
  }

}
