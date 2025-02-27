const express = require('express');
const TestController = require('../controller/TestController');

const router = express.Router();

router.post('/test/regi', TestController.postRequest);
router.get('/test/show', TestController.getRequest);

module.exports = router;