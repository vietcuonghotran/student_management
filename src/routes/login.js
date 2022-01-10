
const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');


router.get('/login', loginController.login);
router.get('/', loginController.checkLogin);

module.exports = router;