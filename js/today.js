getToday();
// get today
function getToday() {
  var todayEle = document.querySelector("#today");
  var time = new Date();
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  var today = year + "-" + month + "-" + date;
  todayEle.innerHTML = today;
}
