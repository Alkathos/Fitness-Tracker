const router = require('express').Router();
const db = require('../server');
const morgan = require('morgan');

router.get("/", (req, res) => {
    res.send("");
  });
  
  router.get("/all", (req, res) => {
    db.animals.find({}, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
  });