Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const alertDay = randomDate(new Date(2018, 4, 9), new Date());
const alertDateFormatted = days[alertDay.getDay()] + ", " + months[alertDay.getMonth()] + " " + alertDay.getDate() + ", " + "2018"


function getAlert() {
  let randomHPAddress = () => Math.floor(Math.random() * (6100 - 5300) + 5300);
  let HPStreets = ["Kimbark", "Dorchester", "Harper", "Lake Park", "Ellis", "University", "Maryland", "Cottage Grove"];
  let weapons = ["sawed-off shotgun", "katana", "machete", "bludgeon", "mace", "flail", "ball-headed war club"]
  let getawayVehicle = ["chariot of fire", "totally jacked Hummer", "disintegrating pickup truck", "Panzer"]
  let property = ["zombie survival kit", "left arm", "bible", "Marlon C. Lynch"]
  let suspects = ["Ayn Rand clones", "Economics undergraduates", "cishet demons", "zombie prospies"]
  let street = HPStreets.random();
  let theseSuspects = suspects.random();
  let apocalypsewow = "At approximately " +
  alertDay.toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'}) + " " +  alertDateFormatted +
  ", a University student walking on the sidewalk off campus at " +
  randomHPAddress() + " " + street +
  " was approached from behind by two " + theseSuspects + ", one of whom was armed with a " + weapons.random() +
  ". The " + theseSuspects + " demanded and took the victim's " + property.random() +
  " before fleeing to a waiting " + getawayVehicle.random() +
  " with a partial Illinois license plate REV6... that drove southbound on " +
  street + ". " +
  "The victim reported no physical injuries. The Four Horsemen of Chicago are investigating this crime.<br><br>" +
  "Be alert and aware of your surroundings at all times. Don't resist an attack by "  + theseSuspects + " unless absolutely necessary. \
  Avoid using cell phones or other electronics while patrolling the streets. When patrolling, try to patrol in pairs or groups." ;
  return apocalypsewow;

}
