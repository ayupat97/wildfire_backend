var viewBrand = require("../model/brand_model");
var express = require("express");
var router = express.Router();

router.get('/:id',function(req,res,next){
    viewBrand.viewBrand(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows)
        }
    });
});

module.exports = router;