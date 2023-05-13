const router = require('express').Router();
const { Blogpost } = require('../../models');

// CREATE a blogpost
router.post('/', async (req, res) => {
  try {
    const blogpostData = await Blogpost.create({
        ...req.body,
        user_id: req.session.userID
    });
    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a blogpost
router.delete('/:id', async (req, res) => {
  try {
    const blogpostData = await Blogpost.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!blogpostData) {
      res.status(404).json({ message: 'No blogpost found with this id!' });
      return;
    }

    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;