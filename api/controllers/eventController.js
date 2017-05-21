'use strict';


var mongoose = require('mongoose'),
  Event = mongoose.model('Event');

exports.list_all_events = function(req, res) {
  Event.find({}, function(err, events) {
    if (err)
      res.send(err);
    res.json(events);
  });
};




exports.create_event = function(req, res) {
  var new_task = new Event(req.body);
  new_task.save(function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.get_event_details = function(req, res) {
  Event.findById(req.params.eventId, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.update_event = function(req, res) {
  Event.findOneAndUpdate(req.params.eventId, req.body, {new: true}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.delete_event = function(req, res) {


  Event.remove({
    _id: req.params.eventId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
