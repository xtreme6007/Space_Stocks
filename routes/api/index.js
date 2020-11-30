const router = require("express").Router();

const router = require("express").Router();
const booksController = require("../../controllers/StockController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  

module.exports = router;