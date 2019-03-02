var admin = require("../model/admin_model");
var express = require("express");
var router = express.Router();

router.put("/:id", function(req, res, next) {
    admin.updateinflubyid(req.body, req.params.id, function(err, rows) {
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