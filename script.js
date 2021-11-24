//Étape 1

let fish = 0;
let fps = 1;
let clickValue = 1;

function addFish(x) {
    fish += x;
}

function displayFish() {
    const fishN = document.querySelector('.fishN');
    fishN.innerHTML = "Fish : "+fish;
    const fishS = document.querySelector('.fishS');
    fishS.innerHTML = "Fish/Second : "+fps;
}

function fishPerSec() {
    setInterval(function() {
        addFish(fps);
        displayFish();
    }, 1000);
}

function clickFish(clickValue) {
    //Fonction appelée quand on clique sur le poisson
    addFish(clickValue);
    displayFish();
}

fishPerSec();