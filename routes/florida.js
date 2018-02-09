var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('florida', { title: "ShopCompOnline | Buy Work Comp Insurance in Florida",author: 'ShopCompOnline', activeLink: 'florida' });
});

module.exports = router;