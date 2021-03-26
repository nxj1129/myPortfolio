$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $("nav").addClass("scroll");
    } else {
      $("nav").removeClass("scroll");
    }
  });