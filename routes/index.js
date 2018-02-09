var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ShopCompOnline | Where Small Businesses Buy Workers Compensation Insurance', author: 'ShopCompOnline', activeLink: 'index' });
});

module.exports = router;