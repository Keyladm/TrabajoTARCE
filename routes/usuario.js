var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('usuario', { title: 'Hotel Gran Canaria' });
});

module.exports = router;
