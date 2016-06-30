var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var User = require('../models/user');

var router = express.Router();


//dummy-value get route. Dummy value meaning
//'hard coded' Millie
router.post('/millie', function(req, res) {
  var millie = new User({
    name: 'Millie',
    username: 'millie11',
    password: 'reallybadpassword'
  });

  millie.save(function(err) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('User saved successfully!');
      res.sendStatus(200);
    }
  });
});//end millie get route

// /**
//   Thought: How could you make this route update any user?
//   It will need to take something to uniquely id the user as
//   well as the updated user object.
// **/
// //update millie route
// router.put('/updateMillie', function(req, res) {
//   console.log('hit put route - updateMillie');
//
//   //Hard coded to find one user with name Millie
//   User.findOne({name: 'Millie'}, function(err, userResult) {
//     console.log('find user result = ', userResult);
//
//     if(err){
//       console.log(err);
//       res.sendStatus(500);
//     }else{
//       userResult.name = "Millie Walsh";
//       userResult.admin = false;
//
//       userResult.save(function(err) {
//         if(err){
//           console.log(err);
//           res.sendStatus(500);
//         }else{
//           console.log('Update user = ', userResult._id);
//           res.sendStatus(200);
//           /**
//             Thought: What do you want your API to return.
//             Just a status code? The updated user object?
//             Or the userResult._id? res.send(userResult);
//           **/
//         }
//       });
//     }
//   });
// }); //end update Millie route
//
// /**
//   Thought: How could you make this route delete any user?
//   It will need to take something to uniquely identify the user.
//   This should be passed in the URL. For ex: localhost:3000/delete/<id>
// **/
// // delete Millie route
// router.delete('/deleteMillie', function(req, res) {
//   console.log('delete route');
//
//   User.findOne({username: 'millie11'}, function(err, userResult) {
//     if(err){
//       console.log(err);
//       res.sendStatus(500);
//     }else{
//       User.remove({_id: userResult._id}, function(err) {});
//       res.sendStatus(200);
//     }
//   });
// });// end delete route

module.exports = router;
