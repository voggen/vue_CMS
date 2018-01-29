var express = require('express');
var router = express.Router();
var User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/reg', function(req, res, next) {
	var myUserReg = new User();
	//var username = req.body.username ? req.body.username : 'fangs';
	//var password = req.body.password ? req.body.password : '123';
	const {username,password} = req.body
	myUserReg.getReg({username,password},function(code){
		var message = {
  			info: code==1 ? '注册成功' :'用户名重复'
  		}
		res.send({
			code:code,
			msg:message.info
		});
	})
});

router.post('/login', function(req, res, next) {
	var myUserLogin = new User();
	const {username,password} = req.body
	//var username = req.body.username ? req.body.username : 'fang';
	//var password = req.body.password ? req.body.password : '1231';
  	myUserLogin.getLogin({username,password},function(code){
  		var message = {
  			info: code==1 ? '登录成功' : code==0 ? '用户名不存在' : '用户名密码不匹配'
  		}
		res.send({
			code:code,
			msg:message.info
		});
	})
});

module.exports = router;
