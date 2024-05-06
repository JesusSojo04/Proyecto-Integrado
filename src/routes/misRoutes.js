const express = require('express');
const router = express.Router();

const misRoutesController = require('../controller/misRoutesController');

router
    //
    .get('/',misRoutesController.getIndex)
    .get('/sign-up', misRoutesController.getSignUp)
    .get('/log-in', misRoutesController.getLogIn)

module.exports = router;