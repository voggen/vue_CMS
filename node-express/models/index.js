var pool = require('./pool');
//通过连接池连接数据库
class Index {
	constructor(){}
	getIndexAdData(params,cb){
		pool.getConnection(function(err,connection){
			if(err) throw err;
			var strQuery = `select * from ad`;
			connection.query(strQuery,function(err,result){
				if(err) throw err;
				cb(result);
				//释放链接
				connection.release();
			})
		})
	}
	getIndexNoticeData(params,cb){
		pool.getConnection(function(err,connection){
			if(err) throw err;
			var strQuery = `select * from notice`;
			connection.query(strQuery,function(err,result){
				if(err) throw err;
				cb(result);
				//释放链接
				connection.release();
			})
		})
	}
	getIndexRecomData(params,cb){
		pool.getConnection(function(err,connection){
			if(err) throw err;
			var strQuery = `select * from recomd`;
			connection.query(strQuery,function(err,result){
				if(err) throw err;
				cb(result);
				//释放链接
				connection.release();
			})
		})
	}
	getIndexHotData(params,cb){
		const {pageNo,pageSize}  = params;
		console.log(pageSize,pageNo);
		pool.getConnection(function(err,connection){
			if(err) throw err;
			var start = (pageNo-1)*pageSize
			var strQuery = `select * from hot limit ${start},${pageSize}`;
			connection.query(strQuery,function(err,result){
				if(err) throw err;
				connection.query("select count(*) as total from hot",function(err,results){
                    cb({
                        result,
                        totalPage:results[0].total,
                        tit:'超值热卖'
                    })
                    connection.release()
                })
			})
		})
	}
}
module.exports = Index;