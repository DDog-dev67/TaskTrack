
// Import the Assignment model
const Assignment = require('../models/assignment');

// Display all assignments
exports.getAllAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find().sort({ dueDate: 1 });

        res.render('assignments/index', {
            title: 'My Assignments',
            assignments
        });

    } catch (error) {
        console.error('Error retrieving assignments:', error);
        res.status(500).send('Unable to retrieve assignments.');
    }
};

// Display the form for creating an assignment
exports.showCreateForm = (req, res) => {
    res.render('assignments/create', {
        title: 'Add Assignment'
    });
};

// Save a new assignment
exports.createAssignment = async (req, res) => {
    try {
        const newAssignment = new Assignment({
            title: req.body.title,
            course: req.body.course,
            description: req.body.description,
            dueDate: req.body.dueDate,
            status: req.body.status
        });

        await newAssignment.save();

        res.redirect('/assignments');

    } catch (error) {
        console.error('Error creating assignment:', error);
        res.status(400).send('Unable to create assignment. Check your information.');
    }
};

// Display the form for editing an assignment
exports.showEditForm = async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);

        if (!assignment) {
            return res.status(404).send('Assignment not found.');
        }

        res.render('assignments/edit', {
            title: 'Edit Assignment',
            assignment
        });

    } catch (error) {
        console.error('Error finding assignment:', error);
        res.status(400).send('Invalid assignment ID.');
    }
};

// Update an existing assignment
exports.updateAssignment = async (req, res) => {
    try {
        const updatedAssignment = await Assignment.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                course: req.body.course,
                description: req.body.description,
                dueDate: req.body.dueDate,
                status: req.body.status
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedAssignment) {
            return res.status(404).send('Assignment not found.');
        }

        res.redirect('/assignments');

    } catch (error) {
        console.error('Error updating assignment:', error);
        res.status(400).send('Unable to update assignment.');
    }
};

// Display the delete confirmation page
exports.showDeleteConfirmation = async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);

        if (!assignment) {
            return res.status(404).send('Assignment not found.');
        }

        res.render('assignments/delete', {
            title: 'Confirm Deletion',
            assignment
        });

    } catch (error) {
        console.error('Error finding assignment:', error);
        res.status(400).send('Invalid assignment ID.');
    }
};

// Delete an assignment
exports.deleteAssignment = async (req, res) => {
    try {
        const deletedAssignment = await Assignment.findByIdAndDelete(
            req.params.id
        );

        if (!deletedAssignment) {
            return res.status(404).send('Assignment not found.');
        }

        res.redirect('/assignments');

    } catch (error) {
        console.error('Error deleting assignment:', error);
        res.status(400).send('Unable to delete assignment.');
    }
};
