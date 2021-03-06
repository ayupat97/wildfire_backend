var colab = require("../model/colab_model");
var express = require("express");
var router = express.Router();

router.get("/:id",function(req,res,next){
    colab.getcolabbyid(req.params.id,function(err,rows){
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
    colab.getcolab(function(err,rows){
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