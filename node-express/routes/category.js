var express = require('express');
var router = express.Router();
var CateGory = require('../models/category')

router.get('/lefttab', function(req, res, next) {
	var myCateGoryLeft = new CateGory();
	myCateGoryLeft.getCategoryLeftData(function(result){
		res.send({
			ret:true,
			data:result
		})
	})
});

router.get('/rightList', function(req, res, next) {
	var parentId = req.query.parent_id ? req.query.parent_id : 1
	var myCateGoryRight = new CateGory();
	myCateGoryRight.getCategoryRightData({parentId},function(result){
		res.send({
			ret:true,
			data:result
		})
	})
});

router.get('/classData', function(req, res, next) {
	const pageNo = req.query.pageNo ? parseInt(req.query.pageNo, 10) : 1; //页码不传默认第一页
	const pageSize = req.query.pageSize ? parseInt(req.query.pageSize, 10) : 4; //显示商品条数不传默认4条
	const class_id = req.query.class_id ? parseInt(req.query.class_id, 10) : '';	//商品分类id
	const sort = req.query.sort ? req.query.sort : ''; //排序
	const keyWords = req.query.keyWords ? req.query.keyWords : ''; //关键字
	const myClass = new CateGory();
	myClass.getClassData({class_id,pageNo,pageSize,sort,keyWords},function(result){
		res.send({
			ret:true,
			data:result
		})
	})
});

router.post('/addClass', function(req, res, next) {
	const parent_id = req.body.parent_id ? req.body.parent_id :'';
	const cateName = req.body.cateName
	const catePic = req.body.catePic ? req.body.catePic : ''
	var myAddCate = new CateGory();
	if(parent_id === ''){
		myAddCate.addPClass({cateName,parent_id,catePic},function(err){
			res.send({
				code:err?0:1
			})
		})	
	}else{
		myAddCate.addCClass({cateName,parent_id,catePic},function(err){
			res.send({
				code:err?0:1
			})
		})	
	}
	
})

module.exports = router;