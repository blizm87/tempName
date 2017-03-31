const express = require("express");
const router = express.Router();
const bodyParser = require("bodyParser");
const methodOverride = require("method-override");

router.route('/foodItems')

  .get(foodItems.getAll);


module.exports = router;
