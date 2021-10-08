(function($){
  'use strict';

        
  var main_slider=$('.main-slider');
  main_slider.owlCarousel({
     items: 1, 
     loop: true,
     nav: false,
    
     autoplay:true,
   autoplayTimeout:2500,
   autoplayHoverPause:true
   });   
   $('.b-right').click(function() {
    main_slider.trigger('next.owl.carousel');
 });$('.b-left').click(function() {
    main_slider.trigger('prev.owl.carousel');
 });

var testimonial_slider=$('.testimonial-slider');
testimonial_slider.owlCarousel({
   items: 3, 
   loop: true,
   nav: false,  autoplay:true,
   margin:20,
 autoplayTimeout:2500,
 dots:true,
 autoplayHoverPause:true,
 responsive:{
    0:{
        items:1
    },
    600:{
        items:1
            },
    1000:{
        items:2
       
    }, 1200:{
        items:3,
       
        loop:true
    }
}
 });  

 var courses_slider=$('.course-slider');
 courses_slider.owlCarousel({
    items: 3, 
    loop: true,
    nav: true,  autoplay:true,
    margin:20,
  autoplayTimeout:2500,
  dots:true,navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  autoplayHoverPause:true,
  responsive:{
     0:{
         items:1
     },
     600:{
         items:1
             },
     1000:{
         items:1
        
     }, 1200:{
         items:1,
        
         loop:true
     }
 }
  });  
 
 
var selectionslider=$('.selection-slider');
selectionslider.owlCarousel({
   items: 4, 
   loop: true,
   nav: false,dots: true,
   margin:20,
 responsiveClass:true,  autoplay:true,
 autoplayTimeout:2500,
 autoplayHoverPause:true,
 responsive:{
     0:{
         items:1
     },
     600:{
         items:2
             },
     1000:{
         items:3
        
     }, 1200:{
         items:4,
        
         loop:true
     }
 }
 });
var photoslider=$('.gallery-slider');
   photoslider.owlCarousel({
      items: 3, 
      loop: true,
      nav: true,dots: true,
      margin:20,
    responsiveClass:true,  autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
                },
        1000:{
            items:3,
           
            loop:false
        }, 1200:{
            items:3,
           
            loop:true
        }
    }
    });

    var photoslider=$('.video-slider');
   photoslider.owlCarousel({
      items: 1, 
      loop: true,
      nav: true,dots: true,
      margin:20,
    responsiveClass:true,  autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1,
                },
        1000:{
            items:1,
           
            loop:false
        }, 1200:{
            items:1,
           
            loop:true
        }
    }
    });


    /*====================================
    Isotop And Masonry Active
======================================*/
   

var back_to_top = $('#scroll-top');

back_to_top.click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1500);
});
  
    $(".messge-pop").click(function () {

        $(".message-box").slideDown();
    });

    $(".m-title > i").click(function () {
        $(".message-box").slideUp();
    });
/*====================================
   Nivi Lightbox
======================================*/
    
var $nivo_lightbox = $('a[data-lightbox-gallery]');
if ($nivo_lightbox.length > 0) {
    $nivo_lightbox.nivoLightbox({
        effect: 'fadeScale',
        afterShowLightbox: function () {
            var $nivo_iframe = $('.nivo-lightbox-content > iframe');
            if ($nivo_iframe.length > 0) {
                var src = $nivo_iframe.attr('src');
                $nivo_iframe.attr('src', src + '?autoplay=1');
            }
        }
    });
}



$('.counter-value').counterUp({
    delay: 10,
    time: 1000
});
new WOW().init();
})(jQuery);


 $(document).ready(function () {

            $(".filter-button").click(function () {
                var value = $(this).attr('data-filter');

                if (value == "all") {
                    //$('.filter').removeClass('hidden');
                    $('.filter').show('3000');
                }
                else {
                    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
                    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                    $(".filter").not('.' + value).hide('3000');
                    $('.filter').filter('.' + value).show('3000');

                }
            });

        });