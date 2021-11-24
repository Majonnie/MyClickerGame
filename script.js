//Étape 1

let fish = 0;
let fps = 0;
let clickValue = 0;



function addFish(x) {
    fish += x;
}

function displayFish() {
    const fishN = document.querySelector('.fishN');
    fishN.innerHTML = "Fish : " + Math.floor(fish);
    const fishS = document.querySelector('.fishS');
    fishS.innerHTML = "Fish/Second : " + fps;
    const fishC = document.querySelector('.fishC');
    fishC.innerHTML = "Fish/Click : " + clickValue;
}

function fishPerSec() {
    setInterval(clickFish, 1000, fps);
}

function clickFish(clickValue) {
    //Fonction appelée quand on clique sur le poisson
    addFish(clickValue);
    displayFish();
}

//Étape 2 - Minions

var minous = [
    {id:1, name:"cathand", cost:10, clickValue:1, owned: 1},
    {id:2, name:"cat", cost:10, fps:0.1, owned: 0},
    {id:3, name:"fisher", cost:100, fps:1, owned: 0},
    {id:4, name:"catcher", cost:1000, fps:10, owned: 0},
    {id:5, name:"net", cost:10000, fps:100, owned: 0},
    {id:6, name:"swimmer", cost:100000, fps:1000, owned: 0},
    {id:7, name:"mermaid", cost:1000000, fps:10000, owned: 0},
    {id:8, name:"poseicat", cost:10000000, fps:100000, owned: 0},
]

let total = 0;
function getFps() {
    total = 0;
    minous.forEach(minou => getValues(minou));
    fps = total;
}

function getValues(minou) {
        if (minou.id == 1) {
            clickValue = minou.owned * minou.clickValue;
        } else {
            total += minou.owned * minou.fps;
        }
}

getFps();
fishPerSec();