const router = require("express").Router();
const bookRoutes = require("./stocks");

// Book routes
router.use("/stocks", stockRoutes);

module.exports = router;