var Header = [
    "Creating a list",
       
]


var HeaderList = document.getElementById("Header")

for (var i = 0; i <= 7; i++) {
    HeaderList.innerHTML += "<li>Creating a list</li>"
}


var names = [
    "steve",
    "larry", 
    "joe", 
    "shirley", 
    "steph",
    "nate",
    "rick",
    "emily",
    
]

var namesList = document.getElementById("names")

for (var i = 0; i < names.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = names[i]
    namesList.append(newName)
}
function Function() {
    document.getElementById("Header").style.color = "red";
  }
function myFunction() {
    document.getElementById("names").style.fontSize ="50px";
}