const express = require('express');
const router = express.Router();

const users = require('./users');
const comments = require('./comments');

router.get('/post/:id/comments', (req, res) => {
    const postId = req.params.id;
    const postComments = comments.filter(comment => comment.postId === postId);

    if (postComments.length === 0) {
        return res.status(404).json({ message: 'No comments found for this post ID' });
    }

    const result = postComments.map(comment => {
        const user = users.find(u => u.id === comment.userId);
        return {
            fullName: user ? user.fullName : 'Unknown User',
            content: comment.content
        };
    });

    res.json(result);
});

module.exports = router;
