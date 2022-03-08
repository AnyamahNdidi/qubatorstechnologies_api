// import the model
const mySchema = require("../model/model")
// import path for getting the extension name of uploaded images
const path = require("path")
// import cloudinary for cloud storage
const cloudinary = require("cloudinary")

// configure cloudinary
cloudinary.config({
  cloud_name: "ndtech",
  api_key:"325692748593977",
  api_secret:"umNXDmlZgBcvD-DrYhwoehT0HDM"
})

// funtion to get all data
const getAll = async (req, res)=>{
  try{
    // variable that holds all data
    const getAllData = await mySchema.find()
    // show response data
    res.status(200).json({
      message:"all data found",
      data:getAllData
    })

  }catch(err){
    // send error message
    res.status(400).json({message:err.message})
  }

}

// function to get a single data
const getSingle = async (req, res)=>{
  try{
    // variable to hold a single data
    const getAllData = await mySchema.findById(req.params.id)
    // send response of data to the client
    res.status(200).json({
      message:"data found",
      data:getAllData
    })

  }catch(err){
    // send error response
    res.status(400).json({message:err.message})
  }

}

// create a function to add data
const postOne = async (req, res)=>{
   try{
    //  extract keys from the body object
     const {imageName, imageCate, pic} = req.body

    //  upload image to cloudinary and store it on image variable
      const image = await cloudinary.uploader.upload(req.file.path)
      // create new object
     const createData = await mySchema.create({
       imageName,
       imageCate,
       pic:image.secure_url
     })
    //  send success response to the client
     res.status(201).json({
       message:"data created",
       data:createData
     })


   }catch(error){
    //  send error message
    res.status(400).json({message:error.message})
   }
}

// search function
const searchItem = async (req, res)=>{
  // checks if there is a seach made
  const keyword = req.query.search ?
  { 
    $or:[
      // search options to be made
     {imageName: {$regex:req.query.search, $options:"i"}},
     {imageCate: {$regex:req.query.search, $options:'i'}},
    ]
  }:{}
  // search by parameter passed to the url
  const dataBy = await mySchema.find(keyword)
  res.status(200).send(dataBy)
}


// export all functions
module.exports = {
  getAll,
  postOne,
  getSingle,
  searchItem
}