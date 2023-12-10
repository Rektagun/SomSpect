// var pageNo = 1;
// document.getElementById("showBoxes").addEventListener("click", function() {
//     var boxContainer = document.getElementById("boxContainer");
//     var box = document.createElement("div");
//     box.className = "box";
//     box.textContent = pageNo ++;
//     boxContainer.appendChild(box);
//   });

function goHome() {
  window.location.href = "index.html";
}

const elements = document.querySelectorAll('.your-elements');

function showOverlay() {
  document.getElementById('overlay').style.display = 'block'; //main
  
  
  document.getElementById('hideSelf').style.display = 'none'; //Add
}


function hideOverlay() {
  document.getElementById('overlay').style.display = 'none'; //main
  
  
  document.getElementById('hideSelf').style.display = 'block'; //Add
}
