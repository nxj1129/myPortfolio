function obfuscate() {
  const baffleText = baffle(document.querySelector("#baffle-this"));

  baffleText.set({
    characters: "█░▓ >▒▓▒> ▓▒▓▓▒ /▓░ ▓//█/ ▓>█▓ ▒<░ ▒▒░▒ ░>██",
    speed: 120,
  });

  baffleText.once();
  baffleText.reveal(3000);
}

document.addEventListener("DOMContentLoaded", function () {
  obfuscate();
});
