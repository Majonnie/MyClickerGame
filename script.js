//Étape 1

let fish = 0;

function addFish(x) {
    fish += x;
}

function displayFish() {
    const tag = document.querySelector('.fishN');
    tag.innerHTML = "Fish : "+fish;
}

function clickFish() {
    //Fonction appelée quand on clique sur le poisson
    addFish(1);
    displayFish();
}