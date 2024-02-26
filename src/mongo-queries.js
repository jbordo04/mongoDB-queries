// Queries for Mongo connection with mongosh

//Write a query to display all the documents in the Restaurants collection.
db.restaurants.find()

//Write a query to show the restaurant_id, name, borough and cuisine of all the documents in the Restaurants collection.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

//Write a query to display the restaurant_id, name, borough and cuisine, but excluding the _id field for all documents in the Restaurants collection.
db.restaurants.find(
  {},
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
)

//Write a query to display restaurant_id, name, borough and zip code, but exclude the _id field for all documents in the Restaurants collection.
db.restaurants.find(
  {},
  { restaurant_id: 1, borough: 1, "address.zipcode": 1, _id: 0 }
)

//Write a query to display all restaurants that are in the Bronx.
db.restaurants.find({ borough: "Bronx" })

//Type a query to show the first 5 restaurants that are in the Bronx.
db.restaurants.find({ borough: "Bronx" }).limit(5)

//Write a query to show the 5 restaurants after skipping the first 5 that are in the Bronx.
db.restaurants.find({ borough: "Bronx" }).skip(5).limit(5)

//Type a query to find the restaurants that have a score greater than 90.
db.restaurants.find({ "grades.score": { $gte: 90 } })

//Write a query to find restaurants that have a score greater than 80 but less than 100.
db.restaurants.find({ "grades.score": { $gte: 80, $lte: 100 } })

//Write a query to find restaurants that are located at a longitude less than -95.754168.
db.restaurants.find({ "address.coord.0": { $lte: -95.754168 } })

//Write a MongoDB query to find restaurants that do not cook 'American' food and have a score greater than 70 and a length less than -65.754168.
db.restaurants.find({
  $and: [
    { cuisine: { $ne: "American" } },
    { "grades.score": { $gte: 70 } },
    { "address.coord.0": { $lte: -65.754168 } },
  ],
})

//Write a query to find restaurants that do not prepare 'American' food and have a score greater than 70 and are located at a length less than -65.754168. Note: Write this query without using the $and operator.
db.restaurants.find({
  cuisine: { $ne: "American" },
  "grades.score": { $gte: 70 },
  "address.coord.0": { $lte: -65.754168 },
})

//Write a query to find the restaurants that do not prepare 'American ' food, have an 'A' grade and do not belong to Brooklyn. The document must be displayed according to cuisine in descending order.
db.restaurants.find({
  cuisine: { $ne: "American" },
  "grades.grade": "A",
  borough: { $ne: "Brooklyn" },
})

//Write a query to find the restaurant_id, name, borough and cuisine for those restaurants that contain 'Wil' in the first three letters of their name.
db.restaurants.find(
  {
    name: { $regex: /^Wil/, $options: "i" },
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
)

//Write a query to find the restaurant_id, name, borough and cuisine for those restaurants that contain 'ces' in the last three letters of their name.
db.restaurants.find(
  {
    name: { $regex: /ces$/, $options: "i" },
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
)

//Write a query to find the restaurant_id, name, borough and cuisine for those restaurants that contain 'Reg' anywhere in their name.
db.restaurants.find(
  {
    name: { $regex: /Reg/, $options: "i" },
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
)

//Enter a query to find restaurants that belong to the Bronx and serve American or Xinx dishes.
db.restaurants.find({
  borough: "Bronx",
  cuisine: { $in: ["American", "Xinx"] },
})

//Write a query to find the restaurant_id, name, borough and cuisine for those restaurants that belong to Staten Island, Queens, Bronx or Brooklyn.
db.restaurants.find(
  {
    borough: { $in: ["Staten Island", "Bronx", "Queens", "BrOoklyn"] },
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
)

//Write a query to find the restaurant_id, name, borough and cuisine for those restaurants NOT in Staten Island, Queens, Bronx or Brooklyn.
db.restaurants.find(
  {
    borough: { $nin: ["Staten Island", "Bronx", "Queens", "BrOoklyn"] },
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
)

//Write a query to find the restaurant_id, name, borough and cuisine for those restaurants that score less than 10.
db.restaurants.find(
  {
    "grades.score": { $nin: ["Staten Island", "Bronx", "Queens", "BrOoklyn"] },
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
)

//Write a query to find the restaurant_id, name, borough and cuisine for those restaurants that serve seafood except if they are 'American ', 'Chinese' or the name of the restaurant begins with the letters 'Wil'.
db.restaurants.find(
  {
    cuisine: "Seafood",
    $or: [
      { cuisine: { $nin: ["American", "Chinese"] } },
      { name: { $regex: /^Wil/ } },
    ],
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
)

//Write a query to find the restaurant_id, name and grades for those restaurants that achieved a grade of "A" and a score of 11 with an ISODate of "2014-08-11T00:00:00Z".
db.restaurants.find(
  {
    $and: [
      { "grades.grade": "A" },
      { "grades.score": 11 },
      { "grades.date": ISODate("2014-08-11T00:00:00Z") },
    ],
  },
  {
    restaurant_id: 1,
    name: 1,
    grades: 1,
    _id: 0,

    // "grades.date": 1,
  }
)

//Write a query to find the restaurant_id, name and grades for those restaurants where the 2nd element of the grade array contains a grade of "A" and a score of 9 with an ISODate "2014-08-11T00:00:00Z".
db.restaurants.find(
  {
    $and: [
      { "grades.1.grade": "A" },
      { "grades.1.score": 9 },
      { "grades.1.date": ISODate("2014-08-11T00:00:00Z") },
    ],
  },
  {
    restaurant_id: 1,
    name: 1,
    grades: 1,
    _id: 0,
  }
)

//Write a query to find the restaurant_id, name, address and geographic location for those restaurants where the second element of the coord array contained a value between 42 and 52.
db.restaurants.find(
  {
    "address.coord.1": { $gte: 42, $lt: 52 },
  },
  {
    restaurant_id: 1,
    name: 1,
    "address.coord": 1,
    _id: 0,
  }
)

//Write a query to sort the restaurants by name in ascending order.
db.restaurants.find().sort({ name: 1 })

//Write a query to sort the restaurants by name in descending order.
db.restaurants.find().sort({ name: -1 })
