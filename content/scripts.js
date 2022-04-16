function PrjAction1() {
    if ($(window).width() < 900) {
        const x = document.getElementById("prj1");
        x.style.width = "80%";
        document.getElementById("prj2").style.width = "30%";
        document.getElementById("prj3").style.width = "30%";
        document.getElementById("prj4").style.width = "30%";
     }
     else {
        const x = document.getElementById("prj1");
        x.style.width = "50%";
        document.getElementById("prj2").style.width = "15%";
        document.getElementById("prj3").style.width = "15%";
        document.getElementById("prj4").style.width = "15%"; 
     }
}
function PrjAction2() {
    if ($(window).width() < 900) {
        document.getElementById("prj1").style.width = "30%";
        const x = document.getElementById("prj2");
        x.style.width = "80%";
        document.getElementById("prj3").style.width = "30%";
        document.getElementById("prj4").style.width = "30%";
     }
     else {
        document.getElementById("prj1").style.width = "15%";
        const x = document.getElementById("prj2");
        x.style.width = "50%";
        document.getElementById("prj3").style.width = "15%";
        document.getElementById("prj4").style.width = "15%";
     }
}
function PrjAction3() {
    if ($(window).width() < 900) {
        document.getElementById("prj1").style.width = "30%";
        document.getElementById("prj2").style.width = "30%";
        const x = document.getElementById("prj3");
        x.style.width = "80%";
        document.getElementById("prj4").style.width = "30%";
     }
     else {
        document.getElementById("prj1").style.width = "15%";
        document.getElementById("prj2").style.width = "15%";
        const x = document.getElementById("prj3");
        x.style.width = "50%";
        document.getElementById("prj4").style.width = "15%";
     }
}
function PrjAction4() {
    if ($(window).width() < 900) {
        document.getElementById("prj1").style.width = "30%";
        document.getElementById("prj2").style.width = "30%";
        document.getElementById("prj3").style.width = "30%";
        const x = document.getElementById("prj4");
        x.style.width = "80%";
     }
     else {
        document.getElementById("prj1").style.width = "15%";
        document.getElementById("prj2").style.width = "15%";
        document.getElementById("prj3").style.width = "15%";
        const x = document.getElementById("prj4");
        x.style.width = "50%";
     }
}