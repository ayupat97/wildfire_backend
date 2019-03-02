var mysql=require('mysql');
var conn=mysql.createPool({

    host:'localhost',
    user:'root',
    password:'',
    database:'wildfire'
});

module.exports=conn;