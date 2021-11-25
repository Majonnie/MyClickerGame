minous.forEach((minou) => {
    const storediv = document.querySelector(".store");
    const cardsection = document.createElement("section");
    const carddiv = document.createElement("div");
    const imgdiv = document.createElement("div");
    const img = document.createElement("img");
    const infodiv = document.createElement("div");
    const namediv = document.createElement("div");
    const fpsdiv = document.createElement("div");
    const priceqtydiv = document.createElement("div");
    const basefpsdiv = document.createElement("div");
    const totalfpsdiv = document.createElement("div");
    const pricediv = document.createElement("div");
    const qtydiv = document.createElement("div");

    storediv.className = "store flextwo";
    cardsection.className = minou.name;
    imgdiv.className = "image flexone";
    infodiv.className = "minou_info flextwo";
    namediv.className = "minou_name";
    fpsdiv.className = "minou_fps";
    priceqtydiv.className = "minou_price_qty";
    basefpsdiv.className = "base_fps flexone";
    totalfpsdiv.className = "total_fps flextwo";
    pricediv.className = "minou_price flextwo";
    qtydiv.className = "minou_quantity flexone";

    img.setAttribute("src", minou.name+"A.png");
    img.setAttribute("alt", minou.name);
    cardsection.setAttribute("onclick", 'buyMinou('+minou.id+')');

    priceqtydiv.appendChild(pricediv);
    priceqtydiv.appendChild(qtydiv);
    fpsdiv.appendChild(basefpsdiv);
    fpsdiv.appendChild(totalfpsdiv);
    infodiv.appendChild(namediv);
    infodiv.appendChild(fpsdiv);
    infodiv.appendChild(priceqtydiv);
    imgdiv.appendChild(img);
    carddiv.appendChild(imgdiv);
    carddiv.appendChild(infodiv);
    cardsection.appendChild(carddiv);
    storediv.appendChild(cardsection);
})