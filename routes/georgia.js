var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('georgia', { title: "ShopCompOnline | Buy Work Comp Insurance in Georgia",author: 'ShopCompOnline', activeLink: 'georgia' });
});

module.exports = router;