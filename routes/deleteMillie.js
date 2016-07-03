var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var User = require('../models/user');

var router = express.Router();

/**
  Thought: How could you make this route delete any user?
  It will need to take something to uniquely identify the user.
  This should be passed in the URL. For ex: localhost:3000/delete/<id>
**/
// delete Millie route
router.delete('/', function(req, res) {
  console.log('delete route');

  User.findOne({username: 'millie11'}, function(err, userResult) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      User.remove({_id: userResult._id}, function(err) {});
      res.sendStatus(200);
    }
  });
});// end delete route

module.exports = router;
