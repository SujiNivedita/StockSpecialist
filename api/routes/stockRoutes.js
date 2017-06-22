'use strict';
module.exports = function(app) {
  var event = require('../controllers/eventController');


  // Event Routes
  app.route('/stock')
    .get(event.list_all_events)
    .post(event.create_event);


  app.route('/event/:eventId')
    .get(event.get_event_details)
    .put(event.update_event)
    .delete(event.delete_event);
};