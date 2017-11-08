const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const markerRoute = require("./routes/spot");
const PORT = 8000
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/markers", markerRoute)

mongoose.connect("mongodb://localhost/photos", ()=>{
  console.log("connected to mongodb")
  app.listen(PORT, ()=>{
    console.log("Listening On: " + PORT)
  })
})

