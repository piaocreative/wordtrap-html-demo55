$( document ).ready( function() {

    $('.banners').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows:true
    });

    $('.posts').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows:true
  });

  $('.testimonials').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:true
  });

  $('.teams').slick({
    dots: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: $(".team-prev"),
    nextArrow: $(".team-next"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

$('.service-lists').slick({
  dots: true,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  prevArrow: $(".service-prev"),
  nextArrow: $(".service-next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        arrows: false,
      }
    }
  ]
});

// var $team = $('.teams').isotope({
//   itemSelector: '.team',
//   layoutMode: 'fitRows'
// });

});