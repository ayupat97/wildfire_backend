var db = require('../dbconnection');

var admin={

    login:function(item,callback){
        return db.query('select * from admin where email=? and password=?',[item.email,item.password],callback);
    },
    getadminbyid:function(e_id,callback){
        return db.query('select * from admin where email=?',[e_id],callback);
    },
    addadmin:function(admin,callback){
        return db.query('insert into admin (email,password,name,mobile) values(?,?,?,?)',
        [admin.email,admin.password,admin.name,admin.mobile],callback);
    },
    updateadminbyid:function(admin,id,callback){
        return db.query('update admin set email=?,password=?,name=?,mobile=? where adminId=?',
        [admin.email,admin.password,admin.name,admin.mobile,id],callback);
    },
    delinflu:function(id,callback){
        return db.query('delete from influencer where influId=?',[id],callback);
    },
    deletemulinflu:function(item,callback){
        var del_arr=[];
        for(i=0;i<item.length;i++)
        {
          del_arr[i]=item[i].influId;
        }
        return db.query("delete from influencer where influId in (?)",[del_arr],callback);
      },
    addinflu:function(influ,callback){
        return db.query('insert into influencer (name,profilePic,birthDate,gender,mobile,email,uname,password,field1,field2,field3,fbLink,instaLink,twitterLink,fbReach,instaReach,twitterReach,fees,bio,profession) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [influ.name,influ.profilePic,influ.birthDate,influ.gender,influ.mobile,influ.email,influ.uname,influ.password,influ.field1,influ.field2,influ.field3,influ.fbLink,influ.instaLink,influ.twitterLink,influ.fbReach,influ.instaReach,influ.twitterReach,influ.fees,influ.bio,influ.profession],callback);
    },
    getinflubyid:function(id,callback){
      return db.query("select * from influencer where influId=?",[id],callback);
    },
    getallinflu:function(callback){
        return db.query('select * from influencer',callback);
    },
    updateinflubyid:function(influ,id,callback){
        return db.query('update influencer set name=?,profilePic=?,birthDate=?,gender=?,mobile=?,email=?,uname=?,password=?,field1=?,field2=?,field3=?,fbLink=?,instaLink=?,twitterLink=?,fbReach=?,instaReach=?,twitterReach=?,fees=?,bio=?,profession=? where influId=?',
        [influ.name,influ.profilePic,influ.birthDate,influ.gender,influ.mobile,influ.email,influ.uname,influ.password,influ.field1,influ.field2,influ.field3,influ.fbLink,influ.instaLink,influ.twitterLink,influ.fbReach,influ.instaReach,influ.twitterReach,influ.fees,influ.bio,influ.profession,id],callback);
    },
    delbrand:function(id,callback){
        return db.query('delete from brand where brandId=?',[id],callback);
    },
    deletemulbrand:function(item,callback){
        var del_arr=[];
        for(i=0;i<item.length;i++)
        {
          del_arr[i]=item[i].brandId;
        }
        return db.query("delete from brand where brandId in (?)",[del_arr],callback);
    },
    addbrand:function(brand,callback){
        return db.query('insert into brand (name,profilePic,email,uname,password,field,bio,fbLink,instaLink,twitterLink) values(?,?,?,?,?,?,?,?,?,?)',
        [brand.name,brand.profilePic,brand.email,brand.uname,brand.password,brand.field,brand.bio,brand.fbLink,brand.instaLink,brand.twitterLink],callback);
    },
    getbrandbyid:function(id,callback){
      return db.query("select * from brand where brandId=?",[id],callback);
    },
    getallbrand:function(callback){
        return db.query('select * from brand',callback);
    },
    updatebrandbyid:function(brand,id,callback){
        return db.query('update brand set name=?,profilePic=?,email=?,uname=?,password=?,field=?,bio=?,fbLink=?,instaLink=?,twitterLink=? where brandId=?',
        [brand.name,brand.profilePic,brand.email,brand.uname,brand.password,brand.field,brand.bio,brand.fbLink,brand.instaLink,brand.twitterLink,id],callback);
    },

    delfield:function(id,callback){
        return db.query('delete from field where f_id=?',[id],callback);
    },
    deletemulfield:function(item,callback){
        var del_arr=[];
        for(i=0;i<item.length;i++)
        {
          del_arr[i]=item[i].f_id;
        }
        return db.query("delete from field where f_id in (?)",[del_arr],callback);
    },
    addfield:function(field,callback){
        return db.query('insert into field (f_name,image) values(?,?)',
        [field.f_name,field.image],callback);
    },
    getfieldbyid:function(id,callback){
      return db.query("select * from field where f_id=?",[id],callback);
    },
    getallfield:function(callback){
        return db.query('select * from field',callback);
    },
    updatefieldbyid:function(field,id,callback){
        return db.query('update field set f_name=?,image=? where f_id=?',
        [field.f_name,field.image,id],callback);
    }
}

module.exports=admin;
