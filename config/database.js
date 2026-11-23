
// Import Mongoose to connect to MongoDB
const mongoose = require('mongoose');

// Connect the application to MongoDB Atlas
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);

        // Stop the application if the database cannot connect
        process.exit(1);
    }
};

// Export the connection function
module.exports = connectDB;
