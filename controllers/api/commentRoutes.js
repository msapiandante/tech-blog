const router = require('express').Router();
const withAuth = require('../../utils/withAuth');
const { Comments, Blogpost, User } = require('../../models');


// CREATE a comment
router.post('/:id', withAuth,
 async (req, res) => {
    try {
        console.log(req.params);
        console.log(req.body);
        const userData = await User.findOne({
           where: {
               id: req.session.userID
            }

        });
        const userID = userData.id

        const blogpostData = await Blogpost.findOne({
            where: {
                id: req.params.id
            }

        });
        const blogpostID = blogpostData.id
        console.log(blogpostID);

        const newComment = await Comments.create({
            content: req.body.content,
            post_id: blogpostID,
            user_id: req.session.userID
        });
        console.log(newComment)
        res.status(200).json(newComment);
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});



// DELETE a comment
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                id: req.session.userId
            }

        });
        const userID = userData.id

        const blogpostData = await Blogpost.findOne({
            where: {
                id: req.params.id
            }

        });
        const blogpostID = blogpostData.id

        const newComment = await Comments.destroy({
            content: req.body.content,
            post_id: blogpostID,
            user_id: userID
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;