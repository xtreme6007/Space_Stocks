const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/users")

module.exports = function (passport) {
passport.use(
  new GoogleStrategy(
    {
clientID: "6045650641-dnlg6bf7608cevka0veulptfve7pao51.apps.googleusercontent.com",
clientSecret: "_YYDgg1LzqyGzAZwzj7J7oeW",
//will need to update this will our actual route
callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const  newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        image: profile.photos[0].value,
      };
      try {
          let user = await User.findOne({ googleId: profile.id});

          if(user) {
            done(null, user);

          }
          else {
            user = await User.create(newUser);
            done(null, user);
          }
                } catch(err) {
                  console.error(err);
                }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err,user));
})

};




//local strategy from previous iteration NOT USING





// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const User = ("../models/users.js")

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((obj, done) => {
//   done(null, obj);
// });



// //local strategy to check username and password
// const localPassport = 
//   new LocalStrategy(
//    function(email, password, done) {
//      User.findOne({ email: email}, (err, user) => {
//        if(err) {
//          return done(err)
//        }
//        if(!user) {
//          return done(null, false, {message: 'incorrect username/password entered'})
//        }
//        if(!user.checkPassword(password)) {return done(null, false, {message: "incorrect username/password entered"})
//       }
//       return done(null, user)
//      })
//    }
//   )




// module.exports = localPassport;
