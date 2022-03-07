const express = require("express")
const app = express()
const PORT = process.env.PORT || 2020

app.get("/", (req, res)=>{
  res.status(200).send("api is ready")
})

app.listen(PORT, ()=>{
  console.log(`this is my ${PORT}`)
})