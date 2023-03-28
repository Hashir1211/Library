const jwt = require('jsonwebtoken');
const User = require('../models/user')

exports.verifyToken=async(req, res, next)=>{
    const {authorization : token} = req.headers;

    if (!token) {
      return res.status(401).json({ message: 'Token is missing' });
    }
    try {
      const userData = jwt.verify(token, 'secret');
      const result = await User.findById(userData.id)
      console.log(result);
      if (result){
      req.user = userData;
    }
    else{
      throw err
    }
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }