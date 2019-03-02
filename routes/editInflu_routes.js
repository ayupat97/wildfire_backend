var editInflu = require("../model/influencer_model");
var express = require("express");
var router = express.Router();

router.put("/:id", function(req, res, next) {
    editInflu.editinflu(req.body,req.params.id, function(err, rows) {
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

module.exports=router;