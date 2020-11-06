$(document).ready(function(){

    $(".owl-carousel").owlCarousel({

        loop:true,
        margin:10,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        //autoplayHoverPause:true,
        
        responsive:{
            0:{
                items:1,
            },
            360:{
                items:2,
            },
            667:{
                items:4,
            },
            1000:{
                items:6,
            }
        }
    });
});
