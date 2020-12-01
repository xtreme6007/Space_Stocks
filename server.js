const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("./models/users")

//connecting to database
mongoose.connect("mongodb://localhost/loginapp");
const db = mongoose.connection;

//adding Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

//Express session
app.use(session({
  secret: "secret",
  saveUninitialized: true, 
  resave: true
}));

//initializing passport
app.use(passport.initialize());
app.use(passport.session());

//adding route to save users to database if password matches

app.post("/register", function(req, res) {
let password = req.body.password;
let password2 = req.body.password2;

if(password == password2) {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  User.createUser(newUser, function(err, user) {
    if(err) throw err;
    res.send(user).end()

  });
}
else {
  res.status(500).send("{errors: \"Passwords do not match\"}").end()
}
});



// Login route
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.send(req.user);
  }
);

//the routes below may need to go to the respective front end files

// route to get current user
app.get('/user', function(req, res){
  res.send(req.user);
})


// logout route
app.get('/logout', function(req, res){
  req.logout();
  res.send(null)
});


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
