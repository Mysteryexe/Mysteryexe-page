num = 0;
var i = 1;
var lastPrj;
var curImage = 1;
document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".bgTexture, .mouse").forEach((shift) => {
    const position = shift.getAttribute("value");
    var elems2 = document.getElementsByClassName("bgcontainer");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;
    if (elems2[0].offsetHeight * 1.5 > event.pageY) {
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    } else {
      shift.style.transform = `translateX(${0}px) translateY(${0}px)`;
    }
  });
}
function betterPerf() {
  setTimeout(function () {
    var y = document.getElementsByClassName("bgTexture");
    var elems1 = document.getElementsByClassName("bgcontainer");
    var offset = elems1[0].offsetHeight;
    if (window.scrollY > offset) {
      y[0].style.webkitAnimationPlayState = "paused";
    } else {
      y[0].style.webkitAnimationPlayState = "running";
    }
    i++;
    if (i < 10) {
      betterPerf();
    }
  }, 3000);
}
betterPerf();
function ChangeImage(image, status) {
  const projectImg = document.getElementsByClassName("projectimg");
  var index = 0;
  const images = ["render", "gingernium", "soon1", "soon2"];
  const render = [
    "content/images/RenderFinalWithMarker.webp",
    "content/images/endmsg.webp",
  ];
  const gingernium = [
    "content/images/Gingernium01.webp",
    "content/images/Gingernium02.webp",
    "content/images/Gingernium03.webp",
    "content/images/Gingernium04.webp",
    "content/images/Gingernium05.webp",
    "content/images/Gingernium06.webp",
    "content/images/endmsg.webp",
  ];
  const soon1 = ["content/svg/soon.svg"];
  const soon2 = ["content/svg/soon.svg"];
  const links = [render, gingernium, soon1, soon2];
  for (var i = 0; i < images.length; i += 1) {
    if (images[i] == image) {
      index = i;
    }
  }
  const curlinks = links[index];
  if (curImage > curlinks.length) {
    curImage = 0;
  }
  const text = document.getElementsByTagName("p3")[index];
  projectImg[index].src = String(links[index][curImage]);
  if (status == "next" && curImage < curlinks.length - 1) {
    curImage += 1;
    projectImg[index].src = String(links[index][curImage]);
  } else if (status == "back" && curImage > 0) {
    curImage -= 1;
    projectImg[index].src = String(links[index][curImage]);
  }
  if (links[index][curImage] == "content/images/endmsg.webp") {
    text.style.opacity = 0;
  } else {
    text.style.opacity = 1;
  }
  lastPrj = index;
}
function openEffect(img) {
  const images = ["render", "gingernium", "soon1", "soon2"];
  const icon = document.getElementsByClassName(img);
  icon[0].style.transform = "translatey(-70vh) skewY(22.5deg)";
  for (var i = 0; i < images.length; i += 1) {
    if (images[i] == img) {
    } else {
      const smallIcon = document.querySelectorAll("." + images[i]);
      smallIcon[0].style.transform = "translatey(0vh)";
    }
  }
}
function PrjAction(x) {
  const images = ["render", "gingernium", "soon1", "soon2"];
  const projects = document.getElementsByClassName("projectdiv");
  const decoration = document.querySelectorAll("#svgprjholder");
  console.log(decoration);
  if ($(window).width() < 900) {
    var small = "30%";
    var big = "90%";
    Order = "True";
  } else {
    var small = "15%";
    var big = "45%";
    Order = "false";
  }
  openEffect(x);
  for (var i = 0; i < images.length; i += 1) {
    if (images[i] == x) {
      if (projects[i].style.width != big) {
        ChangeImage(images[i], "back");
      }
      if (Order == "True") {
        projects[i].style.order = "1";
      }
      projects[i].style.width = big;
      var imageContainer = projects[i].querySelectorAll("inproject");
      imageContainer[0].style.transform = "translatey(0vh)";
      decoration[i].querySelectorAll("#svg4")[0].style.transform =
        "translatey(100%)";
      decoration[i].querySelectorAll("#svg4Top")[0].style.transform =
        "translatey(-100%)";
    } else {
      projects[i].style.width = small;
      if (Order == "True") {
        projects[i].style.order = "2";
      }
      decoration[i].querySelectorAll("#svg4")[0].style.transform =
        "translatey(0%)";
      decoration[i].querySelectorAll("#svg4Top")[0].style.transform =
        "translatey(0%)";
      var imageContainer = projects[i].querySelectorAll("inproject");
      imageContainer[0].style.transform = "translatey(70vh) skewY(22.5deg)";
    }
  }
}
