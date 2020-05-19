var express = require('express');
var router = express.Router();
var socket;
var io = require('socket.io-client');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Senior Design Lab 1' });
});

module.exports = router;



