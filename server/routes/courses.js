const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const courseRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require('mongodb').ObjectId;

// // This section will help you get a list of all courses
// courseRoutes.route('/courses').get(function (req, res) {
//   let db_connect = dbo.getDb('myFirstDatabase');
//   db_connect
//     .collection('courses')
//     .find({})
//     .toArray(function (err, result) {
//       if (err) throw err;
//       res.json(result);
//       console.log('Data is at localhost:5000/courses');
//     });
// });

//Search by name
courseRoutes.route('/courses/:name').get(function (req, res) {
  let db_connect = dbo.getDb('myFirstDatabase');
  // console.
  // let val = req.params.name;
  db_connect
    .collection('courses')
    .find({ 'Course Title': new RegExp(req.params.name, 'i') })
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result);
      console.log('Looking for courses with names ' + req.params.name);
    });
});

courseRoutes.route('/courses/id/:id').get(function (req, res) {
  let db_connect = dbo.getDb('myFirstDatabase');
  // console.
  // let val = req.params.name;
  db_connect
    .collection('courses')
    .find({_id: ObjectId(req.params.id)})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result);
      console.log('Looking for courses with id: ' + req.params.id);
    });
});

//Search by ID:
// courseRoutes.route('/courses/:id').get(function (req, res) {
//   let db_connect = dbo.getDb('myFirstDatabase');
//   // console.
//   // let val = req.params.name;
//   db_connect
//     .collection('courses')
//     .findById(req.params.id)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       res.json(result);
//       console.log(result);
//       console.log('Looking for course with id ' + req.params.id);
//     });
// });


module.exports = courseRoutes;
