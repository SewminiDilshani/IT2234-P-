const express = require('express');
const app = express();

// Import routes
const userSummaryRoute = require('./user/userSummaryRoute');
const postCommentsRoute = require('./user/postCommentsRoute');
const userFilterRoute = require('./user/userFilterRoute');
const postFilterRoute = require('./user/postFilterRoute');

// Use routes
app.use('/api', userSummaryRoute);
app.use('/api', postCommentsRoute);
app.use('/api', userFilterRoute);
app.use('/api', postFilterRoute);

// Start server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
