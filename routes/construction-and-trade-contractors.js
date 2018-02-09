var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('construction-and-trade-contractors', { title: "ShopCompOnline | Workers Compensation in Construction & Trade Contractors",author: 'ShopCompOnline', activeLink: 'construction-and-trade-contractors' });
});

module.exports = router;