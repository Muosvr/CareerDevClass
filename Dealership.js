var Car = function () {
	var avaiableNumber = 0;

	this.categories = "";
	this.rentalPrice = 0;
	this.availability = false;
	this.getAvailableNumber = function() {
		return avaiableNumber;
	};
	this.request = function() {

		if(avaiableNumber >= 0){
			avaiableNumber -= 1;
			return "Name of this type of cars left: " + avaiableNumber;

		}else{
			return"No more available";
		}

	};

}

var car1 = new Car;
