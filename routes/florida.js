var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('florida', { title: "Buy Work Comp Insurance in Florida | ShopComp", activeLink: 'florida' });
});

module.exports = router;