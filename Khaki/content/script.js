function navbarTran() {
  setTimeout(function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > navbar.offsetHeight) {
      navbar.style.backgroundColor = "#c2ded10";
      navbar.style.backdropFilter = "blur(0.15vh)";
    } else {
      navbar.style.backgroundColor = " #c2ded100";
      navbar.style.backdropFilter = "blur(0px)";
    }
    navbarTran();
  }, 600);
}
function smoothScroll() {
  navbar = document.getElementById("navbar");
  const navheight = navbar.offsetHeight;
  console.log(navheight);
  document.documentElement.style.setProperty(
    "--scroll-padding",
    navheight - 1 + "px"
  );
}
function load() {
  navbarTran();
  smoothScroll();
  //toggle mobile menu
  const clickx = document.getElementById("pencet");
  const navbar = document.getElementsByTagName("nav")[0];
  console.log(navbar);
  clickx.addEventListener("click", function () {
    clickx.classList.toggle("Diam");
    if (navbar.value == "1") {
      navbar.style.top = "-65vh";
      navbar.value = "0";
    } else {
      navbar.style.top = "0vh";
      navbar.value = "1";
    }
  });
}
