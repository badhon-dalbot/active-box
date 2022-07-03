$(document).ready(function(){

    // venobox 
    $('.venobox').venobox({
        border: '3px',
        framewidth: '800px',
        frameheight: '600px',
        spinner: 'three-bounce',
        spinColor: '#e84545'
    });
    
    // slick 
    $('.client-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true, 
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        focusOnSelect: true,
      });
});

