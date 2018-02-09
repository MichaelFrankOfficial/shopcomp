var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('north-carolina', { title: "ShopCompOnline | Buy Work Comp Insurance in North Carolina",author: 'ShopCompOnline', activeLink: 'north-carolina' });
});

module.exports = router;