// import dotenv to help protect sensitive data
const dotenv = require('dotenv')
// configure dotenv module
dotenv.config()
// import the database
require("./config/db")

// import express module
const express = require("express")
// initiate express server
const app = express()
// define a port
const PORT = process.env.PORT || 2022

const cors = require('cors')

// use express middleware to posting of date
app.use(express.json())
// create a default route
app.use(cors())
app.use("/api", require("./router/router"))
// connect the server to a port
app.listen(PORT, ()=>{
  console.log(`this is my ${PORT}`)
})