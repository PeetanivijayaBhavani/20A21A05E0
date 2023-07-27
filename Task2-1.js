var mysql=require('mysql');
var con=mysql.createConnection({
    Host:"localhost",
    User:"root",
    Password:"",
    Database:"Nodejs"
});
con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    con.query("CREATE DATABASE nodejs",function (err,res){
        if(err) throw err;
        console.log("Database created");
    });
    var sql="Create table student(id primarykey ,name VARCHAR(255),department VARCHAR(100),salary decimal(10,2))";
    con.query(sql,function(err){
        if(err) throw err;
        console.log("Table created");
    });
    

})