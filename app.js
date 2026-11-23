
// Load environment variables from the .env file
require('dotenv').config();

// Import the required packages
const express = require('express');
const path = require('path');

// Initialize the Express application
const app = express();

// Set EJS as the application's view engine
app.set('view engine', 'ejs');

// Set the location of the views folder
app.set('views', path.join(__dirname, 'views'));

// Allow the application to receive form data
app.use(express.urlencoded({ extended: true }));

// Allow access to CSS, images and other static files
app.use(express.static(path.join(__dirname, 'public')));

// Display the TaskTrack homepage
app.get('/', (req, res) => {
    res.render('home', {
        title: 'TaskTrack'
    });
});

// Start the server using the assigned port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`TaskTrack is running on port ${PORT}`);
});
