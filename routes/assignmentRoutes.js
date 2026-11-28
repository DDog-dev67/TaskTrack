
// Import Express
const express = require('express');

// Create an Express router
const router = express.Router();

// Import assignment controller functions
const assignmentController = require('../controllers/assignmentController');

// Display all assignments
router.get('/', assignmentController.getAllAssignments);

// Display the new assignment form
router.get('/new', assignmentController.showCreateForm);

// Save a new assignment
router.post('/', assignmentController.createAssignment);

// Display the edit form
router.get('/:id/edit', assignmentController.showEditForm);

// Update an existing assignment
router.put('/:id', assignmentController.updateAssignment);

// Display the delete confirmation page
router.get('/:id/delete', assignmentController.showDeleteConfirmation);

// Delete an assignment
router.delete('/:id', assignmentController.deleteAssignment);

// Export the router
module.exports = router;
