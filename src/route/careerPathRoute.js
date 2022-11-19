const express = require('express');
const CareerPathController = require('../controllers/CareerPathController');

const router = express.Router();

const careerPath = new CareerPathController();

router.get('/', careerPath.getAllCareerPaths);

module.exports = router;
