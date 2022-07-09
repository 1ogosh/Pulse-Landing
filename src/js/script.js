

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

    //табы
   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function(){
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass
        ('catalog__content_active').eq($(this).index()).addClass
        ('catalog__content_active');
    });

   //карточки (теперь функционал внутри toggleSlide функции)
//    $('.catalog-item__link').each(function(i) {
//         $(this).on('click', function(e) {
//             e.preventDefault();
//             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//         })
//     });

//    $('.catalog-item__back').each(function(i) {
//         $(this).on('click', function(e) {
//             e.preventDefault();
//             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//        })
//     });

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

    //Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_small').each(function(i){
        $(this).on('click', function() {
            $('#order .modal_descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

   
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 5
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите Ваше имя",
                    minlength:  jQuery.validator.format("Введите {5} символов")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                 email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
              }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
});