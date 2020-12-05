const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const dotenv = require("dotenv")
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("./models/users");
const connectDB = require("./config/db");
const routes = require("./routes");

dotenv.config( {path: "./config/config.env"});

require("./config/passport")(passport);

connectDB();

//adding middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//setting up express session
app.use(
  session({
    secret: "keyboard cat",
    resave: false;
    saveUninitialized: false;
  })
);

//starts passport session
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next){
res.locals.user = req.user || null;
next();
})

//setting up static
app.use(express.static(path.join(__dirname, "public")));

//setting up routes
app.use(routes);




if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  
}


app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
