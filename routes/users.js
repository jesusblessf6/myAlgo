var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('respond with a resource');
});

// Get Sign up page
router.get('/signup', function(req, res) {
    res.render('signup', {
        title: '注册',
        action:'signup'
    });
});

//Post Sign up
router.post('/signup', function(req, res){
	//console.log("post sign up info" + req.body.loginName);
	
});

module.exports = router;