document.querySelector('.fish').addEventListener("mousedown", function() {
    console.log("down")
    document.querySelector('.fish').classList.remove("bounce");
    /* const bounceTimeout = setTimeout(() => {
        clearTimeout(bounceTimeout);
        document.querySelector('.fish').classList.remove("bounce");
    }, 200)*/
})
document.querySelector('.fish').addEventListener("mouseup", function() {
    console.log("down")
    document.querySelector('.fish').classList.add("bounce");
})
document.querySelector('.fish_img').addEventListener("mouseover", function() {
    console.log("hover")
    document.querySelector('.fish_img').classList.add("grow");
})
document.querySelector('.fish_img').addEventListener("mouseout", function() {
    console.log("nothover")
    document.querySelector('.fish_img').classList.remove("grow");
})


function changeFrame()
//Change la frame de l'animation toutes les secondes
{
    //Récupération de toutes les images à modifier
    const cathand = document.querySelector('.cathand').firstElementChild;
    const cat = document.querySelector('.cat').firstElementChild;
    const fisher = document.querySelector('.fisher').firstElementChild;
    const net = document.querySelector('.net').firstElementChild;
    const flying_fish = document.querySelector('.flying_fish').firstElementChild;

    //Changement chaque seconde des frames
    var x = 0;
    setInterval(function()
    {

        //Pour toutes les animations en 2 frames
        if (x == 0)
        {
            cathand.setAttribute("src", "../images/cathandB.png");
            cat.setAttribute("src", "../images/catB.png");
            fisher.setAttribute("src", "../images/fisherB.png");
            net.setAttribute("src", "../images/netB.png");
            flying_fish.setAttribute("src", "../images/flying_fishA.png");

            x = 1;
        }
        
        else
        {
            cathand.setAttribute("src", "../images/cathandA.png");
            cat.setAttribute("src", "../images/catA.png");
            fisher.setAttribute("src", "../images/fisherA.png");
            net.setAttribute("src", "../images/netA.png");
            flying_fish.setAttribute("src", "../images/flying_fishB.png");

            x = 0;
        }
        
    }, 1000)
}

function growFish()
{
    const fish = document.querySelector('.fish');

    fish.firstElementChild.style.transform = "scale(1.2, 1.2)";
    //On remet le poisson à sa taille de départ au bout de 375ms
    setTimeout(() => {  fish.firstElementChild.style.transform = "scale(1, 1)"; }, 375);
      
}

changeFrame();