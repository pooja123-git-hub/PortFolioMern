// routes/portfolioRoute.js
const express = require('express');
const router = express.Router();
const { sendMailController } = require('../controllers/portfolioController');

router.post('/', sendMailController); // Correct

module.exports = router;
