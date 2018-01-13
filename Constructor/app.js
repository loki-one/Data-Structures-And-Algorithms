var House = function (livingRoom, bedRoom, kitchen, bathroomAndToilet, balcony) {
  this.type = "Family House"
  this.numOfLivingRooms = livingRoom;
  this.numOfBedRooms = bedRoom;
  this.hasKitchen = kitchen;
  this.hasBathroomAndToilet = bathroomAndToilet;
  this.hasBalcony = balcony;
};

House.prototype.getDetails = function () {
  var details = "";
  details += "This is a " + this.type + ". It has " + this.numOfLivingRooms + " living rooms and " + this.numOfBedRooms + " bedrooms.\n";
  if (this.hasKitchen) {
    details += "It has a kitchen.\n";
  } else {
    details += "It doesnot have a kitchen.\n";
  }
  if (this.hasBathroomAndToilet) {
    details += "It has a Bathroom and a Toilet.\n";
  } else {
    details += "Unfortunately it doesnot have a bathroom and a toilet.\n";
  }
  if (this.hasBalcony) {
    details += "It has a great view from the balcony.\n";
  } else {
    details += "There is no balcony.\n";
  }
  console.log(details);
};


var myHouse = new House(1, 3, true, true, true);
myHouse.getDetails();
