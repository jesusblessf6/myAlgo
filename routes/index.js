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

module.exports = router;