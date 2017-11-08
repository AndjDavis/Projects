const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MarkerSchema = new Schema({
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  defaultAnimation: {
    type: Number, 
    default: 2
  },
  season: String,
  imgUrl: [String],
  additionalInfo: String
})

const MarkerModel = mongoose.model("markers", MarkerSchema);
module.exports = MarkerModel;