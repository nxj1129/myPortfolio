function obfuscate(){
    let aboutTitle = baffle(".about-title");
    let skillsTitle = baffle(".skills-title");
    let workTitle = baffle(".work-title");
    let contactTitle = baffle(".contact-title");

    aboutTitle.set({
      characters: "█░▓ >▒▓▒> ▓▒▓▓▒ /▓░ ▓//█/ ▓>█▓ ▒<░ ▒▒░▒ ░>██",
      speed: 120,
    });

    skillsTitle.set({
      characters: "█░▓ >▒▓▒> ▓▒▓▓▒ /▓░ ▓//█/ ▓>█▓ ▒<░ ▒▒░▒ ░>██",
      speed: 120,
    });

    workTitle.set({
      characters: "█░▓ >▒▓▒> ▓▒▓▓▒ /▓░ ▓//█/ ▓>█▓ ▒<░ ▒▒░▒ ░>██",
      speed: 120,
    });

    contactTitle.set({
      characters: "█░▓ >▒▓▒> ▓▒▓▓▒ /▓░ ▓//█/ ▓>█▓ ▒<░ ▒▒░▒ ░>██",
      speed: 120,
    });

    aboutTitle.once();
    aboutTitle.reveal(3000);

    skillsTitle.once();
    skillsTitle.reveal(3000);

    workTitle.once();
    workTitle.reveal(3000);

    contactTitle.once();
    contactTitle.reveal(3000);
}

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).one('', function() {
  $("#about,#skills,#work,#contact").each(function() {
    if ($(this).isInViewport()) {
      obfuscate();
    } else {  }  
  });
});
