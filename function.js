Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

let textOptions = {
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  HPStreets: ["Kimbark", "Dorchester", "Harper", "Lake Park", "Ellis", "University", "Maryland", "Cottage Grove"],
  weapons: ["sawed-off shotgun", "katana", "machete", "bludgeon", "mace", "flail", "ball-headed war club"],
  getawayVehicle: ["chariot of fire", "totally jacked Hummer", "disintegrating pickup truck", "Panzer"],
  property: ["zombie survival kit", "left arm", "bible", "Marlon C. Lynch", "driver's license"],
  suspects: ["Ayn Rand clones", "Economics undergraduates", "cishet demons", "zombie prospies"]
}

function getAlert() {

  let alertDay = randomDate(new Date(2018, 4, 9), new Date());
  let alertDateFormatted = textOptions.days[alertDay.getDay()] + ", " + textOptions.months[alertDay.getMonth()] + " " + alertDay.getDate() + ", " + "2018"
  let _randomHPAddress = () => Math.floor(Math.random() * (6100 - 5300) + 5300);
  let street = textOptions.HPStreets.random();
  let theseSuspects = textOptions.suspects.random();
  let thisProperty = textOptions.property.random();
  let didTheyTakeIt;
  if (thisProperty == "driver's license") {
    didTheyTakeIt = {took: " ", didntHave: ", which was refused because the victim did not have one,"};
  } else {
    didTheyTakeIt = {took: " and took ", didntHave: ""};
  }

  let apocalypsewow = "At approximately " +
  alertDay.toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'}) + " " +  alertDateFormatted +
  ", a University student walking on the sidewalk off campus at " +
  _randomHPAddress() + " " + street +
  " was approached from behind by two " + theseSuspects + ", one of whom was armed with a " + textOptions.weapons.random() +
  ". The " + theseSuspects + " demanded" + didTheyTakeIt.took + "the victim's " + thisProperty + didTheyTakeIt.didntHave +
  " before fleeing to a waiting " + textOptions.getawayVehicle.random() +
  " with a partial Illinois license plate REV6... that drove southbound on " +
  street + ". " +
  "The victim reported no physical injuries. The Chicago Human Volunteer Force are investigating this crime.<br><br>" +
  "Be alert and aware of your surroundings at all times. Don't resist an attack by "  + theseSuspects + " unless absolutely necessary. \
  Avoid using cell phones or other electronics while patrolling the streets. When patrolling, try to patrol in pairs or groups." ;
  return {alert: apocalypsewow, date: alertDateFormatted};

}
