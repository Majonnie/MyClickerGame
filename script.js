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
        minous.find(minou => cardRefresh(minou));
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
    minouDiv.querySelector(".minou_name").innerHTML = minou.displayname;
    minouDiv.querySelector(".base_fps").innerHTML = "Fish/s<br>"+minou.fps.toFixed(1);
    minouDiv.querySelector(".total_fps").innerHTML = "Total Fish/s<br>"+(minou.owned * minou.fps).toFixed(1);
    minouDiv.querySelector(".minou_price").innerHTML = "Price<br>"+minou.cost;
    minouDiv.querySelector(".minou_quantity").innerHTML = "Owned<br>"+minou.owned;
}

function calculateMinouOwned() {
        total = 0;
    minous.forEach((minou) => {
        total += minou.owned;
    })
    totalOwned = total;
    return totalOwned
}

function cps() {
    document.querySelector(".click_rate").innerHTML = clicksn + " clicks/s";
    clicksn = 0;
}

function refresh() {
    getFps();
    displayFish();
}

setInterval(function save() {
    localStorage["minous"] = JSON.stringify(minous);
    localStorage.setItem("fish", fish);
}, 1000);

document.querySelector('.fish').addEventListener("click", function() {clicksn++;})
setInterval(cps, 1000);

refresh();
fishPerSec();
calculateMinouOwned()
minous.forEach(cardRefresh);
setInterval(checkStore, 10)

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }