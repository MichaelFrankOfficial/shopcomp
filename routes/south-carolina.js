var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('south-carolina', { title: "Buy Work Comp Insurance in South Carolina | ShopComp", activeLink: 'south-carolina' });
});

module.exports = router;