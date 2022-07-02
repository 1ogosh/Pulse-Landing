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

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});