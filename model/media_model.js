var db=require('../dbconnection');

var media={

    addbrandlinks:function(bmedia,callback){
        return db.query('insert into mediabrand values (?,?,?)',
        [bmedia.fbLink,bmedia.instaLink,bmedia.twitterLink],callback);
    },

    editbrandlinks:function(bmedia,id,callback){
        return db.query('update mediabrand set fbLink=?,instaLink=?,twitterLink=?',
        [bmedia.fbLink,bmedia.instaLink,bmedia.twitterLink,id],callback);
    }


}

module.exports=media;