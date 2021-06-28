$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".zoom").css({
        backgroundSize: (100 + scroll / 20) + "%",
        top: -(scroll / 10) + "%",

    });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".zoom2").css({
        backgroundSize: (50 + scroll / 20) + "%",
        top: -(scroll / 10) + "%",

    });
});

$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 300) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});