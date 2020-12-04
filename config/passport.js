const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = ("../models/users.js")

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});



//local strategy to check username and password
const localPassport = 
  new LocalStrategy(
   function(email, password, done) {
     User.findOne({ email: email}, (err, user) => {
       if(err) {
         return done(err)
       }
       if(!user) {
         return done(null, false, {message: 'incorrect username/password entered'})
       }
       if(!user.checkPassword(password)) {return done(null, false, {message: "incorrect username/password entered"})
      }
      return done(null, user)
     })
   }
  )




module.exports = localPassport;
