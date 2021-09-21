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
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
});

$(".team-prev").click(function(e) {
  e.preventDefault();
  $('.teams').slick('slickPrev');
})

$(".team-next").click(function(e) {
  e.preventDefault();
  $('.teams').slick('slickNext');
})

});