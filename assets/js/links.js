document.addEventListener("click", function (e) {
  if (e.target.id == "fake") {
    window.open("https://reactsocialmedia-cbeed.firebaseapp.com/");
  } else if (e.target.id == "ski") {
    window.open("http://ski-retreat.herokuapp.com/");
  } else if (e.target.id == "air") {
    window.open("https://airbnb-clone-3f1c0.web.app/");
  }
});
