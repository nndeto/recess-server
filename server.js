// my server is my computer! that will serve files back to my front end

const express = require('express');
const rowdy = require('rowdy-logger');

// later add in session, cors, and dotenv

// DB & Models //
const db = require('./models/index.js');

// Configuration //
const port = process.env.PORT || 4000;
const app = express();
const rowdyResults = rowdy.begin(app);

// allows for req.body
app.use(express.json());

// Controllers //

// Check Port //
app.listen(port, () => {
    console.log(`Let's plan your next break, at shipping port ${port}.`);
    rowdyResults.print();
})