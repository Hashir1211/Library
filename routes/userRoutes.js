const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

const {verifyToken}= require('../middlewares/middleware');


router.post('/signup', UserController.signIn);
router.post('/signin', UserController.logIn);

router.delete('/', verifyToken, UserController.delete)

module.exports = router;