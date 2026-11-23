const mongoose = require('mongoose');

// Define the Assignment schema
const assignmentSchema = new mongoose.Schema({
  // Assignment title
title: {
    type: String,
    required: true,
    trim: true
},

// Course associated with the assignment
course: {
    type: String,
    required: true,
    trim: true
},

// Short description of the assignment
description: {
    type: String,
    required: true,
    trim: true
},

// Assignment deadline
dueDate: {
  type: Date,
  required: true
},

// Current assignment status
status: {
  type: String,
  enum: ['Not Started', 'In Progress', 'Completed'],
  default: 'Not Started'
}

}, {
    // Automatically record creation and modification dates for each assignment document 
    timestamps: true 
});

// Create and export the Assignment model
module.exports = mongoose.model('Assignment', assignmentSchema);