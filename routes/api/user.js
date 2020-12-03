const express = require('express')
const router = express.Router()
const User = require('../models/users')
const passport = require('../config/index')


router.post(
    '/login',
    function (req, res, next) {
        console.log(req.body)
        next()

    },
    passport.authenticate('local'),
    (req, res) => {
        console.log("logged in as", req.user);
        let userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/user', (req, res, next) => {
	
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

//writes the data to the database from the signup screen
router.post('/signup', (req, res) => {
	const { email, password } = req.body
	
	User.findOne({ 'email': email }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Username already in use`
			})
		}
		const newUser = new User({
			'email': email,
			'password': password
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})

module.exports = router