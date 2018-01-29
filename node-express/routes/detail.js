var express = require('express');
var router = express.Router();
var Detail = require('../models/detail')
var async  = require('async')

router.get('/DetailData', function(req, res, next) {
	var myDetail = new Detail();
	var p_id = req.query.p_id ? req.query.p_id :1
	async.parallel([
		function(cb){
			myDetail.getDetailData({p_id},function(result){
				cb(null,result)
			})	
		},
		function(cb){
			myDetail.getEvaluate({p_id},function(result){
				cb(null,result)
			})		
		}
	],function(err,results){
		res.send({
			ret:true,
			data:{
				info:results[0],
				evaluate:results[1]
			}
			
		})
	})
})

module.exports = router;