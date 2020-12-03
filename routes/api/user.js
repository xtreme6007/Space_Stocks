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