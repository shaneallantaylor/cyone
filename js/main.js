$( document ).ready(function() {
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

      if ($(window).width() > 1033 ) {
      if (scroll > 60) {
        $('header').addClass('on');
      }
      else if (scroll <=0) {
        $('header').removeClass('on');
      }
    }
  });




});