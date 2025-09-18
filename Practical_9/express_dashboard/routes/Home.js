const express = require('express');
const router = express.Router();
const { getHomePage } = require('../controllers/HomeControllers');

router.get('/', getHomePage);

module.exports = router;
