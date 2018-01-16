var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('employee-or-independent-contractor', { title: "Employee or Independent Contractor | ShopComp", activeLink: 'employee-or-independent-contractor' });
});

module.exports = router;