$(function(){

  'use strict';



  $(document).ready(function() {




    /***************************************************************************/
    /* WOW ANIMATION */
    /***************************************************************************/
    var wow = new WOW({ mobile: false });
    wow.init();






    /**************************************************************************/
    /*  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX   */
    /**************************************************************************/
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style')
      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      )
      document.querySelector('head').appendChild(msViewportStyle)
    }


  });

});


var $ = jQuery.noConflict();
$(window).load(function() {
  $('.flexslider').flexslider({
        animation: "fade"
  });

  $(function() {
    $('.show_menu').click(function(){
      $('.menu').fadeIn();
      $('.show_menu').fadeOut();
      $('.hide_menu').fadeIn();
    });
    $('.hide_menu').click(function(){
      $('.menu').fadeOut();
      $('.show_menu').fadeIn();
      $('.hide_menu').fadeOut();
    });
  });
});
