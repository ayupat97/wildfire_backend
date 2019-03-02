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

   

    viewinflu:function(id,callback){
        return db.query('select * from influencer where influId=?',
        [id],callback);
    },

    updateinflubyemail:function(influ,id,callback){
        return db.query('update influencer set name=?,profilePic=?,birthDate=?,gender=?,mobile=?,uname=?,password=?,field1=?,field2=?,field3=?,fbLink=?,instaLink=?,twitterLink=?,fbReach=?,instaReach=?,twitterReach=?,fees=?,bio=?,profession=? where email=?',
        [influ.name,influ.profilePic,influ.birthDate,influ.gender,influ.mobile,influ.uname,influ.password,influ.field1,influ.field2,influ.field3,influ.fbLink,influ.instaLink,influ.twitterLink,influ.fbReach,influ.instaReach,influ.twitterReach,influ.fees,influ.bio,influ.profession,id],callback);
    },
    updateinfluimg:function(item,filename,callback){
        return db.query('update influencer set name=?,profilePic=?,birthDate=?,gender=?,mobile=?,uname=?,password=?,field1=?,field2=?,field3=?,fbLink=?,instaLink=?,twitterLink=?,fbReach=?,instaReach=?,twitterReach=?,fees=?,bio=?,profession=? where email=?',
        [influ.name,filename,influ.birthDate,influ.gender,influ.mobile,influ.uname,influ.password,influ.field1,influ.field2,influ.field3,influ.fbLink,influ.instaLink,influ.twitterLink,influ.fbReach,influ.instaReach,influ.twitterReach,influ.fees,influ.bio,influ.profession,id],callback);
    },
}

module.exports=influencer;