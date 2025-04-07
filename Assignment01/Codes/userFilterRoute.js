const express = require('express');
const router = express.Router();
const users = require('./users');

router.get('/users', (req, res) => {
    const { username, fullName } = req.query;

    let filteredUsers = users;

    if (username) {
        filteredUsers = filteredUsers.filter(user => user.username.includes(username));
    }

    if (fullName) {
        filteredUsers = filteredUsers.filter(user => user.fullName.includes(fullName));
    }

    res.json(filteredUsers);
});

module.exports = router;
