var admin = require("../model/admin_model");
var express = require("express");
var router = express.Router();

router.get("/:e_id",function(req,res,next){
    admin.getadminbyid(req.params.e_id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports= router;