var viewavgratinginflu = require("../model/review_model");
var express = require("express");
var router = express.Router();

router.get('/:id',function(req,res,next){
    viewavgratinginflu.viewavgratinginflu(req.params.id,function(err,rows){
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