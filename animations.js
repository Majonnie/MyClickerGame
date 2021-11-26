document.querySelector('.fish_bounce').addEventListener("mousedown", function() {
    document.querySelector('.fish_bounce').classList.remove("bounce");
})
document.querySelector('.fish_bounce').addEventListener("mouseup", function() {
    document.querySelector('.fish_bounce').classList.add("bounce");
})
document.querySelector('.fish_img').addEventListener("mouseover", function() {
    document.querySelector('.fish_img').classList.add("grow");
})
document.querySelector('.fish_img').addEventListener("mouseout", function() {
    document.querySelector('.fish_img').classList.remove("grow");
})

var x = 0;
setInterval(function() {
    x = Math.floor(Math.random() * 25 + 1);
    console.log(x);
    if (x == 25) {
        console.log('a');
        const flyf = document.createElement("div");
        flyf.className = "flying";
        document.querySelector(".game").appendChild(flyf);
        flyf.addEventListener("click", bonusFish);
        setTimeout(function() {
            flyf.remove();
        }, 3990);
    }
}, 4000)

var x = 0;
setInterval(function()
{
    //Pour toutes les animations en 2 frames
    if (x == 0)
    {
        if(document.querySelector(".flying") != null) {
            document.querySelector(".flying").style.backgroundImage = 'url("images/flying_fishA.png")';
        }
        document.querySelector(".netA").style.visibility = 'visible';
        document.querySelector(".netB").style.visibility = 'hidden';
        x = 1;
    }
    else
    {
        if(document.querySelector(".flying") != null) {
            document.querySelector(".flying").style.backgroundImage = 'url("images/flying_fishB.png")';
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
        document.querySelector(".catanimA").style.visibility = 'visible';
        document.querySelector(".catanimB").style.visibility = 'hidden';
        document.querySelector(".fisherA").style.visibility = 'visible';
        document.querySelector(".fisherB").style.visibility = 'hidden';
        y = 1;
    }
    else
    {
        document.querySelector(".catanimA").style.visibility = 'hidden';
        document.querySelector(".catanimB").style.visibility = 'visible';
        document.querySelector(".fisherA").style.visibility = 'hidden';
        document.querySelector(".fisherB").style.visibility = 'visible';
        y = 0;
    }
}, 1000);