var db=require('../dbconnection');

var review={

    viewavgratinginflu:function(id,callback){
        return db.query('select AVG(rating) from reviewinflu where fk_influId=?',
        [id],callback);
    },

    viewavgratingbrand:function(id,callback){
        return db.query('select AVG(rating) from reviewbrand where fk_brandId=?',
        [id],callback);
    },

    viewinfluofcolab:function(id,callback){
        return db.query('select r.*,i.name from reviewinflu r and influencer i where r.fk_influId=i.influId and where fk_colabId=?',
        [id,callback]);
    }
}

module.exports=review;