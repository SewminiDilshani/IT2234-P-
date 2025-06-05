const express = require('express'); 
const router = express.Router(); 
const mongoose = require('mongoose'); 
const getAllDocuments = require('../service/getall'); 
const Project = require('../models/Project'); 
const Task = require('../models/Task'); 
 
// GET all projects - Question 1 
router.get('/', async (req, res) => { 
    getAllDocuments(res, Project); 
}); 

//Question 2: GET all tasks for a specific project ID 
router.get('/:projectId/tasks', async (req, res) => { 
    const { projectId } = req.params; 
    // Validation for projectId 
    if (!mongoose.Types.ObjectId.isValid(projectId)) { 
        return res.status(400).json({ 
            success: false, 
            error: 'Invalid project ID format.' 
        }); 
    } 
    try { 
        // First check if project exists 
        const project = await Project.findById(projectId); 
        if (!project) { 
            return res.status(404).json({ 
                success: false, 
                message: 'Project not found.' 
            }); 
        } 
        // Get all tasks for this project 
        const tasks = await Task.find({ project: projectId }) 
            .populate('assignedTo', 'name email') 
            .select('title description dueDate'); 
 
        if (tasks.length === 0) { 
            return res.status(404).json({ 
                success: false, 
                message: 'No tasks found for this project.' 
            }); 
        } 
        const response = tasks.map(task => ({ 
            id: task._id, 
            title: task.title, 
            description: task.description, 
            dueDate: task.dueDate, 
            assignedTo: { 
                id: task.assignedTo._id, 
                name: task.assignedTo.name, 
                email: task.assignedTo.email 
            } 
        })); 
        res.status(200).json({ 
            success: true, 
            projectId: projectId, 
            projectName: project.name, 
            taskCount: tasks.length, 
            tasks: response 
        }); 
    } catch (err) { 
        console.error('Error fetching project tasks:', err); 
        res.status(500).json({ 
            success: false, 
            error: 'Server error while retrieving project tasks.', 
            details: err.message 
        }); 
    } 
}); 

// Question 3: GET project manager details 
router.get('/:projectId/manager', async (req, res) => { 
    const { projectId } = req.params; 
    // Validation for projectId 
    if (!mongoose.Types.ObjectId.isValid(projectId)) { 
        return res.status(400).json({ 
            success: false, 
            error: 'Invalid project ID format.' 
        }); 
    } 
    try { 
        const project = await 
Project.findById(projectId).populate('manager', 'name email'); 
        if (!project) { 
            return res.status(404).json({ 
                success: false, 
                message: 'Project not found.' 
            }); 
        } 
        if (!project.manager) { 
            return res.status(404).json({ 
                success: false, 
                message: 'Manager details not found for this project.' 
            }); 
        } 
        res.status(200).json({ 
            success: true, 
            projectName: project.name, 
            managerName: project.manager.name, 
            managerEmail: project.manager.email 
        }); 
    } catch (err) { 
        console.error('Error fetching manager details:', err); 
        res.status(500).json({ 
            success: false, 
            error: 'Server error while retrieving manager details.', 
            details: err.message 
        }); 
    } 
}); 

// Question 4:GET tasks and assigned users for a project 
router.get('/:projectId/tasks-users', async (req, res) => {
    const { projectId } = req.params;

    // Validate projectId format
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        return res.status(400).json({
            error: 'Invalid project ID format.'
        });
    }

    try {
        // Check if the project exists
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({
                error: 'Project not found.'
            });
        }

        // Find tasks by project ID and populate assigned user name
        const tasks = await Task.find({ project: projectId })
            .populate('assignedTo', 'name')
            .select('title assignedTo');

        if (tasks.length === 0) {
            return res.status(404).json({
                error: 'No tasks found for this project.'
            });
        }

        // Return only task name and user name
        const response = tasks.map(task => ({
            taskName: task.title,
            userName: task.assignedTo?.name || 'Unassigned'
        }));

        res.status(200).json(response);
    } catch (err) {
        console.error('Error retrieving tasks and users:', err);
        res.status(500).json({
            error: 'Server error while retrieving tasks and users.',
            details: err.message
        });
    }
});

module.exports = router;