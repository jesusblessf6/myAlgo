var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Express'
    });
});

// Get Sign up page
router.get('/signup', function(req, res) {
    res.render('signup', {
        title: '注册'
    });
});

// get sign in page
router.get('/signin', function(req, res) {
    res.render('signin', {
        title: "登录"
    });
});

//goto the algorithm page
router.get('/algos', function(req, res) {
    res.render('algos', {
        title: '我的算法'
    });
});

module.exports = router;