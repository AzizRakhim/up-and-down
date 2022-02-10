let elMenuBtn = document.getElementById("menuBtn");
let elNavBox = document.getElementById("navBox");
let elIconBtn = document.getElementById("iconBtn");
let count = 0;

elMenuBtn.addEventListener("click", function() {
  elNavBox.classList.toggle("show");
  if (count == 0){
    elIconBtn.className = "bx bx-x";
    count++;
  } else{
    elIconBtn.className = "bx bx-menu";
    count--;
  }
})