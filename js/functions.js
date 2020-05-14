function openNavigation () {
    document.getElementById("navMenu").style.marginRight = "0px";
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("overlay").style.opacity = "0.7";
}

function closeNavigation () {
    document.getElementById("navMenu").style.marginRight = "-440px";
    document.getElementById("overlay").style.opacity = "0";
    setTimeout(() => { document.getElementById("overlay").style.visibility = "hidden"; }, 500);
}

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("navButton").style.backgroundColor = "#3a3f45";
    } else {
        document.getElementById("navButton").style.backgroundColor = "transparent";
    }
}