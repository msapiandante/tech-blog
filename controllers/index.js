const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
//routes to api and handlebar pages
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;