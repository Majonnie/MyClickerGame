//Étape 1

let fish = 0;
let fps = 0;
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
    setInterval(clickFish(fps), 1000);
}

function clickFish(clickValue) {
    //Fonction appelée quand on clique sur le poisson
    addFish(clickValue);
    displayFish();
}

fishPerSec();

//Étape 2 - Minions

var minous = [
    {id:1, name:"cat", cost:10, fps:0.1, owned: 0},
    {id:2, name:"fisher", cost:100, fps:1, owned: 0},
    {id:3, name:"boat", cost:1000, fps:10, owned: 0},
    {id:4, name:"net", cost:10000, fps:100, owned: 0},
    {id:5, name:"swimmer", cost:100000, fps:1000, owned: 0},
    {id:6, name:"mermaid", cost:1000000, fps:10000, owned: 0},
    {id:7, name:"poseicat", cost:10000000, fps:100000, owned: 0},
]