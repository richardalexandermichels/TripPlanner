var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/TripPlanner");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "mongodb connection error"));

var placeSchema = new mongoose.Schema({
	address: String,
	city: String,
	state: String,
	phone: String,
	//[Lat, Lon]
	location: [Number]
});

var hotelSchema = new mongoose.Schema({
	name: String,
	place: [placeSchema],
	//Integer
	num_stars: { type: Number, min: 1, max: 5 } ,
	//Comma delineated vvv
	amenities: String
});

var thingToDoSchema = new mongoose.Schema({
	name: String,
	place: [placeSchema],
	age_range: String
});

var restaurantSchema = new mongoose.Schema({
	name: String,
	place: [placeSchema],
	//Comma delineated vvv
	cuisine: String,
	//For number of $ - $$$$$
	price: { type: Number, min: 1, max: 5 }
});

var Place = mongoose.model("Place", placeSchema);
var Hotel = mongoose.model("Hotel", hotelSchema);
var ThingToDo = mongoose.model("ThingToDo", thingToDoSchema);
var Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = {
	Place: Place,
	Hotel: Hotel,
	ThingToDo: ThingToDo,
	Restaurant: Restaurant
}

