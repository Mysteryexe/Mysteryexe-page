num = 0;
var i = 1;
var lastPrj;
document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".bgTexture, .mouse").forEach((shift) => {
    const position = shift.getAttribute("value");
    var elems2 = document.getElementsByClassName("bgcontainer");
    console.log(event.pageY, elems2[0].offsetHeight);
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
    var elems2 = document.getElementsByTagName("inproject");
    for (var i = 0; i < elems2.length; i += 1) {
      if (elems2[i].style.opacity <= 0.05) {
        elems2[i].style.visibility = "hidden";
      }
    }
    var offset = y[0].offsetHeight;
    if (window.scrollY > offset) {
      for (var i = 0; i < x.length; i += 1) {
        y[0].style.webkitAnimationPlayState = "paused";
      }
    } else {
      for (var i = 0; i < x.length; i += 1) {
        y[0].style.webkitAnimationPlayState = "running";
      }
    }
    i++;
    if (i < 10) {
      betterPerf();
    }
  }, 3000);
}
betterPerf();
function resizesvg(y) {
  var elems = y.getElementsByTagName("inproject");
  var elems2 = document.getElementsByTagName("inproject");
  var elems3 = y.getElementsByTagName("h3");
  var elems4 = document.getElementsByTagName("h3");
  for (var i = 0; i < elems2.length; i += 1) {
    elems2[i].style.opacity = "0";
  }
  for (var i = 0; i < elems4.length; i += 1) {
    elems4[i].style.opacity = "1";
  }
  for (var i = 0; i < elems.length; i += 1) {
    elems[i].style.visibility = "visible";
    elems[i].style.opacity = "1";
  }
  for (var i = 0; i < elems3.length; i += 1) {
    elems3[i].style.opacity = "0";
  }
}
function ChangeImage(x, status) {
  if (x == "prj1") {
    var a = [
      "content/images/RenderFinalWithMarker.webp",
      "content/images/endmsg.webp",
    ];
  }
  if (x == "prj2") {
    var a = [
      "content/images/Gingernium01.webp",
      "content/images/Gingernium02.webp",
      "content/images/Gingernium03.webp",
      "content/images/Gingernium04.webp",
      "content/images/Gingernium05.webp",
      "content/images/Gingernium06.webp",
      "content/images/endmsg.webp",
    ];
  }
  if (x == "prj3") {
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  if (x == "prj4") {
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  if (lastPrj != x) {
    num = 0;
  }
  if ((num > -1, num < a.length)) {
    if (status == "back") {
      num = num - 1;
      if (num == -1) {
        num = num + 1;
      }
    }
    if (status == "next") {
      num = num + 1;
      if (num == a.length) {
        num = num - 1;
      }
    }
  }
  const y = document.getElementById(x);
  const z = y.getElementsByTagName("inproject");
  const t = z[0].getElementsByClassName("projectimg");
  const text = z[0].getElementsByTagName("p3");
  if (a[num] == "content/images/endmsg.webp") {
    text[0].style.visibility = "hidden";
    text[0].style.opacity = 0;
  } else {
    text[0].style.visibility = "visible";
    text[0].style.opacity = 1;
  }
  t[0].src = a[num];
  lastPrj = x;
}
function PrjAction1() {
  if ($(window).width() < 900) {
    const x = document.getElementById("prj1");
    x.style.width = "90%";
    document.getElementById("prj2").style.width = "30%";
    document.getElementById("prj3").style.width = "30%";
    document.getElementById("prj4").style.width = "30%";
    resizesvg(x);
  } else {
    const x = document.getElementById("prj1");
    x.style.width = "50%";
    document.getElementById("prj2").style.width = "15%";
    document.getElementById("prj3").style.width = "15%";
    document.getElementById("prj4").style.width = "15%";
    resizesvg(x);
  }
}
function PrjAction2() {
  if ($(window).width() < 900) {
    document.getElementById("prj1").style.width = "30%";
    const x = document.getElementById("prj2");
    x.style.width = "90%";
    document.getElementById("prj3").style.width = "30%";
    document.getElementById("prj4").style.width = "30%";
    resizesvg(x);
  } else {
    document.getElementById("prj1").style.width = "15%";
    const x = document.getElementById("prj2");
    x.style.width = "50%";
    document.getElementById("prj3").style.width = "15%";
    document.getElementById("prj4").style.width = "15%";
    resizesvg(x);
  }
}
function PrjAction3() {
  if ($(window).width() < 900) {
    document.getElementById("prj1").style.width = "30%";
    document.getElementById("prj2").style.width = "30%";
    const x = document.getElementById("prj3");
    x.style.width = "90%";
    document.getElementById("prj4").style.width = "30%";
    resizesvg(x);
  } else {
    document.getElementById("prj1").style.width = "15%";
    document.getElementById("prj2").style.width = "15%";
    const x = document.getElementById("prj3");
    x.style.width = "50%";
    document.getElementById("prj4").style.width = "15%";
    resizesvg(x);
  }
}
function PrjAction4() {
  if ($(window).width() < 900) {
    document.getElementById("prj1").style.width = "30%";
    document.getElementById("prj2").style.width = "30%";
    document.getElementById("prj3").style.width = "30%";
    const x = document.getElementById("prj4");
    x.style.width = "90%";
    resizesvg(x);
  } else {
    document.getElementById("prj1").style.width = "15%";
    document.getElementById("prj2").style.width = "15%";
    document.getElementById("prj3").style.width = "15%";
    const x = document.getElementById("prj4");
    x.style.width = "50%";
    resizesvg(x);
  }
}
