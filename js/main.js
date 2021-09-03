$( document ).ready( function() {

    $('.banners').slick({
        dots: false,
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

});