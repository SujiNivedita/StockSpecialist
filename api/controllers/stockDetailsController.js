'use strict';


var mongoose = require('mongoose'),
  Admin = mongoose.model('stockDetails');

exports.list_all_Admins = function(req, res) {
  Admin.find({}, function(err, admin) {
    if (err)
      res.send(err);
    res.json(admin);
  }).limit(20);
};




exports.register_admin = function(req, res) {
  var new_Admin = new Admin(req.body);
  new_Admin.save(function(err, admin) {
    if (err)
      res.send(err);
    res.json(admin);
  });
};

exports.authenticate = function(req, res) {
  console.log(req.body);
  User.find({})
  .where('userName').equals(req.body.credentials.userName)
  .where('password').equals(req.body.credentials.password)  
  .exec(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.get_admin_details= function(req, res) {
  Admin.findById(req.params.adminId, function(err, admin) {
    if (err)
      res.send(err);
    res.json(admin);
  });
};


exports.update_admin_details = function(req, res) {
  Admin.findOneAndUpdate(req.params.adminId, req.body, {new: true}, function(err, admin) {
    if (err)
      res.send(err);
    res.json(admin);
  });
};


exports.delete_admin = function(req, res) {


  Admin.remove({
    _id: req.params.adminId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Admin successfully deleted' });
  });
};
