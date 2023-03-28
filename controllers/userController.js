const User = require('../models/user')
const bcrypt = require("bcryptjs")
const UserBook = require('../models/userbook');

const jwt = require('jsonwebtoken');

exports.getAll = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  exports.signIn = async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    try {
      await user.save();
      const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, 'secret',{ expiresIn: '1h' });
      res.status(200).json({user, token});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };

  exports.logIn = async (req, res) => {
    const { email:myemail, password } = req.body;
    try{
     const user = await User.findOne({ email: myemail});
     if (!user){
      return res.status(400).json('Invalid Email or Password.')
     }
     const {password: passwordBody}= user; 
     const validPassword = await bcrypt.compare(password , passwordBody);
     if (!validPassword)
    {return res.status(400).json('Invalid Email or Password.')}
    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, 'secret');
    res.json({ token , user});
     
  }
    catch(err){
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };

  
exports.delete= async (req, res)=>{
  try{
    const exists = await UserBook.deleteMany({ users: req.user.id});
    const user = await User.findByIdAndDelete(req.user.id)
    
    res.json({message: "Account and book have been deleted"})
  }
  catch(err){
    res.json(err)
  }
 
  
 
}

  