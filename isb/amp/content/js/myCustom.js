
  
 // 1 myCustomSlider

  $(function() {
      $("#myCustomSlider").AnimatedSlider( { prevButton: "#btn_prev1", 
                                       nextButton: "#btn_next1",
                                       visibleItems: 1,
                                       infiniteScroll: true,
                                       willChangeCallback: function(obj, item) { $("#statusText").text("Will change to " + item); },
                                       changedCallback: function(obj, item) { $("#statusText").text("Changed to " + item); }
                                    });


      $("#mySlider2").AnimatedSlider( { prevButton: "#btn_prev2", 
                                       nextButton: "#btn_next2",
                                       visibleItems: 5,
                                       infiniteScroll: true,
                                       willChangeCallback: function(obj, item) { $("#statusText").text("Will change to " + item); },
                                       changedCallback: function(obj, item) { $("#statusText").text("Changed to " + item); }
                                    });
  });



 // 2 owl-carousel
  // $('#owlcrusol2.owl-carousel').owlCarousel({
  //   loop: true, //true
  //   margin: 10,
  //   responsiveClass: true,
  //   autoplay: false,
  //   autoplayTimeout: 9000,
  //   margin: 0,
  //   nav: false, //true
  //   pagination: false,
  //   dots: true,

  //   responsive: {
  //     0: {
  //       items: 1,
  //       nav: false, //true
  //     },
  //     480: {
  //       items:2,
  //       nav:false,
  //     },
  //     // 640: {
  //     //   items: 2,
  //     //   nav: false,
  //     // },
  //     992: {
  //       items: 3,
  //       nav: false,
  //     },
  //     1000: {
  //       items: 3,
  //       nav: false,  //true
  //       loop: true, //true
  //       margin: 20
  //     }
  //   }
  // })


 $(document).ready(function () {
   //only the content inside of the element will be deleted
    $( ".owl-prev,.owl-next" ).empty();
 });

//owlcrusol
 var owl_rcp = $("#owlcrusol2");
   owl_rcp.owlCarousel({
    loop: true, //true
    margin: 10,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 9000,
    margin: 0,
    nav: false, //true
    pagination: false,
    dots: true,
   	onRefresh: function () {
   	owl_rcp.find('div.owl-item').height('');
   	},
   	onRefreshed: function () {
   	owl_rcp.find('div.owl-item').height(owl_rcp.height());
   	},
   	responsive: {
      0: {
        items: 1,
        nav: false, //true
      },
      550: {
        items:2,
        nav:false,
      },
      // 640: {
      //   items: 2,
      //   nav: false,
      // },
      992: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,  //true
        loop: true,
        margin: 20
      }
    }
   })


// 3 owl-carousel
$('#owlcrusol3.owl-carousel').owlCarousel({
  loop: true,
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


$('#owlcrusol4.owl-carousel').owlCarousel({
  loop: true,
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
    480: {
      items: 1,
      nav: false,
    },
    767: {
      items: 2,
      nav: false
    },
    1000: {
      items: 2,
      nav: false,
      loop: false,
      margin: 10,
    }
  }
})


// 4 owl-carousel3
$('#owlcrusol3.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 0,
  nav: false,
  pagination: true,
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
  var body = $("html, body");
      body.stop().animate({scrollTop:0}, 1800, 'swing', function() { 
  });

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

  $("#btn_next1,#btn_prev1").click(function(){
    $( ".wow" ).css({"visibility":"visible"}).addClass('wow_reinit');
  });

});


$( window ).scroll(function() {
  $( ".wow" ).css({"visibility":"visible"});
});

// $( "body" ).css({"display":"none"});
// $( window ).load(function() {
//   $( "body" ).css({"display":"block"});
// });


