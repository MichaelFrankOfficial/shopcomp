var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('why-shop-comp', { title: "Why ShopComp", activeLink: 'why-shop-comp' });
});

module.exports = router;