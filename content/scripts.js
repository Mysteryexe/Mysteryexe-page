num = 0;
var i = 1;
var lastPrj;
var curImage = 1;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const projects = document.getElementsByClassName("projectdiv");
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
RandomBG();
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
if (!detectMob()) {
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
    "content/images/RenderNo2.webp",
    "content/images/RenderNo3.webp",
    "content/svg/endmsg.svg",
  ];
  const gingernium = [
    "content/images/Gingernium01.webp",
    "content/images/Gingernium02.webp",
    "content/images/Gingernium03.webp",
    "content/images/Gingernium04.webp",
    "content/images/Gingernium05.webp",
    "content/images/Gingernium06.webp",
    "content/svg/endmsg.svg",
  ];
  const soon1 = ["content/svg/soon.svg"];
  const soon2 = ["content/svg/soon.svg"];
  const links = [render, gingernium, soon1, soon2];
  for (var i = 0; i < images.length; i += 1) {
    if (images[i] == image) {
      index = i;
    }
  }
  if (lastPrj != index) {
    curImage = 0;
    projectImg[index].src = String(links[index][curImage]);
  }
  const curlinks = links[index];
  if (curImage > curlinks.length) {
    curImage = 0;
  }
  const text = document.getElementsByTagName("p3")[index];
  if (status == "next" && curImage < curlinks.length - 1) {
    projectImg[index].src = "content/svg/loading.svg";
    setTimeout(function () {
      projectImg[index].src = String(links[index][curImage]);
    }, 150);
    curImage += 1;
    setTimeout(function () {
      projectImg[index].src = String(links[index][curImage]);
    }, 150);
  } else if (status == "back" && curImage > 0) {
    curImage -= 1;
    projectImg[index].src = "content/svg/loading.svg";
    setTimeout(function () {
      projectImg[index].src = String(links[index][curImage]);
    }, 150);
  }
  if (index == 0 && curImage >= 1) {
    text.innerHTML =
      "Renders for 'Sarvgard' with V-Ray<br><a target='_blank' href=https://www.instagram.com/sanaat_e_sakhtan.office>Click here for more info!</a>";
  } else if (index == 0) {
    text.innerHTML = "Vintage Room rendered with V-Ray";
  }
  if (links[index][curImage] == "content/svg/endmsg.svg") {
    text.style.opacity = 0;
  } else {
    text.style.opacity = 1;
  }
  const previous = document.querySelectorAll("#previous");
  const next = document.querySelectorAll("#next");
  if (curImage == 0) {
    for (var i = 0; i < previous.length; i += 1) {
      if (i == index) {
        previous[i].style.visibility = "hidden";
        next[i].style.visibility = "visible";
      } else {
        previous[i].style.visibility = "visible";
        next[i].style.visibility = "visible";
      }
    }
  } else if (curImage == links[index].length - 1) {
    for (var i = 0; i < next.length; i += 1) {
      if (i == index) {
        next[i].style.visibility = "hidden";
        previous[i].style.visibility = "visible";
      } else {
        next[i].style.visibility = "visible";
        previous[i].style.visibility = "visible";
      }
    }
  } else {
    for (var i = 0; i < next.length; i += 1) {
      next[i].style.visibility = "visible";
      previous[i].style.visibility = "visible";
    }
  }
  lastPrj = index;
}
function nextPerv(status1, status2, i) {}
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
  const decoration = document.querySelectorAll("#svgprjholder");
  if ($(window).width() < 900) {
    var small = "25%";
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
