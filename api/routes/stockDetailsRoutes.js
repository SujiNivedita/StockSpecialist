'use strict';
module.exports = function(app) {
  var eventAdmin = require('../controllers/stockDetailsController');
  
  // Admin Routes
  app.route('/stockDetails')
    .get(eventAdmin.list_all_Admins)
    .post(eventAdmin.register_admin);


  app.route('/admin/:adminId')
    .get(eventAdmin.get_admin_details)
    .put(eventAdmin.update_admin_details)
    .delete(eventAdmin.delete_admin);

  app.route('/login')
    .post(eventAdmin.authenticate)

};