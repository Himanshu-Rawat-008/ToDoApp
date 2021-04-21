const express = require('express');

// extracting Schema
const List = require('../models/list.js');


const router = express.Router();
const homeController = require('../controllers/homeController');

// set up path to view controller
router.get('/', homeController.home);

// get url to show the b

module.exports = router;