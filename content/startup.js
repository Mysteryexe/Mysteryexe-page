//! by Mystery.exe#5099

//! this script runs when html.body loads
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function loadAnim() {
  const svg1 = document.getElementById("svg1holder");
  svg1.style.transform = "translateX(0%)";
  const svg2 = document.getElementById("svg2holder");
  svg2.style.transform = "translateX(0%)";
}
function RandomBG() {
  setTimeout(function () {
    for (var i = 0; i < projects.length; i += 1) {
      projects[i].style.backgroundPosition =
        String(getRandomInt(500)) +
        "px" +
        " " +
        (String(getRandomInt(500)) + "px");
    }
  }, 5);
}
function parrotsvg() {
  const parrot = document.querySelectorAll(".parrot");
  parrot[0].src = "content/svg/bg4(" + String(getRandomInt(4)) + ").svg";
}
