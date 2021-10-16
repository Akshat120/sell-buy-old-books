const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const homeController = require('./controllers/homeController');

// home-route
router.get('/',homeController.home);

module.exports = router;
