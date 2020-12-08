const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("./../../../middleware/auth");

router.get("/", ensureGuest, (req, res) => {
  console.log('in the login');
    res.render("login", { layout: "login" });
  });
  
  router.get("/dashboard", ensureAuth, async (req, res) => {
    console.log('in the dashboard');
    res.render("dashboard");
  });

  module.exports = router;