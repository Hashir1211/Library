const express = require('express');
const router = express.Router();

const UserBookController = require('../controllers/userBookController');

const {verifyToken}= require('../middlewares/middleware');

router.get('/users',verifyToken, UserBookController.getAll);
router.post('/users/:id',verifyToken, UserBookController.addStatus);
router.put('/users/:id',verifyToken, UserBookController.updateStatus);
module.exports = router;