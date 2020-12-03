const router = require("express").Router();

const stockController = require("../../controllers/StockController");

// Matches with "/api/stocks"
router.route("/")
  .get(stockController.findAll)
  .post(stockController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(stockController.findByStock)
  .put(stockController.update)
  

module.exports = router;