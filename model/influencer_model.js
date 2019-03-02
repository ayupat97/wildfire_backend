var db=require('../dbconnection');

var influencer={
    login:function(influ,callback){
        return db.query('select * from influencer where email=? and password=?',
        [influ.email,influ.password],callback);
    },

    signup:function(influ,callback){
        return db.query('insert into influencer (name,mobile,email,uname,password) values(?,?,?,?,?)',
        [influ.name,influ.mobile,influ.email,influ.uname,influ.password],callback);
    },

    addextrainfluinfo:function(influ,callback){
        return db.query('insert into influencer (profilePic,birthDate,gender,field1,field2,field3,fees,bio,profession) values(?,?,?,?,?,?,?,?,?)',
        [influ.profilePic,influ.birthDate,influ.gender,influ.field1,influ.field2,influ.field3,influ.fees,influ.bio,influ.profession],callback);
    },

    viewinflu:function(id,callback){
        return db.query('select * from influencer where influId=?',
        [id],callback);
    },

    editinflu:function(influ,id,callback){
        return db.query('update influencer set name=?,mobile=?,email=?,uname=?,password=?,proilePic=?,birthDate=?,gender=?,field1=?,field2=?,field3=?,fees=?,bio=?,profession=? where influId=?',
        [influ.name,influ.mobile,influ.email,influ.uname,influ.password,influ.profilePic,influ.birthDate,influ.gender,influ.field1,influ.field2,influ.field3,influ.fees,influ.bio,influ.profession,id],callback);
    }
}

module.exports=influencer;