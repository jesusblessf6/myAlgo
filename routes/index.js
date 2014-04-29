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

module.exports = router;