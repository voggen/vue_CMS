var pool = require('./pool');
//通过连接池连接数据库
class User {
	constructor(){}
	getReg(params,cb){
		const {username,password} = params;
		pool.getConnection(function(err,connection){
			if(err) throw err;
			var strQuery = `select * from user where username='${username}'`;
			connection.query(strQuery,function(err,result){
				if(err) throw err;
				if(result.length){
					//用户名重复
					cb(0)
				}else{
					//可以注册
					var str = `insert into user(username,password) values('${username}','${password}')`;
					connection.query(str,function(err,result){
						if(err) throw err;
						cb(1)
					})
				}
				//释放链接
				connection.release();
			})
		})
	}
	getLogin(params,cb){
		const {username,password} = params;
		pool.getConnection(function(err,connection){
			if(err) throw err;
			var strQuery = `select * from user where username='${username}'`;
			connection.query(strQuery,function(err,result){
				if(err) throw err;
				if(!result.length){
					//用户不存在
					cb(0)
				}else{
					//用户存在
					if(password == result[0].password){
						//密码匹配
						cb(1)
					}else{
						//密码不匹配
						cb(2)
					}
				}
				cb(result);
				//释放链接
				connection.release();
			})
		})
	}
}	
module.exports = User;