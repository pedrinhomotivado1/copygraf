/*----------------------------------- codigo produtos ----------------------*/
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Adicione a classe "show" (display:block) aos elementos filtrados e remova a classe "show" dos elementos que não estão selecionados
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
////////////////////////////////////// inicio do modal 0  ////////////////////////////////////////////////////
// Get the modal
var modal0 = document.getElementById("myModal0");
// Get the button that opens the modal
var btn0 = document.getElementById("myBtn0");
// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("closemodal")[0];
// When the user clicks on the button, open the modal
btn0.onclick = function() {
  modal0.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span0.onclick = function() {
  modal0.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal0) {
    modal0.style.display = "none";
  }
}
////////////////////////////////////// inicio do modal 1  ////////////////////////////////////////////////////
// Get the modal
var modal1 = document.getElementById("myModal1");
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closemodal")[1];
// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal0) {
    modal1.style.display = "none";
  }
}
