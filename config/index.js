const passport = require("passport")
const localStrategy = require("./localPassport")

passport.serializeUser((user, done) => {done(null, {_id: user._id})})

passport.deserializeUser((id, done) => {
		User.findOne(
		{ _id: id },
		'first_name last_name email',
		(err, user) => {
			
			console.log(user)
			
			done(null, user)
		}
	)
})

passport.use(localStrategy)

module.exports = passport