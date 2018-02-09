var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('south-carolina', { title: "ShopCompOnline | Buy Work Comp Insurance in South Carolina",author: 'ShopCompOnline', activeLink: 'south-carolina' });
});

module.exports = router;