var colab = require("../model/colab_model");
var express = require("express");
var router = express.Router();

router.put("/:id", function(req, res, next) {
    colab.updatecolab(req.body, req.params.id, function(err, rows) {
      if (err) 
      {
        res.json(err);
      } 
      else 
      {
        res.json(rows);
      }
    });
  });

  module.exports = router;