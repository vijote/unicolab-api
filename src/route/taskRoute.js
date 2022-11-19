const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();

const task = new TaskController();

router.get('/:careerPathId', task.getAllByCareerPathId);

module.exports = router;
