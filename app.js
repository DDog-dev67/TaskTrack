
// Load environment variables
require('dotenv').config();

// Import required packages
const express = require('express');
const path = require('path');

// Import the database connection
const connectDB = require('./config/database');

// Initialize Express
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Allow the application to receive form data
app.use(express.urlencoded({ extended: true }));

// Serve static files such as CSS and images
app.use(express.static(path.join(__dirname, 'public')));

// Homepage route
app.get('/', (req, res) => {
    res.render('home', {
        title: 'TaskTrack'
    });
});

// Start the application after connecting to MongoDB
const startServer = async () => {
    await connectDB();

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`TaskTrack is running on port ${PORT}`);
    });
};

// Run the application
startServer();
