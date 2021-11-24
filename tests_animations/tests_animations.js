function changeFrame()
//Change la frame de l'animation toutes les secondes
{
    //Récupération de toutes les images à modifier
    const fish = document.querySelector('.fish').firstElementChild;
    const cathand = document.querySelector('.cathand').firstElementChild;

    //Changement chaque seconde des frames
    var x = 0;
    setInterval(function()
    {
        
        if (x == 0)
        {
            fish.style.rotate
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

changeFrame();