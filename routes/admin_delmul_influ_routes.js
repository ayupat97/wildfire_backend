var admin = require("../model/admin_model");
var express = require("express");
var router = express.Router();

router.post("/",function(req,res,next){ 
    admin.deletemulinflu(req.body,function(err,rows){
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
module.exports=router;