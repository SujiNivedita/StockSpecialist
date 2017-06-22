'use strict';
module.exports = function(app) {
  var stockDetails = require('../controllers/stockDetailsController');
  
  // Admin Routes
  app.route('/stockDetails')
    .get(stockDetails.list_all_stockCompanies)

  app.route('/stockDetails/:symbol')
    .get(stockDetails.get_stockCompanies_details)


};