$(function () {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 300) {
        $('#backToTop').fadeIn(1000)
      } else {
        $('#backToTop').fadeOut(1000)
      }
    })
  
    $('#backToTop').on('click', function () {
      $('html,body').animate({
        scrollTop:0,
      },1000)
    })
    /$(window).on('load', function () {
      $('.preloader').fadeOut(1000);
    })
    $("a").on("click", function (event) {
      event.preventDefault();
      if (this.hash !== "") {
        var hash = this.hash;
  
        $("html,body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          1000
        );
      }
    });
    $(window).on('scroll', function () {
  
      if ($(window).scrollTop() > $('#header').height()) {
         $('#header').addClass('menu_animate')
      } else {
         $('#header').removeClass('menu_animate')
      }
   })
  
   $('.banner_slider').slick({
    prevArrow:'<i class="banner_slider_icon fas fa-chevron-left"></i>',
    //prevArrow:'<i class="banner_slider_icon fa-long-arrow-left"></i>',
    nextArrow: '<i class="banner_slider_icon fas fa-chevron-right"></i>',
    //nextArrow: '<i class="banner_slider_icon fa-solid fa-arrow-left"></i>',
    dots: true,
    dotsClass: 'banner_slider_dots',
    fade:true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed:2000,
  })
  'use strict'

  $('.filtr-container').filterizr();

  $('#gallery_menu li').on('click', function () {
     $(this).addClass('active')

     $(this).siblings('.active').removeClass('active');
  })
  $('#offer_count_down').countdown('2022/02/25', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="count_down_item"><span>%D</span> <span>days</span></div> '
      + '<div class="count_down_item"><span>%H</span> <span>hrs</span></div> '
      + '<div class="count_down_item"><span>%M</span> <span>mins</span></div> '
      + '<div class="count_down_item"><span>%S</span> <span>secs</span></div> '));
  });
  let select = document.getElementById('day');

for (var i = 31; i >=1; i--) {
   let option = document.createElement('option');
   let text = document.createTextNode(i);


   option.appendChild(text);
   select.appendChild(option);
}

/*
  let select = document.getElementById('month');

for (var i = 12; i >=1; i--) {
   let option = document.createElement('option');
   let text = document.createTextNode(i);


   option.appendChild(text);
   select.appendChild(option);
}


  let select = document.getElementById('year');

for (var i = 2022; i >=1990; i--) {
   let option = document.createElement('option');
   let text = document.createTextNode(i);


   option.appendChild(text);
   select.appendChild(option);
}*/
  })

  new VenoBox();