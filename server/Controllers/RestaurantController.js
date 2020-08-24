// GET /api/v1/restaurants

const db = require("../db");

// return list of all restaurants
exports.getAllRestaurant = async (req, res) => {
  const results = await db.query("SELECT * FROM restaurants");
  console.log(results);
  res.status(200).json({
    status: "success",
    results: results.rows.length,
    data: {
      restaurant: results.rows,
    },
  });
};

// GET /api/v1/restaurants/:id
// return information on single restaurant
exports.getRestaurantById = (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonald",
    },
  });
};

// POST /api/v1/restaurants
// Add restaurant to database
exports.postRestaurant = (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
};

// PUT /api/v1/restaurants/:id
// update restaurant information
exports.updateRestaurantById = (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
};

// DEL /api/v1/restaurants/:id
// Delete restaurant by Id
exports.deleteRestaurantById = (req, res) => {
  console.log(req.params.id);
  res.status(204).json({
    status: "success",
  });
};
