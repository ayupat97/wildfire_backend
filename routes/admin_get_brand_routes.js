var admin = require("../model/admin_model");
var express = require("express");
var router = express.Router();

router.get("/:id",function(req,res,next){
    admin.getbrandbyid(req.params.id,function(err,rows){
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

router.get("/",function(req,res,next){
    admin.getallbrand(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
})

module.exports= router;