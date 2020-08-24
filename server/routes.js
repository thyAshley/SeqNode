const router = require("express").Router();
const RestaurantController = require("./Controllers/RestaurantController");

// GET /api/v1/restaurants
// return list of all restaurants
router.get("/restaurants", RestaurantController.getAllRestaurant);

// POST /api/v1/restaurants
// Add restaurant to database
router.post("/restaurants", RestaurantController.postRestaurant);

// GET /api/v1/restaurants/:id
// return information on single restaurant
router.get("/restaurants/:id", RestaurantController.getRestaurantById);
module.exports = router;

// PUT /api/v1/restaurants/:id
// update restaurant information
router.put("/restaurants/:id", RestaurantController.updateRestaurantById);

// DEL /api/v1/restaurants/:id
// Delete restaurant by Id
router.delete("/restaurants/:id", RestaurantController.deleteRestaurantById);
