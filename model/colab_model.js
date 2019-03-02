var db=require('../dbconnection');

var colab={

    insertcolab:function(colab,callback){
        return db.query('insert into colab (fk_brandId,title,startDate,endDate,description,noInflu,ratingInflu,feesInflu,fbReach,instaReach,twitterReach,dueDate)values(?,?,?,?,?,?,?,?,?,?,?,?)',
        [colab.fk_brandId,colab.title,colab.startDate,colab.endDate,colab.description,colab.noInflu,colab.ratingInflu,colab.feesInflu,colab.fbReach,colab.instaReach,colab.twitterReach,colab.dueDate],callback);
    },

    getcolab:function(callback){
        return db.query('select * from colab',callback);
    },

    getcolabbyid:function(id,callback){
        return db.query('select * form colab where colabId=?',[id,callback]);
    },

    updatecolab:function(colab,id,callback){
        return db.query('update colab set fk_brandId=?, title=?, startDate=?, endDate=?, description=?, noInflu=?, ratingInflu=?, feesInflu=?, fbReach=?, instaReach=?, twitterReach=?, dueDate=? where colabId=?',
        [colab.fk_brandId,colab.title,colab.startDate,colab.endDate,colab.description,colab.noInflu,colab.ratingInflu,colab.feesInflu,colab.fbReach,colab.instaReach,colab.twitterReach,colab.dueDate,id],callback);
    },

    delcolab:function(id,callback){
        return db.query('delete from colab where colabId=?',[id],callback);
    },

    
}
module.exports=colab;
