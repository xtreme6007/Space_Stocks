const passport = require("passport");

//Local Strategy for comparing passwords
const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({username: username}, (err, user) => {
      if(err) {
        return done(err)
      }
      if (!user) {
        return done(null, false, {message: 'incorrect username'})
      }
      if(!user.checkPassword(password)) {
        return done(null, false, {message: 'incorrect password'})
      }
      return done(null, user)
    })
      }
      



module.exports = passport;