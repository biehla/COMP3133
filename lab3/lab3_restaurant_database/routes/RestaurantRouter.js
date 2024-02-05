const express = require('express');
const qs = require('qs')
const restaurantModel = require('../models/RestaurantModel');
const app = express();

app.get('/restaurants', async (req, res) => {
	let restaurants;

	if (Object.keys(req.query).length == 1) {
		switch (req.query.sortBy) {
			case "ASC": 
				restaurants = await restaurantModel.find({}).sort('-restaurant_id').select(["_id", "cuisine", "name", "city", "restaurant_id"])
				break
			case "DESC":
				restaurants =  await restaurantModel.find({}).sort('+restaurant_id').select(["_id", "cuisine", "name", "city", "restaurant_id"])
				break
		}
	}
	else {
		restaurants = await restaurantModel.find({})
	}

	// if (typeof req.query !== 'undefined' && typeof req.query.sortBy !== 'undefined') {
	// 	if (req.query.sortBy == "ASC") {
	// 		const restaurants = restaurants.sort('-restaurant_id')
	// 	}
	// 	else {
	// 		const restaurants = await restaurants.sort('+restaurant_id')
	// 	}
	// }

	try {
		res.status(200).send(restaurants)
	}
	catch (err) {
		res.status(500).send(err)
	}
})

app.get('/restaurants/Delicatessen', async (req, res) => {
	const restaurants = await restaurantModel.find({cuisine: "Delicatessen"}).where('city').ne('Brooklyn')

	try {
		res.status(200).send(restaurants)
	}
	catch (err) {
		res.status(500).send(err)
	}
})


app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
	const cuisineType = req.params.cuisine
	console.log(cuisineType)
	const results = await restaurantModel.find({cuisine: cuisineType})

	try {
	    if(results.length != 0){
	      res.status(200).send(results);
	    }else{
	      res.send(JSON.stringify({status:false, message: "No data found"}))
	    }
	}
	catch (err) {
		res.status(500).send(err)
	}
})


module.exports = app



// restaurantModel.create(
// [{
//   "address": {
// 	"building": "1008",
// 	"street": "Morris Park Ave",
// 	"zipcode": "10462"
//  },
//  "city": "Bronx",
//  "cuisine": "Bakery",
//  "name": "Morris Park Bake Shop",
//  "restaurant_id": "30075445"
// },
// {
//   "address": {
// 	"street": "Thai Son Street",
// 	"zipcode": null
//  },
//  "city": "Manhattan",
//  "cuisine": "Vietnamese",
//  "name": "Pho Me Long Time",
//  "restaurant_id": "30075455"
// },
// {
//   "address": {
// 	"building": "253",
// 	"street": "East 167 Street",
// 	"zipcode": null
//  },
//  "city": "Bronx",
//  "cuisine": "Chicken",
//  "name": "Mom's Fried Chicken",
//  "restaurant_id": "40382900"
// },
// {
//   "address": {
// 	"building": "120",
// 	"street": "East 56 Street",
// 	"zipcode": "19800"
//  },
//  "city": "Mahattan",
//  "cuisine": "Italian",
//  "name": "Montebello Restaurant",
//  "restaurant_id": "40397082"
// },
// {
//   "address": {
// 	"building": "195",
// 	"street": "Soprano Street",
// 	"zipcode": "17500"
//  },
//  "city": "Staten Island",
//  "cuisine": "Hamburgers",
//  "name": "Joeys Burgers",
//  "restaurant_id": "40397555"
// },
// {
//   "address": {
// 	"building": "200",
// 	"street": "Queens Boulevard",
// 	"zipcode": "19700"
//  },
//  "city": "Queens",
//  "cuisine": "American",
//  "name": "Brunos on the Boulevard",
//  "restaurant_id": "40397678"
// },
// {
//   "address": {
// 	"building": "555",
// 	"street": "Sushi Street",
// 	"zipcode": "17700"
//  },
//  "city": "Brooklyn",
//  "cuisine": "Japanese",
//  "name": "Iron Chef House",
//  "restaurant_id": "40397699"
// },
// {
//   "address": {
// 	"building": "555",
// 	"street": "Fontana Street",
// 	"zipcode": null
//  },
//  "city": "Brooklyn",
//  "cuisine": "Japanese",
//  "name": "Wasabi Sushi",
//  "restaurant_id": "40398000"
// },
// {
//   "address": {
// 	"building": "900",
// 	"street": "Goodfellas Street",
// 	"zipcode": "17788"
//  },
//  "city": "Brooklyn",
//  "cuisine": "Delicatessen",
//  "name": "Sal's Deli",
//  "restaurant_id": "40898000"
// },
// {
//   "address": {
// 	"building": "909",
// 	"street": "44 Gangster Way",
// 	"zipcode": "17988"
//  },
//  "city": "Queens",
//  "cuisine": "Delicatessen",
//  "name": "Big Tony's Sandwich Buffet",
//  "restaurant_id": "40898554"
// },
// {
//   "address": {
// 	"building": "1201",
// 	"street": "121 Canolli Way",
// 	"zipcode": "17989"
//  },
//  "city": "Queens",
//  "cuisine": "Delicatessen",
//  "name": "The Godfather Panini Express",
//  "restaurant_id": "40898554"
// }]
// )

