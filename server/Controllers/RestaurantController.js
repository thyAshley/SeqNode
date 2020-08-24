// GET /api/v1/restaurants
// return list of all restaurants
exports.getAllRestaurant = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["mcDonalds", "Wendys"],
    },
  });
};

// GET /api/v1/restaurants/:id
// return information on single restaurant
exports.getRestaurantById = (req, res) => {
  console.log(req.params);
};

// POST /api/v1/restaurants
// Add restaurant to database
exports.postRestaurant = (req, res) => {};
