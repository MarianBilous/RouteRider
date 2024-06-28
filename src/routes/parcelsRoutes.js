const express = require('express');
const parcelsController = require('../controllers/parcelsController');
const router = express.Router();

router.get('/all', parcelsController.getParcels);

module.exports = router;
