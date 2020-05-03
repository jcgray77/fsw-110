var square = document.getElementById("square")

document.getElementById("square").addEventListener("mouseover", mouseOver);
document.getElementById("square").addEventListener("mouseout", mouseOut);
document.getElementById("square").addEventListener("mousedown", mouseDown);
document.getElementById("square").addEventListener("dblclick", ondblclick);

function mouseOver() {
  document.getElementById("square").style.color = "blue";
}
function mouseOut() {
  document.getElementById("square").style.color = "yellow";
}
function mouseDown() {
  document.getElementById("square").style.color = "red";
}
function ondblclick() {
  document.getElementById("square").style.color = "green";
}
window.addEventListener("square", ()=> {
  hello.style.backgroundColor =  "orange"})