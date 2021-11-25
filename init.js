minous.forEach((minou) => {
    const storediv = document.querySelector(".store");
    const carddiv = document.createElement("div");
    const namediv = document.createElement("div");
    const imgdiv = document.createElement("div");
    const pricediv = document.createElement("div");
    const fpsdiv = document.createElement("div");

    storediv.className = "store flextwo";
    carddiv.className = "card "+minou.name;
    namediv.className = "minou_name flexone";
    imgdiv.className = "picture flexone";
    pricediv.className = "minou_price flexone";
    fpsdiv.className = "minou_fps flexone";

    carddiv.setAttribute("onclick", "buyMinou("+minou.id+")")
    imgdiv.style.backgroundImage = 'url("images/'+minou.name+'A.png")';

    carddiv.appendChild(namediv);
    carddiv.appendChild(imgdiv);
    carddiv.appendChild(pricediv);
    carddiv.appendChild(fpsdiv);
    storediv.appendChild(carddiv);

    if (minou.visible == 0) {
        carddiv.style.visibility = 'hidden';
    }
})