//slide
function icone1 (foto){
    document.getElementById("icone1").src = foto;
}
function icone2 (foto){
  document.getElementById("icone2").src = foto;
}
var itemBanner = document.querySelector("#items")
function passLeft() {
  itemBanner.scrollBy(300, 0)
}
function passRight() {
  itemBanner.scrollBy(-300, 0)
}
setInterval(passLeft , 3000);