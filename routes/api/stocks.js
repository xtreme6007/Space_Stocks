const router = require("express").Router();

const router = require("express").Router();
const stockController = require("../../controllers/StockController");

// Matches with "/api/stocks"
router.route("/api/stocks")
  .get(stockController.findAll)
  .post(stockController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(stockController.findById)
  .put(stockController.update)
  

module.exports = router;