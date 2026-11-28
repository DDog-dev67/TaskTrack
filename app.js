
// Load environment variables
require('dotenv').config();

// Import required packages
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const assignmentRoutes = require('./routes/assignmentRoutes');

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

// Use method override for PUT and DELETE requests
app.use(methodOverride('_method'));

// Homepage route
app.get('/', (req, res) => {
    res.render('home', {
        title: 'TaskTrack'
    });
});

app.use('/assignments', assignmentRoutes);

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
