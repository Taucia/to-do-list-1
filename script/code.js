
var toDoInput = document.getElementById("todoinput");
var toDoBtn = document.getElementById("todobtn");
var item = document.getElementsByTagName("li");
var ul = document.querySelector("ul");

function createList() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(toDoInput.value));
  ul.insertBefore(li, ul.childNodes[0]);
  toDoInput.value = ""; 
li.addEventListener('click', function cross() {
  li.classList.toggle("done"); 
});

var deleteBtn = document.createElement("button");
deleteBtn.appendChild(document.createTextNode("x"));
li.appendChild(deleteBtn);

deleteBtn.addEventListener('click', function deleteItem() {
  li.classList.add("delete");
})
}
function listLength(){
	return item.length;
}
function inputLength(){
	return toDoInput.value.length;
}

function addListClicking() {
  if (inputLength()>0) {  
    createList();
  }
}

function addListKeypress(event) {
  	if (inputLength() > 0 && event.which ===13) {
		createList();
	}
}

toDoBtn.addEventListener("click", addListClicking);
toDoInput.addEventListener("keypress", addListKeypress);
