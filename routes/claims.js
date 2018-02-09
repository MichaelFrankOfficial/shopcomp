var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('claims', { title: "ShopCompOnline | Have a Claim?",author: 'ShopCompOnline' , activeLink: 'claims' });
});

module.exports = router;