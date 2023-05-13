//require router and each api route js
const router = require('express').Router();
const userRoutes = require('../api/userRoutes');
const blogRoutes = require('../api/blogRoutes');
const commentRoutes = require('../api/commentRoutes');

//path to user api
router.use('/users', userRoutes);

//path to posts api
router.use('/posts', blogRoutes);

//path to comments api
router.use('/comments', commentRoutes);

module.exports = router;

