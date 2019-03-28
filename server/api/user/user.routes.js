const controller = require('./user.controller');
const express = require('express');
const router = express.Router();

router.get('/', controller.test)
router.get('/users', controller.allUsers)
router.get('/user/email/:email', controller.getUserByEmail)


module.exports = router;