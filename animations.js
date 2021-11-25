document.querySelector('.fish').addEventListener("mousedown", function() {
    document.querySelector('.fish').classList.remove("bounce");
})
document.querySelector('.fish').addEventListener("mouseup", function() {
    document.querySelector('.fish').classList.add("bounce");
})
document.querySelector('.fish_img').addEventListener("mouseover", function() {
    document.querySelector('.fish_img').classList.add("grow");
})
document.querySelector('.fish_img').addEventListener("mouseout", function() {
    document.querySelector('.fish_img').classList.remove("grow");
})