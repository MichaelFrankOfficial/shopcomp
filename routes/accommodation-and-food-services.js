var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('accommodation-and-food-services', { title: "ShopCompOnline | Workers Compensation in Accommodation & Food Services",author: 'ShopCompOnline', activeLink: 'construction-and-trade-contractors' });
});

module.exports = router;