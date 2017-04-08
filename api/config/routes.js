const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const foodItems = require('../controllers/foodItems.js');

router.route('/foodItems')

  .get(foodItems.getAll);


module.exports = router;
