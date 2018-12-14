
$(function(){
  var direction_body = 'rtl';
  if ($('body').hasClass('ltr')) {
    direction_body = 'ltr';
  }
$('.carousel').carousel();
$('.shre-top a ,.lang-top a ').tooltip();



var window_width = $(window).width();
var window_height = $(window).height();
var header_con_height = $('#header-con').height();


  $('body').css('padding-top', header_con_height );

});


/*************************/

/*****************/







/*************************/

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
	var widthtl4s ;
if ($(window).width() > 960) {
   widthtl4s  = 300 ;
}else {
    widthtl4s  = 100 ;
}

    // if (scroll >= widthtl4s ) {
    //      $(".navbar-tl4s ").addClass("navbar_stuck");
    //
    //
    // }else{
    //
    //     $(".navbar-tl4s").removeClass("navbar_stuck");
 	 //   }

});



  	/**********************************/


/***********************/
$(document).ready(function() {

 	$('.home-cover-title ,.country-post-in ,.home-about-cover ,.search-home-like , .mobile_app_load-main h3').each(function() {
		$(this).addClass('wow fadeInUp  animated') ;
	});
 	$('.news-home-s1   ').each(function() {
		$(this).addClass('wow bounceInRight   animated') ;
	});
 	$(' .testimonials-main-img , .section-car-img  , .section-car-img img').each(function() {
		$(this).addClass('wow bounceInRight   animated') ;
	});
 	$('.mobile_app_load-main_phone img ,.section-moto-img  ,.section-moto-img img ').each(function() {
		$(this).addClass('wow bounceInLeft    animated') ;
	});
 	$(' .news-home-s4 ').each(function() {
		$(this).addClass('wow bounceInLeft    animated') ;
	});
 	$('.companies-content img ,.about-intro-img , .mobile_app_load-main img').each(function() {
		$(this).addClass('wow zoomIn     animated') ;
	});
 	$(' .about-post ,.follow-home-box,.element-item ').each(function() {
		$(this).addClass('wow flipInX      animated') ;
	});
 	$(' .msg-section5-container').each(function() {
		$(this).addClass('wow bounceInLeft      animated') ;
	});
 	$(' .grid').each(function() {
		$(this).addClass('wow flipInX      animated') ;
	});



});









/************************/

   		$(document).ready(function(){

				$(".gallery:first a[rel^='prettyPhoto[pp_gal]']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:9000, autoplay_slideshow: true});

 			});






		 /*wow animation*/

new WOW().init();
/********************************/
// external js: isotope.pkgd.js, classie.js

/********************************/
// external js: isotope.pkgd.js, classie.js

// ----- getText helper ----- //
$(window).load(function() {
  // Animate loader off screen
  jQuery(".load-page").fadeOut("slow");
  jQuery("#page-all").fadeIn("slow").css('visibility','visible' );
});
