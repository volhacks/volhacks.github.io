 $(function(){

    'use strict';



    /*********************************************************/
    /* FULLSCREEN HOME SECTION                               */
    /*********************************************************/
    var fullscreen_home = function(){
        if(matchMedia( "(min-width: 768px) and (min-height: 500px)" ).matches) {
            var height = $(window).height() + "px";
            $(".header-overlay").css('min-height', height);
        }
    }



    /**********************************************************/
    /* NAVBAR BUTTON CHANGE                                   */
    /**********************************************************/
    var aboutOurEventLeft = function(){
        var leftHeight = $('.about-our-event-left').height();
        var rightHeight = $('.about-our-event-right').height();

        if(leftHeight >= rightHeight){
            $(".background-left").css('min-height', leftHeight);
            $(".background-right").css('min-height', leftHeight);
            $(".background-right-overlay-color").css('min-height', leftHeight);
        }else{
            $(".background-left").css('min-height', rightHeight);
            $(".background-right").css('min-height', rightHeight);
            $(".background-right-overlay-color").css('min-height', rightHeight);
        }
    }

    var venueRight = function(){
        var leftHeight = $('.venue-left').height();
        var rightHeight = $('.venue-right').height();

        if(rightHeight >= leftHeight){
            $(".background-left").css('min-height', leftHeight);
            $(".background-right").css('min-height', leftHeight);
            $(".background-left-overlay-color").css('min-height', leftHeight);
        }else{
            $(".background-left").css('min-height', rightHeight);
            $(".background-right").css('min-height', rightHeight);
            $(".background-left-overlay-color").css('min-height', leftHeight);
        }
    }



    /**********************************************************/
    /* MAP HEIGHT                                             */
    /**********************************************************/
    var contactUsBody = function(){
        var mapHeight = $('.contact-us-body').height();
        $(".map").css('min-height', mapHeight);
    }




    /*********************************************************/
    /* COLLAPSE LEFT HEIGHT                                  */
    /*********************************************************/
    var collapseLeft = function(){
        $(".collapse-left").css('min-height', $('.collapse-area').height() );
    }


    /*********************************************************/
    /*   SCHEDULE SECTION MOBILE VIEW                         */
    /*********************************************************/
    var btnscheduleCss = function(){
        if($(document).width() <= 991){
            $('.btn-schedule-css').css('display', 'block');
        }else{
            $('.btn-schedule-css').css('display', 'none');
            $('.nav-cus').css('display', 'block');
        }
    }



    /*********************************************************/
    /*   PRELOADER                                           */
    /*********************************************************/
    // makes sure the whole site is loaded
    $(window).load(function() {
        // will first fade out the loading animation
        $(".bubblingG").fadeOut();
        //then background color will fade out slowly
        $(".spinner-wrapper").delay(200).fadeOut("slow");
    });




    
    $(window).resize(function(){

        /*********************************************************/
        /* FULLSCREEN HOME FUNCTION                              */
        /*********************************************************/
        fullscreen_home();

        /**********************************************************/
        /* About Our Event Left Height                            */
        /**********************************************************/
        aboutOurEventLeft();

        /*********************************************************/
        /* COLLAPSE LEFT HEIGHT                                  */
        /*********************************************************/
        collapseLeft();

        /*********************************************************/
        /*   schedule SECTION MOBILE VIEW                         */
        /*********************************************************/
        btnscheduleCss();
    });




    $(document).ready(function() {



        /**********************************************************/
        /*   ...  */
        /**********************************************************/
        /*var top = Math.max($(window).height() / 2 - $("#header-body")[0].offsetHeight / 2, 0);
        $("#header-body").css('padding-top', top + "px").css('padding-bottom', (top - $('#header-navbar ').height()) + "px");
        $("#header-body").css('position', 'relative');
        */

        /*********************************************************/
        /*   schedule SECTION MOBILE VIEW                         */
        /*********************************************************/
        btnscheduleCss();




        /**********************************************************/
        /* DROPDOWN LABLE TEXT FOR MOBILE SIZE                    */
        /**********************************************************/
        $('.dropdown .label').click(function(){
            $($(this).data("id")).slideToggle('show');
        });
        $('.nav li').click(function(){
            var text = $(this).find('.nav-header').text();
            $(this).closest('.dropdown').find('.label').html(text + '<span class="glyphicon glyphicon-menu-down float-right" aria-hidden="true"></span>');
        
            if($(document).width() <= 991){
                $($(this).closest('.dropdown').find('.nav-cus')).slideToggle('show');
            }
        });

        $('.dropdown ul li:first-child a .nav-header').each(function(){
            var text = $(this).text();
            $(this).closest('.dropdown').children('.label').html(text + '<span class="glyphicon glyphicon-menu-down float-right" aria-hidden="true"></span>');
        });


        /**********************************************************/
        /* Fancy Select                                           */
        /**********************************************************/
        $('#ticket').fancySelect();



        /**********************************************************/
        /* About Our Event Left Height                            */
        /**********************************************************/
        aboutOurEventLeft();

        /**********************************************************/
        /* MAP HEIGHT                                             */
        /**********************************************************/
        contactUsBody();


        /*********************************************************/
        /* COLLAPSE LEFT HEIGHT                                  */
        /*********************************************************/
        collapseLeft();




        /*********************************************************/
        /* WOW ANIMATION                                         */
        /*********************************************************/
        var wow = new WOW({ mobile: false });
        wow.init();



        /**********************************************************/
        /* FULLSCREEN HOME FUNCTION                               */
        /**********************************************************/
        fullscreen_home();


        /***********************************************************/
        /* COUNT DOWN                                              */
        /***********************************************************/       
        $('.count_down').countdown({
            end_time: "2016/09/30 17:00:00 -0500",
            wrapper: function(unit){
                var wrpr = $('<div></div>').
                    addClass(unit.toLowerCase()+'_wrapper').
                    addClass('col-sm-3').
                    addClass('col-xs-3').
                    addClass('col-md-3').
                    addClass('custom');
                var background = $('<div></div>').
                    addClass('background').
                    addClass('time').
                    appendTo(wrpr);

                $('<span class="counter style_all"></span>').appendTo(background);
                $('<span class="title">'+unit+'</span>').appendTo(background);
                return wrpr;
            }
        });




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


    /**********************************************************/
    /*   GOOGLE MAP                                           */
    /**********************************************************/
    function init_map() {
        var myLocation = new google.maps.LatLng(35.958646,-83.924656);

        var mapOptions = {
            center: myLocation,
            zoom: 16,
            mapTypeControl: true,  /*This option will hide map type.*/
            draggable: false,
            scaleControl: false,   /*This option is used for disable zoom by scale.*/
            scrollwheel: false,   /*This option is used for disable zoom on mouse.*/
            navigationControl: true,   /**/
            
            // Styles
            styles: [{"stylers": [{"saturation": -100}]}],

            streetViewControl: true   /**/
          
        };

        var marker = new google.maps.Marker({
            position: myLocation,
            title:"Min Kao Building - University of Tennessee, Knoxville"});
          
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        marker.setMap(map); 
    }
    google.maps.event.addDomListener(window, 'load', init_map);


});

