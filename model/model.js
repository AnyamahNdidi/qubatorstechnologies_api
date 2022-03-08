// import mongoose for seamless connectivity
const mongoose = require('mongoose')
// create a schema
const dataSchema = mongoose.Schema({
  // defining the schema structure with it properties
  imageName : { 
    type:String,
    require:true
  },
  imageCate:{
    type:String,
    require:true
  },
  pic:{
    type:String,
    require:true
  }
})

// create a model
const dataModel = mongoose.model("mydata", dataSchema)

// export the model 
module.exports = dataModel;