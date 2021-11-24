document.querySelector('.fish').addEventListener("click", function() {
    console.log("down")
    document.querySelector('.fish').classList.add("bounce");
})
document.querySelector('.fish').addEventListener("mouseup", function() {
    console.log("up")
    document.querySelector('.fish').classList.remove("bounce");
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
    const fish = document.querySelector('.fish').firstElementChild;
    const cathand = document.querySelector('.cathand').firstElementChild;

    //Changement chaque seconde des frames
    var x = 0;
    var y = 0;
    setInterval(function()
    {

        //Pour toutes les animations en 2 frames
        if (x == 0)
        {
            cathand.setAttribute("src", "../images/cathandB.png");

            x = 1;
        }
        
        else
        {
            cathand.setAttribute("src", "../images/cathandA.png");

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