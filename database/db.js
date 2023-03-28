const dbUrl="mongodb://localhost:27017/test"
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
const connection = mongoose.connect(dbUrl).then((dbo)=>{
    console.log("DB connected")
  },(err)=>{
    console.log("error")
  });



module.exports = connection;
