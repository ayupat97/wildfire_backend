var influ=require('../model/influencer_model');
var express=require('express');
var router=express.Router();
var multer=require('multer');
var path=require('path');

var storage=multer.diskStorage({
    destination:(req,file,cb)=> {
        cb(null,'public/images/influimg')
    },
    filename: (req,file,cb) => {
        x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
        cb(null,file.fieldname + '-' + Dae.now()+path.extname(file.originalname))
    }
});
    var upload=multer({storage:storage});

    router.put('/',upload.single('image'),function(req,res,next){
        influ.updateinfluimg(req.body,req.file.filename,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    });
module.exports=router;
