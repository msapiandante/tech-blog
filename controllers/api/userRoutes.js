//require router and user model
const router = require('express').Router();
const { User } = require('../../models')

//create a new user and saves user session once user is logged in

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.userID = userData.id;
            req.session.loggedIn = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

//checks user log in credentials and allows user to log in if credentials are correct

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({where: {username: req.body.username}});
        if (!userData) {
            res.status(400).json({message: 'Incorrect login information. Please try again.'});
            return;
        }
        const correctPassword = await userData.checkPassword(req.body.password);
        if(!correctPassword) {
            res.status(400).json({message: 'Incorrect login information. Please Try again.'});
            return;
        }
        req.session.save(() => {
            req.session.userID = userData.id;
            req.session.loggedIn = true
            res.json({user: userData, message: 'You are logged in!'})
        });
    } catch (err) {
        res.status(400).json(err)
    }
});

//destroys session when log out is clicked
router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        });
    } else {
        res.status(404).end()
    }
});

module.exports = router