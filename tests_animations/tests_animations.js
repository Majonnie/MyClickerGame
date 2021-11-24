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
        //Pour le poisson (animation en 4 frames)
        if (y == 0)
        {
            fish.style.transform = "rotate(10deg)";
            y = 1;
        }

        else if (y == 1)
        {
            fish.style.transform = "rotate(-10deg)";
            y = 2;
        }

        else if (y == 2)
        {
            fish.style.transform = "rotate(-20deg)";
            y = 3;
        }

        else
        {
            fish.style.transform = "rotate(0deg)";
            y =0;
        }

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

changeFrame();