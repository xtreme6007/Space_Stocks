const router = require("express").Router();
// const stockRoutes = require("./stocks");

// Stock routes
router.use("/stocks", require("./stocks"));


module.exports = router;