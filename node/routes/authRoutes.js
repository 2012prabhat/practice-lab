const express = require('express');
const router = express.Router();
const {login,register} = require('../controllers/authController');

router.use('/login',login);
router.use('/register',register);

module.exports = router