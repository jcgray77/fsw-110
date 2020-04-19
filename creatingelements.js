var newLi = document.createElement("li")

newLi.textContent = "Life gets better day by day"

var myList = document.getElementById("my-list")

myList.prepend(newLi)

var newP = document.createElement("p")

newP.textContent = "All of this was created with Javascript"


document.body.append(newP)