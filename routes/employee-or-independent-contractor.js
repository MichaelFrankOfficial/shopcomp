var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('employee-or-independent-contractor', { title: "ShopCompOnline | Employee or Independent Contractor",author: 'ShopCompOnline', activeLink: 'employee-or-independent-contractor' });
});

module.exports = router;