const router = require("express").Router();
// const stockRoutes = require("./stocks");

// Book routes
router.use("/stocks", require("./stocks"));


module.exports = router;