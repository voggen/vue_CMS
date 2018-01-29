var express = require('express');
var router = express.Router();
var Index = require('../models/index')
var async  = require('async')

router.get('/IndexData', function(req, res, next) {
	var myIndexAd = new Index();
	var myIndexNotice = new Index();
	var myIndexRecom = new Index();
	var myIndexHot = new Index();
	const pageNo = req.query.pageNo ? parseInt(req.query.pageNo, 10) : 1;
	const pageSize = req.query.pageSize ? parseInt(req.query.pageSize, 10) : 2;
	async.parallel([
		function(cb){
			myIndexAd.getIndexAdData({},function(result){
				cb(null,result)
			})	
		},
		function(cb){
			myIndexNotice.getIndexNoticeData({},function(result){
				cb(null,result)
			})		
		},
		function(cb){
			myIndexRecom.getIndexRecomData({},function(result){
				cb(null,result)
			})			
		},
		function(cb){
			myIndexHot.getIndexHotData({pageNo,pageSize},function({result,totalPage,tit}){
				cb({pageNo,pageSize},{result,totalPage,tit})
			})				
		}	
	],function(err,results){
		console.log(results)
		res.send({
			ret:true,
			data:{
				ads:results[0],
				notice:results[1],
				recomd:results[2],
				hot:results[3]
			}
			
		})
	})
});
module.exports = router;
