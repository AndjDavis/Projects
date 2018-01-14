const express = require("express");
const MarkerModel = require("../models/spot.js");
const markerRoute = express.Router();

markerRoute.route("/")
  .get((req, res) => {
    MarkerModel.find((err, marker) => {
      if (err) {
        res.status(500).send(err)
      } else if (marker.length === 0) {
        res.status(404).send({ message: "NOT FOUND", data: marker })
      } else {
        res.status(200).send({ message: "SUCCESSFULL GET", data: marker })
      }
    })
  })
  .post((req, res) => {
    let marker = new MarkerModel(req.body);
    marker.save((err, marker) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(201).send({ message: "SUCCESSFUL POST", data: marker })
      }
    })
  })

markerRoute.route("/:id")
  .delete((req, res) => {
    MarkerModel.findByIdAndRemove(req.params.id, (err, marker) => {
      if (err) {
        res.statusCode(500).send(err)
      } else if (marker === null) {
        res.status(404).send({ message: "POST NOT FOUND", data: null })
      } else {
        res.status(200).send({ message: "SUCCESSFUL DELETE", data: marker })
      }
    })
  })
  .get((req, res) => {
    MarkerModel.findById(req.params.id, (err, marker) => {
      if (err) {
        res.status(500).send(err)
      } else if (marker === null) {
        res.status(404).send({ message: "POST NOT FOUND", data: null })
      } else {
        res.status(200).send({ message: "SUCCESSFULL GET", data: marker })
      }
    })
  })
  .put((req, res) => {
    MarkerModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, marker)=>{
      if(err) {
        res.status(500).send(err)
      } else if (marker === null) {
        res.status(404).send({ message: "ID NOT FOUND", data: null })
      } else {
        res.status(201).send({message: "SUCCESSFULL PUT", data: marker})
      }
    })
  })


module.exports = markerRoute;
