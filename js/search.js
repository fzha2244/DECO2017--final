/* search */
function searchWord(event) {
  if (event.keyCode == 13) {
    var word = event.target.value;
    console.log(word);
    location.href = "./dictionary.html?word=" + word;
    event.target.value = "";
  }
}
