function addFish(x) {
    fish += x;
}

function displayFish() {
    document.querySelector('.fishN').innerHTML = "Fish : " + formatNumber(fish);
    document.querySelector('.fishS').innerHTML = "Fish/Second : " + formatNumber(fps);
    document.querySelector('.fishC').innerHTML = "Fish/Click : " + formatNumber(clickValue);
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
    checkMinouThreshold();
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
    minouDiv.querySelector(".minou_name").innerHTML = minou.displayname+"<br>("+minou.owned+")";
    minouDiv.querySelector(".minou_fps").innerHTML = "🐟/s<br>"+formatNumber(minou.owned * minou.fps);
    minouDiv.querySelector(".minou_price").innerHTML = "Price<br>"+formatNumber(minou.cost)+"🐟";
}

function formatNumber(n) {
    if (n >= 1000000 && n < 1000000000) {
        return (n / 1000000).toFixed(3)+"m";
    } else if (n >= 1000000000) {
        return (n / 1000000000).toFixed(3)+"M";
    } else {
        return n.toFixed(1);
    }
}

function calculateMinouOwned() {
    //Calcule le total de minous possédés
        total = 0;
    minous.forEach((minou) => {
        total += minou.owned;
    })
    totalOwned = total;
    return totalOwned
}

function checkMinouThreshold() {
    minous.forEach((minou) => {
        if (fish >= minou.threshold && minou.visible == 0) {
            document.querySelector("."+minou.name).style.visibility = 'visible';
            minou.visible = 1;
        }
    })
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
checkMinouThreshold();

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }