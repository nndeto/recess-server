const express = require('express');
const rowdy = require('rowdy-logger');

// later add in session, cors, and doenv

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