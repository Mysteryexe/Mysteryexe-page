if (!detectMob()) {
  document.addEventListener("mousemove", parallax);
  function parallax(event) {
    this.querySelectorAll(".mouse").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;
      shift.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.2)`;
    });
  }
}
function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
function navbarTran() {
  setTimeout(function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > navbar.offsetHeight) {
      if (detectMob()) {
        navbar.style.backgroundColor = "#c2ded1";
      } else {
        navbar.style.backgroundColor = "#c2ded10";
        navbar.style.backdropFilter = "blur(0.15vh)";
        navbar.style.webkit;
      }
      navbar.style.boxShadow =
        "0px 0px 5px 0px rgba(0, 0, 0, 0.1) , 0px 0px 1px 0px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.backgroundColor = " #c2ded100";
      navbar.style.backdropFilter = "blur(0px)";
      navbar.style.boxShadow = "none";
    }
    navbarTran();
  }, 600);
}
function smoothScroll() {
  navbar = document.getElementById("navbar");
  const navheight = navbar.offsetHeight;
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
