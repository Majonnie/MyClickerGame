//Étape 2 - Minions

var minous = [
    {id:1, name:"cathand", cost:10, fps:1, owned: 24},
    {id:2, name:"cat", cost:10, fps:0.1, owned: 0},
    {id:3, name:"fisher", cost:100, fps:1, owned: 0},
    {id:4, name:"catcher", cost:1000, fps:10, owned: 0},
    {id:5, name:"net", cost:10000, fps:100, owned: 0},
    {id:6, name:"swimmer", cost:100000, fps:1000, owned: 0},
    {id:7, name:"mermaid", cost:1000000, fps:10000, owned: 0},
    {id:8, name:"poseicat", cost:10000000, fps:100000, owned: 0},
]

//Étape 1

let fish = 0;
let fps = 0;
let clickValue = 0;

function addFish(x) {
    fish += x;
}

function displayFish() {
    document.querySelector('.fishN').innerHTML = "Fish : " + Math.floor(fish);
    document.querySelector('.fishS').innerHTML = "Fish/Second : " + fps.toFixed(1);
    document.querySelector('.fishC').innerHTML = "Fish/Click : " + clickValue;
}

function fishPerSec() {
    setInterval(addFps, 1000, fps);
}

function addFps() {
    clickFish(fps);
}

function clickFish(value) {
    //Fonction appelée quand on clique sur le poisson
    addFish(value);
    displayFish();
}

let total = 0;
function getFps() {
    total = 0;
    minous.forEach(getValues);
    fps = total;
}

function getValues(minou) {
    if (minou.id == 1) {
        total = minou.owned * minou.fps;
        clickValue = total;
        total = 0;
    } else {
        total += minou.owned * minou.fps;
    }
}



function buyMinou(id) {
    var minou = minous.find(minou => minou.id === id)
    var threshold = [25, 50, 100, 250, 1000];
    minou.owned += 1;
    fish -= minou.cost;
    if (threshold.includes(minou.owned)) {
        minou.fps *= 2;
    }
    
    if ( calculateMinouOwned() % 50 == 0) {
        minous.find(minou => minou.id === 1).fps *= 2;
    }
    minou.cost = Math.floor(minou.cost*1.15);
    cardRefresh(minou);
    refresh();
}

function checkStore() {
    minous.forEach(setStoreAttributes);
}

function setStoreAttributes(minou) {
    const card = document.querySelector("."+minou.name);
    if ( fish >= minou.cost ) {
        card.style.pointerEvents = "";
        card.style.filter = "none"
    } else {
        card.style.pointerEvents = "none";
        card.style.filter = "grayscale(100%) brightness(40%)";
    }
}

function cardRefresh(minou) {
    var minouDiv = document.querySelector("."+minou.name);
    minouDiv.querySelector(".total_fps").innerHTML = (minou.owned * minou.fps).toFixed(1);
    minouDiv.querySelector(".minou_price").innerHTML = minou.cost;
    minouDiv.querySelector(".minou_quantity").innerHTML = minou.owned;
}

function calculateMinouOwned() {
    let totalOwned = 0;
    minous.forEach((minou) => {
        totalOwned += minou.owned;
    })
    return totalOwned
}

function refresh() {
    getFps();
    displayFish();
}

refresh();
fishPerSec();
minous.forEach(cardRefresh);
setInterval(checkStore, 10)