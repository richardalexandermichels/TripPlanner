var express = require("express");
var router = express.Router();
var path = require("path");
var models = require("../models/");
var Promise = require("bluebird");

// router.get("/", function (req, res, next) {
	
// 	Promise.all([models.Hotel.find().exec(), models.ThingToDo.find().exec(), models.Restaurant.find().exec()]).then(function(array){
// 		var data = {};
// 		data["all_hotels"] = array[0];
// 		data["all_things_to_do"] = array[1];
// 		data["all_restaurants"] = array[2];
// 		res.render("index", data);
// // <<<<<<< HEAD
// 		console.log(array)
// // =======
// 		//console.log(array)
// // >>>>>>> 00f2089ec6d86f362d41e5d8f52f03a81c132a6e
// 	});

// });

// module.exports = router;

// var router = require('express').Router();

// var models = require('../models');

router.get('/',
    function (req, res, next) {
        models.Hotel
            .find({})
            .exec(function (err, hotels) {
                // attach data to res.locals and then go on
                res.locals.all_hotels = hotels;
                next();
            });
    },
    function (req, res, next) {
        models.ThingToDo
            .find({})
            .exec(function (err, thingsToDo) {
                // attach data to res.locals and then go on
                res.locals.all_things_to_do = thingsToDo;
                next();
            });
    },
    function (req, res, next) {
        models.Restaurant
            .find({})
            .exec(function (err, restaurants) {
                // attach data to res.locals and then go on
                res.locals.all_restaurants = restaurants;
                next();
            });
    },
    function (req, res) {
        // all the data attached to res.locals will now be passed to the index template
        res.render('index');
    });

module.exports = router;