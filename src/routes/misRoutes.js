const express = require('express');
const router = express.Router();

const misRoutesController = require('../controller/misRoutesController');

router
    //
    .get('/',misRoutesController.getIndex)
    .get('/registro', misRoutesController.get)

module.exports = router;