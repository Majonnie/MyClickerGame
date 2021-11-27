//Animations du gros poisson
document.querySelector('.fish_bounce').addEventListener("mousedown", function() {
    document.querySelector('.fish_bounce').classList.remove("bounce");
    document.querySelector('.paw').classList.remove("pawclick");
})
document.querySelector('.fish_bounce').addEventListener("mouseup", function() {
    document.querySelector('.fish_bounce').classList.add("bounce");
    document.querySelector('.paw').classList.add("pawclick");
})
document.querySelector('.fish_img').addEventListener("mouseover", function() {
    document.querySelector('.fish_img').classList.add("grow");
})
document.querySelector('.fish_img').addEventListener("mouseout", function() {
    document.querySelector('.fish_img').classList.remove("grow");
})

//Création du poisson volant bonus (1 chance sur 25 toutes les 6s)
var x = 0;
setInterval(function() {
    x = Math.floor(Math.random() * 25 + 1);
    if (x == 25) {
        const flying = document.createElement("div");
        flying.className = "flying";
        document.querySelector(".game").appendChild(flying);
        const flyingfish = document.createElement("div")
        flyingfish.className = "flyingfish";
        const cloud = document.createElement("div")
        cloud.className = "cloud";
        flying.appendChild(flyingfish);
        flying.appendChild(cloud);
        flyingfish.addEventListener("click", bonusFish);
        setTimeout(function() {
            flying.remove();
        }, 3990);
    }
}, 4000)

var x = 0;
setInterval(function()
{
    //Pour toutes les animations en 2 frames
    if (x == 0)
    {
        if(document.querySelector(".flyingfish") != null) {
            document.querySelector(".flyingfish").style.backgroundImage = 'url("images/flying_fishA.png")';
        }
        document.querySelector(".netA").style.visibility = 'visible';
        document.querySelector(".netB").style.visibility = 'hidden';
        x = 1;
    }
    else
    {
        if(document.querySelector(".flyingfish") != null) {
            document.querySelector(".flyingfish").style.backgroundImage = 'url("images/flying_fishB.png")';
        }
        document.querySelector(".netA").style.visibility = 'hidden';
        document.querySelector(".netB").style.visibility = 'visible';
        x = 0;
    }
}, 300);

var y = 0;
setInterval(function()
{
    //Pour toutes les animations en 2 frames
    if (y == 0)
    {
        document.querySelector(".catA").style.visibility = 'visible';
        document.querySelector(".catB").style.visibility = 'hidden';
        document.querySelector(".fisherA").style.visibility = 'visible';
        document.querySelector(".fisherB").style.visibility = 'hidden';
        document.querySelector(".swimmerA").style.visibility = 'visible';
        document.querySelector(".swimmerB").style.visibility = 'hidden';
        document.querySelector(".mermaidA").style.visibility = 'visible';
        document.querySelector(".mermaidB").style.visibility = 'hidden';
        document.querySelector(".catcherA").style.visibility = 'visible';
        document.querySelector(".catcherB").style.visibility = 'hidden';

        y = 1;
    }
    else
    {
        document.querySelector(".catA").style.visibility = 'hidden';
        document.querySelector(".catB").style.visibility = 'visible';
        document.querySelector(".fisherA").style.visibility = 'hidden';
        document.querySelector(".fisherB").style.visibility = 'visible';
        document.querySelector(".swimmerA").style.visibility = 'hidden';
        document.querySelector(".swimmerB").style.visibility = 'visible';
        document.querySelector(".mermaidA").style.visibility = 'hidden';
        document.querySelector(".mermaidB").style.visibility = 'visible';
        document.querySelector(".catcherA").style.visibility = 'hidden';
        document.querySelector(".catcherB").style.visibility = 'visible';

        y = 0;
    }
}, 1000);