var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('respond with a resource');
});

router.get('/signin', function(req, res){
	res.render('signin', {title: '登陆',
	action:'signin'});
});

module.exports = router;