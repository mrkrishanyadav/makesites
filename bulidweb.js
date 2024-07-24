function changeimage(){
    var img =document.getElementById('graphic');
    img.src ='design.jpg';

}

function changeimageone (){
    var img =document.getElementById('graphic');
    img.src ='ios.jpg';

}
function changeimagetow (){
    var img =document.getElementById('graphic');
    img.src ='graphics.png';
}

function changeimagethree (){
    var img =document.getElementById('graphic');
    img.src ='apps.jpg';

}

function changeimagefour (){
    var img =document.getElementById('graphic');
    img.src ='games.jpg';
}

function changeimagefive (){
    var img =document.getElementById('graphic');
    img.src ='swoftwre.jpg';
}


// Function to open the pop-up
function openPopup() {
  document.getElementById("signup-popup").style.display = "block";
}

// Function to close the pop-up
function closePopup() {
  document.getElementById("signup-popup").style.display = "none";
}

// Automatically open pop-up when the page loads
document.addEventListener("DOMContentLoaded", function() {
  openPopup();
});


