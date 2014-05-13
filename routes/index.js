var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: '首页',
        action: 'index'
    });
});

// Get Sign up page
router.get('/signup', function(req, res) {
    res.render('signup', {
        title: '注册',
        action:'signup'
    });
});

// get sign in page
router.get('/signin', function(req, res) {
    res.render('signin', {
        title: "登录",
        action: 'signin'
    });
});

//goto the algorithm page
router.get('/algos', function(req, res) {
    res.render('algos', {
        title: '我的算法',
        action:'algos'
    });
});

//about us
router.get('/about', function(req,res){
    res.render('about', {
        title: '关于我们',
        action: 'about'
    });
});

module.exports = router;