var Car = function () {
	var avaiableNumber = 0;

	this.categories = "";
	this.rentalPrice = 0;
	this.availability = function() {
		if (avaiableNumber == 0){
			return false;

		}else{
			return true;
		}
	};
	this.setAvailableNumber = function(Num){
		avaiableNumber = Num;

		return avaiableNumber;
	}
	this.getAvailableNumber = function() {
		return avaiableNumber;
	};
	this.request = function() {

		if(avaiableNumber > 0){
			avaiableNumber -= 1;
			return "One car requested, number of this type of cars left: " + avaiableNumber;

		}else{
			return"No more available";
		}

	};

}

var car = new Car;
car.setAvailableNumber(10);
car.categories = "SUV";
