var pageNo = 1;
document.getElementById("showBoxes").addEventListener("click", function() {
    var boxContainer = document.getElementById("boxContainer");
    var box = document.createElement("div");
    box.className = "box";
    box.textContent = pageNo ++;
    boxContainer.appendChild(box);
  });

  function goHome() {
    window.location.href = "index.html";
  }



  // Find the elements to apply the custom cursor
const elements = document.querySelectorAll('.your-elements');

// Add the custom cursor class to these elements
elements.forEach(element => {
    element.classList.add('custom-cursor');
});
