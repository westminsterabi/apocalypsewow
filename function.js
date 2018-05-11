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
  let weapons = ["sawed-off shotgun", "katana", "machete", "bludgeon", "mace", "flail", "ball-headed war club"]
  let getawayVehicle = ["chariot of fire"]
  let property = ["zombie survival kit"]
  let suspects = ["Ayn Rand clones", "Economics undergraduates", "cishet demons", "zombie prospies"]
  let street = HPStreets.random();
  let apocalypsewow = "At approximately " +
  alert_day.toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'}) + " " + days[alert_day.getDay()] + ", " +
  months[alert_day.getMonth()] + " " + alert_day.getDate() + ", " + "2018" +
  ", a University student walking on the sidewalk off campus at " +
  randomHPAddress() + " " + street +
  " was approached from behind by two " + suspects.random() + "one of whom was armed with a " + weapons.random() +
  ". The suspects demanded and took the victim's " + property.random() +
  " before fleeing to a waiting " + getawayVehicle.random() +
  " with a partial Illinois license plate REV6... that drove southbound on " +
  street + ". " +
  "The victim reported no physical injuries. The Four Horsemen of Chicago are investigating this crime."
  return apocalypsewow;

}
