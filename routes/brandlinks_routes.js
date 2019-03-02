var brandlinkMangement=require('../model/media_model');
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    brandlinkMangement.addbrandlinks(req.body,function(err,rows){
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

router.put("/:id", function(req, res, next) {
    brandlinkMangement.editbrandlinks(req.body,req.params.id, function(err, rows) {
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