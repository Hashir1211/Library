const express = require('express');
const router = express.Router();

const BookController= require('../controllers/bookController');
const {verifyToken}= require('../middlewares/middleware');


router.get('/all',verifyToken, BookController.getAll);
router.post('/create',verifyToken, BookController.create);

module.exports = router;