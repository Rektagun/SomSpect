document.getElementById("showBoxes").addEventListener("click", function() {
  var userInput = document.getElementById("userInput").value;
  var boxContainer = document.getElementById("boxContainer");
  var box = document.createElement("div");
  box.className = "box";
  box.textContent = userInput;
  boxContainer.appendChild(box);

  document.getElementById("userInput").value = "";

});

function goHome() {
  window.location.href = "index.html";
}

const elements = document.querySelectorAll('.your-elements');

function showOverlay() {
  document.getElementById('overlay').style.display = 'block'; //main
  
  
  document.getElementById('hideSelf').style.display = 'none'; //Add
}


function hideOverlay() { //POST BUTTON DOES THE POSTING STUFF UK
  document.getElementById('overlay').style.display = 'none'; //main
  
  
  document.getElementById('hideSelf').style.display = 'block'; //Add
}


document.getElementById("userInput").addEventListener("input", function() {
  this.style.height = (this.scrollHeight);
})