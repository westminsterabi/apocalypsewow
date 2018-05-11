Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getAlert() {
  let alert_day = randomDate(new Date(2018, 4, 9), new Date());
  let randomHPAddress = () => Math.floor(Math.random() * (6100 - 5300) + 5300);
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let HPStreets = ["Kimbark", "Dorchester", "Harper", "Lake Park", "Ellis", "University", "Maryland", "Cottage Grove"];
  let street = HPStreets.random();
  let apocalypsewow = "At approximately " +
  alert_day.toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'}) + " " + days[alert_day.getDay()] + ", " +
  months[alert_day.getMonth()] + " " + alert_day.getDate() + ", " + "2018" +
  ", a University student walking on the sidewalk off campus at " +
  randomHPAddress() + " " + street +
  " was approached from behind by two unknown suspects, one of whom was armed with a handgun. The suspects demanded and took the victim's backpack before fleeing to a waiting silver vehicle with a partial Illinois license plate SC257.. that drove southbound on " + street + ". " +
  "The victim reported no physical injuries. The Four Horsemen of Chicago are investigating this crime."
  return apocalypsewow;

}
