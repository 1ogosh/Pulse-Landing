$(document).ready(function(){
    $('.carousel_inner').slick({
         speed: 800,
         adaptiveHeight: false,
         prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/left-arrow.png"></button>',
         nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/right-arrow.png"></button>',
         responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
         ]
    });
  });