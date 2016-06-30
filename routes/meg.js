var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var User = require('../models/user');

var router = express.Router();


//dummy-value get route. Dummy value meaning
//'hard coded' Millie
router.post('/', function(req, res) {
  var meg = new User({
    name: 'Meg',
    username: 'meg11',
    password: 'reallybadpassword'
  });

  meg.save(function(err) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('User saved successfully!');
      res.sendStatus(200);
    }
  });
});//end meg post route

module.exports = router;
