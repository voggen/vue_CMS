var pool = require('./pool');
//通过连接池连接数据库
class CateGory {
	constructor(){}
	getCategoryLeftData(cb){
		pool.getConnection(function(err,connection){
			if(err) throw err;
			var strQuery = `select * from category`;
			connection.query(strQuery,function(err,result){
				if(err) throw err;
				cb(result);
				//释放链接
				connection.release();
			})
		})
	}
	getCategoryRightData(params,cb){
		const {parentId} = params;
		pool.getConnection(function(err,connection){
			if(err) throw err;
			var strQuery = `select * from class where class.parent_id = ${parentId}`;
			connection.query(strQuery,function(err,result){
				if(err) throw err;
				cb(result);
				//释放链接
				connection.release();
			})
		})
	}
	getClassData(params,cb){
		const {class_id,pageNo,pageSize,sort,keyWords} = params;
		console.log(sort)
		pool.getConnection(function(err,connection){
			if(err) throw err;
			var start = (pageNo-1)*pageSize
				if(sort == 1){
					var strQuery = `select * from product where class_id=${class_id} order by sales_volume desc limit ${start},${pageSize}`;
				}
				if(sort == 2){
					var strQuery = `select * from product where class_id=${class_id} order by price asc limit ${start},${pageSize}`;
				}
				if(sort == 3){
					var strQuery = `select * from product where class_id=${class_id} order by price desc limit ${start},${pageSize}`;
				}
				if(!sort){
					var strQuery = `select * from product where class_id=${class_id} limit ${start},${pageSize}`;
				}
				if(!class_id){
					var strQuery = `select * from product limit ${start},${pageSize}`;
				}
				if(keyWords){
					var strQuery = `select * from product where  p_name like '%${keyWords}%' limit ${start},${pageSize}`;
				}
			connection.query(strQuery,function(err,result){
				if(err) throw err;
				var strQuery1 = "select count(*) as total from product where class_id="+class_id;
				if(!class_id){
					var strQuery1 = "select count(*) as total from product";
				}
				connection.query(strQuery1,function(err,results){
					cb({
						result,
						total_num:results[0].total
					});
				//释放链接
				connection.release();
				})
			})
		})
	}
	addPClass(params,cb){
		const {cateName,parent_id,catePic} = params;
		pool.getConnection(function(err,connection){
            if(err) throw err;
            var strQuery = `insert into category(name,parent_id,img_url) values('${cateName}','${parent_id}','${catePic}')`
            connection.query(strQuery,function(err){
                cb(err)
                //释放连接
                connection.release()
            })
        })
	}
	addCClass(params,cb){
		const {cateName,parent_id,catePic} = params;
		pool.getConnection(function(err,connection){
            if(err) throw err;
            var strQuery = `insert into class(name,parent_id,imgUrl) values('${cateName}','${parent_id}','${catePic}')`
            connection.query(strQuery,function(err){
                cb(err)
                //释放连接
                connection.release()
            })
        })
	}
}
module.exports = CateGory;