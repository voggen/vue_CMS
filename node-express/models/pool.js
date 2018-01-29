var mysql = require('mysql'); 
//创建一个池子，里面提供了很多连接
var pool =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: 'root',
    database:'dshui',
    port:'3306',
    connectionLimit:10 //限制同时最大连接数
});
module.exports = pool;