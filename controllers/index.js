var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Basic Node/Express/Webpack/React/Compass setup' });
});

module.exports = router;
