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