const express = require('express');
const router = express.Router();
const {getCurrentUser} = require('../controllers/userController');

router.use('/getCurrentUser',getCurrentUser);

module.exports = router;