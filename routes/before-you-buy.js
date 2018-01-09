var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('before-you-buy', { title: "Before You Buy", activeLink: 'before-you-buy' });
});

module.exports = router;