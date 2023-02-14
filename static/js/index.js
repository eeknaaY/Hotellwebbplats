var showing;
function test() {
    var navBar = document.getElementById('navBarPhone');

    if (showing) {
        navBar.style.display = 'block';
        showing = false;
    }
    else {
        navBar.style.display = 'none';
        showing = true;
    }
}

function changeBackground() {
    let color = '#5e5e5e';
    if (window.location.href == "http://127.0.0.1:5500/" || window.location.href == "http://127.0.0.1:5500/index.html") {
        document.getElementById('startBtn').style.background = color;
        document.getElementById('startBtnComputer').style.background = color;
    }

    else if (window.location.href == "http://127.0.0.1:5500/hitta.html") {
        document.getElementById('hittaBtn').style.background = color;
        document.getElementById('hittaBtnComputer').style.background = color;
    }
    else if (window.location.href == "http://127.0.0.1:5500/boka.html") {
        document.getElementById('bokaBtn').style.background = color;
        document.getElementById('bokaBtnComputer').style.background = color;
    }

    else if (window.location.href == "http://127.0.0.1:5500/kontakt.html") {
        document.getElementById('kontaktBtn').style.background = color;
        document.getElementById('kontaktBtnComputer').style.background = color;
    }
}

window.addEventListener("load", function () { changeBackground() });