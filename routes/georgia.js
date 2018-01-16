var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('georgia', { title: "Buy Work Comp Insurance in Georgia | ShopComp", activeLink: 'georgia' });
});

module.exports = router;