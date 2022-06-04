function navbarTran() {
  setTimeout(function () {
    navbar = document.getElementById("navbar");
    if (window.scrollY > navbar.offsetHeight) {
      navbar.style.backgroundColor = "#c2ded10";
      navbar.style.backdropFilter = "blur(1px)";
    } else {
      navbar.style.backgroundColor = " #c2ded100";
      navbar.style.backdropFilter = "blur(0px)";
    }
    navbarTran();
  }, 600);
}
function load() {
  navbarTran();
  //toggle mobile menu
  const clickx = document.getElementById("pencet");
  clickx.addEventListener("click", function () {
    clickx.classList.toggle("Diam");
  });
}
