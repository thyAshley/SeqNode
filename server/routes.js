const router = require("express").Router();
const RestaurantController = require("./Controllers/RestaurantController");

// GET /api/v1/restaurants
// return list of all restaurants
router.get("/restaurants", RestaurantController.getAllRestaurant);

// POST /api/v1/restaurants
// Add restaurant to database
router.get("/restaurants", RestaurantController.postRestaurant);

// GET /api/v1/restaurants/:id
// return information on single restaurant
router.get("/restaurants/:id", RestaurantController.getRestaurantById);
module.exports = router;
