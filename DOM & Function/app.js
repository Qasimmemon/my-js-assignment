// var showColorPickerBtn = document.getElementById("showColorPickerBtn");
// var colorPickerContainer = document.getElementById("colorPickerContainer");
// var redInput = document.getElementById("redInput");
// var greenInput = document.getElementById("greenInput");
// var blueInput = document.getElementById("blueInput");
// var coloredBox = document.getElementById("coloredBox");

// // Add click event listener to the button
// showColorPickerBtn.addEventListener("click", function() {
//     // Toggle the display of the color picker container
//     if (colorPickerContainer.style.display === "none") {
//         colorPickerContainer.style.display = "block";
//     } else {
//         colorPickerContainer.style.display = "none";
//     }
// });

// // Add change event listeners to the RGB input fields
// redInput.addEventListener("input", updateColor);
// greenInput.addEventListener("input", updateColor);
// blueInput.addEventListener("input", updateColor);

// // Function to update the color based on RGB input values
// function updateColor() {
//     var redValue = parseInt(redInput.value);
//     var greenValue = parseInt(greenInput.value);
//     var blueValue = parseInt(blueInput.value);

//     // Ensure values are within the valid range (0-255)
//     redValue = Math.min(255, Math.max(0, redValue));
//     greenValue = Math.min(255, Math.max(0, greenValue));
//     blueValue = Math.min(255, Math.max(0, blueValue));

//     // Update the background color of the colored box
//     coloredBox.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
// }

// Qasim

// function myFunction(val) {
//     var red = parseInt(document.getElementById("red").value);
//   var green = parseInt(document.getElementById("green").value);
//   var blue = parseInt(document.getElementById("blue").value);
//   var div1= document.getElementById("div1");
//   div1.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";

// }
// myFunction(val) 



function applyColor(color) {
    var red = parseInt(document.getElementById("red").value);
    var green = parseInt(document.getElementById("green").value);
    var blue = parseInt(document.getElementById("blue").value);
    var div1= document.getElementById("div1");
    div1.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  
  }
  
  
   applyColor(color) 