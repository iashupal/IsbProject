
  
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



 // 1 owl-carousel
  $('#owlcrusol1.owl-carousel').owlCarousel({
    loop: true, //true
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 0,
    nav: true, //true
    pagination: true,
    dots: false,

    responsive: {
      0: {
        items: 1,
        nav: true, //true
      },
      // 600: {
      //   items: 1,
      //   nav: true,
      // },
      767: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 1,
        nav: true,  //true
        loop: true, //true
        margin: 20,
      }
    }
  })




 $(document).ready(function () {
   //only the content inside of the element will be deleted
    $( ".owl-prev,.owl-next" ).empty();
    $( ".wow" ).css({"visibility":"visible"});
    // console.log("jjj");
 });

// css({"propertyname":"value","propertyname":"value"});

 // 2 owl-carousel
  $('#owlcrusol2.owl-carousel').owlCarousel({
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



   // 3 owl-carousel programme content
  $('#owlcrusol3.owl-carousel').owlCarousel({
    loop: true, //true
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 0,
    nav: false, //true
    pagination: false,
    dots: true,
    responsiveRefreshRate : 10,
    autoplayHoverPause:true,
    lazyContent:true,

    responsive: {
      0: {
        items: 1,
        nav: false, //true
      },
      // 600: {
      //   items: 3,
      //   nav: true,
      // },
      767: {
        items: 1,
        nav: false,
        dots: true,
      },
      1000: {
        items: 1,
        nav: false,  //true
        loop: false, //true
        margin: 0,
        autoplay: true,
        dots: false,
      }
    }
  })


  $(document).ready(function(){
      var owl = $('.owl-carousel');
      $('.owl-carousel').on(' mouseleave',function(e){
         // alert("mouseleave");
         owl.trigger('play.owl.autoplay',[3000])
      });
      $('.owl-carousel').on('mouseover',function(e){
          // alert("mouseover");
          owl.trigger('stop.owl.autoplay')
      });
  });


  $(document).ready(function(){

    var maxHeight = 0;
    $('ul.ContentBox li').each(function() {
    maxHeight = Math.max(maxHeight, $(this).height());
    });
    $(' ul.ContentBox li').css({height:maxHeight + 'px'});

    // var maxWidth = 0;
    // $('ul.ContentBox li').each(function() {
    // maxWidth = Math.max(maxWidth, $(this).width());
    // });
    // $(' ul.ContentBox li').css({width:maxWidth + 'px'});

  });
  
 // $(window).resize(function(){

 //    var maxHeight = 0;
 //    $('ul.ContentBox li').each(function() {
 //    maxHeight = Math.max(maxHeight, $(this).height());
 //    });
 //    $(' ul.ContentBox li').css({height:maxHeight + 'px'});

 //    var maxWidth = 0;
 //    $('ul.ContentBox li').each(function() {
 //    maxWidth = Math.max(maxWidth, $(this).width());
 //    });
 //    $(' ul.ContentBox li').css({width:maxWidth + 'px'});

 //  });



 $(window).resize(function(e) {
    if ($(window).width() <= 768) {
        // mobile view section#demosOwl3


    }

    else {
          // desktop view
        var maxHeight = 0;
        $('ul.ContentBox li').each(function() {
          maxHeight = Math.max(maxHeight, $(this).height());
        });
        $(' ul.ContentBox li').css({height:maxHeight + 'px'});

        // var maxWidth = 0;
        // $('ul.ContentBox li').each(function() {
        // maxWidth = Math.max(maxWidth, $(this).width());
        // });
        // $(' ul.ContentBox li').css({width:maxWidth + 'px'});
    }
});


 $(document).ready(function(){

// wow js start
  new WOW().init();
// wow js end

$("section.Section5 .nav-tabs > li > a").click(function(){
  $( ".wow" ).css({"visibility":"visible"}).addClass('wow_reinit');
  // alert("sdsf");
});

});

// $( window ).scroll(function() {
//   new WOW().init();
// });



// <script> 
//   var divWidth = $('.main').width(); 

//   $(window).resize(function(){
//       $('.main').height( divWidth );
//   });

//    </script>  -->

//   <!-- <script> 
//     $(window).resize(function(){

//         var highestBox = 0;
//             $('ul.ContentBox li').each(function(){  
//                     if($(this).height() > highestBox){  
//                     highestBox = $(this).height();  
//             }
//         });    
//         $('ul.ContentBox li ').height(highestBox);

//     });
//  </script>


