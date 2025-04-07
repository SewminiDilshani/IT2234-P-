const express = require('express');
const router = express.Router();

const users = require('./users');
const posts = require('./posts');
const comments = require('./comments');

router.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const postCount = posts.filter(post => post.authorId === userId).length;
    const commentCount = comments.filter(comment => comment.userId === userId).length;

    res.json({
        id: user.id,
        username: user.username,
        fullName: user.fullName,
        email: user.email,
        numberOfPosts: postCount,
        numberOfComments: commentCount
    });
});

module.exports = router;
