/* search */
function searchWord(event) {
  if (event.keyCode == 13) {
    var word = event.target.value;
    console.log(word);
    location.href = "./dictionary.html?word=" + word;
    event.target.value = "";
  }
}

// Mobile menu
function toggleMenu() {
  var menuELe = document.querySelector(".menu");
  if (menuELe.style.display === "none") {
    menuELe.style.display = "block";
  } else {
    menuELe.style.display = "none";
  }
}
