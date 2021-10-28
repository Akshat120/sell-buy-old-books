const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const homeController = require('./controllers/homeController');

// home-route
router.get('/',homeController.home);
router.get('/books',homeController.books);
router.get('/buy',homeController.buy);
router.get('/sell',homeController.sell);
router.get('/login',homeController.login);
router.get('/register',homeController.register);

module.exports = router;
