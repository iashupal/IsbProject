

 // 2 owl-carousel
  $('#alumniowlcrusol6new.owl-carousel').owlCarousel({
    loop: true, //true
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 9000,
    margin: 0,
    nav: true, //true
    pagination: false,
    dots: false,

    responsive: {
      0: {
        items: 1,
        nav: true, //true
      },
      767: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 1,
        nav: true,  //true
        loop: true, //true
        margin: 20
      }
    }
  })


 $(document).ready(function () {
   //only the content inside of the element will be deleted
    $( ".owl-prev,.owl-next" ).empty();
 });


 // 3 owl-carousel
  $('#owlcrusol6new.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 9000,
    margin: 0,
    nav: false,
    pagination:false,
    dots: true,

    responsive: {
      0: {
        items: 1,
        nav: false
      },
      767: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false,
        loop: false,
        margin: 10,
      }
    }
  })



$(document).ready(function(){
  // var body = $("html, body");
  //     body.stop().animate({scrollTop:0}, 1800, 'swing', function() { 
  // });

  $(function(){
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 2000);
    return false;
  });
});

 $(document).ready(function(){
// wow js start
  new WOW().init();
// wow js end
});




