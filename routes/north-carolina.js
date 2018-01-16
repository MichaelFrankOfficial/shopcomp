var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('north-carolina', { title: "Buy Work Comp Insurance in North Carolina | ShopComp", activeLink: 'north-carolina' });
});

module.exports = router;