const express = require('express');
const router = express.Router();
const posts = require('./posts');

router.get('/posts', (req, res) => {
    const { title, authorId } = req.query;

    let filteredPosts = posts;

    if (title) {
        filteredPosts = filteredPosts.filter(post => post.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (authorId) {
        filteredPosts = filteredPosts.filter(post => post.authorId === authorId);
    }

    res.json(filteredPosts);
});

module.exports = router;
