'use strict';


var mongoose = require('mongoose'),
  Register = mongoose.model('Register');
  
exports.list_all_registration = function(req, res) {
  Register.find({}, function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};

exports.list_all_registration_for_event = function(req, res) {
  Register.find({ eventId: req.params.eventId })
  .select('registerationType')
  .exec(function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};

exports.list_all_registrationType_for_event = function(req, res) {
  Register.find({ registerationType: req.params.registerationType }, function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};

exports.register_for_event = function(req, res) {
  var new_reg= new Register(req.body);
  new_reg.save(function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};


exports.get_registration_details = function(req, res) {
  Register.findById(req.params.regId, function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};


exports.update_registration_details = function(req, res) {
  Register.findOneAndUpdate(req.params.regId, req.body, {new: true}, function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};


exports.delete_registration = function(req, res) {

  Register.remove({
    _id: req.params.regId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Registration successfully reverted' });
  });
};

//upload ID proofs to gridFS
