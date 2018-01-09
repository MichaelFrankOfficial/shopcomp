var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('claims', { title: "Claims", activeLink: 'claims' });
});

module.exports = router;