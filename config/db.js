// import mongoose
const mongoose = require('mongoose')

// connect the database
mongoose.connect(process.env.MONGODB_URL).then(()=>{
  console.log("database connected sucessfully")
}).catch((error)=>{
  console.log("something is wrong with your connection")
})