const express = require('express');
const router = express.Router();

const ctrlVideo = require('../controllers/video.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlVideo.material);

module.exports = router;



