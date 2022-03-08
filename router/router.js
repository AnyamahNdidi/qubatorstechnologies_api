// import express
const express = require("express")
// import router
const route = express()
// import multer for local storage
const multer = require("multer")
// import path
const path = require("path")

// import all functions from the controller module
const {getAll, postOne, getSingle, searchItem} = require("../controller/contoller")

// import diskstorage from multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

// upload function for images
const upload = multer({ storage: storage }).single("image")

// create all routes
// GET:: get all 
route.get("/all",  getAll)
route.post("/post",upload, postOne )
// GET:: get one by id
route.get("/:id", getSingle)
// GET:: get entery message
route.get("/", searchItem)

// export the routes
module.exports = route