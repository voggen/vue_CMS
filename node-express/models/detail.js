var pool = require('./pool');
//通过连接池连接数据库
class Detail {
	constructor(){}
	getDetailData(params,cb){
		const {p_id} = params;
		pool.getConnection(function(err,connection){
			if(err) throw err;
			var strQuery = `select * from product where p_id=${p_id}`;
			connection.query(strQuery,function(err,result){
				if(err) throw err;
				cb(result);
				//释放链接
				connection.release();
			})
		})
	}
	getEvaluate(params,cb){
		const {p_id} = params;
		pool.getConnection(function(err,connection){
			if(err) throw err;
			var strQuery = `select * from evaluate where p_id=${p_id}`;
			connection.query(strQuery,function(err,result){
				if(err) throw err;
				var strQuery1 = `select count(*) as total from evaluate where p_id=1`;
				connection.query(strQuery1,function(err,results){
					if(err) throw err;
					cb({
						result,
						totalNum:results[0].total
					});
					//释放链接
					connection.release();
				})	
			})
		})
	}
}	
module.exports = Detail;