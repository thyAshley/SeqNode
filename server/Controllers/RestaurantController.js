// GET /api/v1/restaurants

const { query } = require("express");
const db = require("../db");

// return list of all restaurants
exports.getAllRestaurant = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurant: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// GET /api/v1/restaurants/:id
// return information on single restaurant
exports.getRestaurantById = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants WHERE id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// POST /api/v1/restaurants
// Add restaurant to database
exports.postRestaurant = async (req, res) => {
  const { name, location, price } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1,$2,$3) returning *",
      [name, location, price]
    );
    console.log(result);
    res.status(201).json({
      status: "success",
      data: {
        restaurant: result.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "failure",
      message: "failed",
    });
  }
};

// PUT /api/v1/restaurants/:id
// update restaurant information
exports.updateRestaurantById = async (req, res) => {
  console.log(req.params.id);
  let queryStr =
    "UPDATE restaurants SET name=$1, location=$2, price_range=$3 where id=$4 returning *";
  let params = [
    req.body.name,
    req.body.location,
    req.body.price,
    req.params.id,
  ];
  try {
    const result = await db.query(queryStr, params);
    console.log(result);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: result.rows[0],
      },
    });
  } catch (err) {}
};

// DEL /api/v1/restaurants/:id
// Delete restaurant by Id
exports.deleteRestaurantById = (req, res) => {
  console.log(req.params.id);
  res.status(204).json({
    status: "success",
  });
};
