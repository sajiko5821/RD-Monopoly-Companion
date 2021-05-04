// Variables
var StartAmount = 200;
var SecondBeerCount = 5;

var Kontostand = StartAmount;


// INITS
var actualWindow = document.getElementById("home");
startDisplay();

var div = document.getElementById("all_streets_list");
var items = div.getElementsByTagName("img");
for (var i = 0; i < items.length; i++) {
    items[i].setAttribute("onClick", "showCard(event)")
}


// FUNCTIONS
function changeWindow(window) {
    actualWindow.style.display = "none";
    actualWindow = document.getElementById(window);
    actualWindow.style.display = "flex";
}

function startDisplay() {
    Kontostand = StartAmount;
    document.getElementById("count").innerHTML = Kontostand;
}

function plus(){
    Kontostand++;
    document.getElementById("count").innerHTML = Kontostand;
}

function minus(){
    Kontostand--;
    document.getElementById("count").innerHTML = Kontostand;
}

function plusx(){
    Kontostand = Kontostand + SecondBeerCount;
    document.getElementById("count").innerHTML = Kontostand;
}

function minusx(){
    Kontostand = Kontostand - SecondBeerCount;
    document.getElementById("count").innerHTML = Kontostand;
}

function showCard(event) {
    var src = event.target.src;
    var img = document.getElementById("bigCard");
    img.setAttribute("src", src)
    changeWindow("showCard");
}

