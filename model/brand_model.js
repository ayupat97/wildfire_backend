var db=require('../dbconnection');

var brand={
    login:function(brand,callback){
        return db.query('select * from brand where email=? and password=?',
        [brand.email,brand.password],callback);
    },

    signup:function(brand,callback){
        return db.query('insert into brand (name,email,uname,password) values(?,?,?,?)',
        [brand.name,brand.email,brand.uname,brand.password],callback);
    },

    addextrabrandinfo:function(brand,callback){
        return db.query('insert into brand (profilePic,field,bio) values(?,?,?)',
        [brand.profilePic,brand.field,brand.bio],callback);
    },

    viewBrand:function(id,callback){
        return db.query('select * from brand where brandId=?',
        [id],callback);
    },

    editbrand:function(brand,id,callback){
        return db.query('update brand set name=?,email=?,uname=?,password=?,proilePic=?,field=?,bio=? where brandId=?',
        [brand.name,brand.email,brand.uname,brand.password,brand.profilePic,brand.field,brand.bio,id],callback);
    },
}

module.exports=brand;