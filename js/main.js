// ----- carousel -----

const slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    center: true
  });

document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
};
  document.querySelector('.next').onclick = function () {
    slider.goTo('next');
};

// -----tabs-----

$(document).ready(function(){
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(event) {
        event.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__details').eq(i).toggleClass('catalog-item__details_active');
      });
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // ----- modals ------

  $('.catalog-item__btn').each(function(i) {
    $(this).on('click', function() {
      $('.modal-order .modal-description').text($('.catalog-item__subtitle').eq(i).text());
      $('.modal-order').fadeIn('slow');
    });
  });

  // ------- forms validation ------
  
  function validateForms(form){
    $(form).validate( {
      rules: {
        name: {
          required: true,
          minlength: 3
        },
        phone: "required",
        email: {
          required: true,
          email: true
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, введите Ваше имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
        },
        phone: "Пожалуйста, введите Ваш номер телефона",
        email: {
          required: "Пожалуйста, введите Вашу почту",
          email: "Неправильно введен адрес почты"
        },
      },
    }); 
  }

  validateForms('.consultation__form');
  validateForms('#consultationSection form');
  validateForms('#orderModal form');

  // ------ phone mask -------

  $('input[name=phone]').mask("+38 (099) 999-99-99");

  // ------ pageup -----

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1200) {
      $('.pageup__link').fadeIn();
    } else {
      $('.pageup__link').fadeOut();
    }
  });
});