'use strict';
module.exports = function(app) {
  var registration = require('../controllers/registrationController');
  var file = require('../controllers/fileController');


  // regiteration Routes
  app.route('/register')
    .get(registration.list_all_registration)
    .post(registration.register_for_event);


  app.route('/register/:regId')
    .get(registration.get_registration_details)
    .put(registration.update_registration_details)
    .delete(registration.delete_registration);

    app.route('/register/:eventId')
     .get(registration.list_all_registration_for_event)
     .post(registration.list_all_registrationType_for_event)

    app.route('/upload/:Id')
     .get(file.read_ID_Proof);

     app.route('/upload')
     .post(file.upload_ID_Proof)
     .get(file.read_all_ID_Proof);

    
};