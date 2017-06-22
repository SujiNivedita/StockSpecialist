'use strict';


var mongoose = require('mongoose'),
  stockDetails = mongoose.model('stockDetails');

exports.list_all_stockCompanies = function(req, res) {
  stockDetails.find({}, function(err, admin) {
    if (err)
      res.send(err);
    res.json(admin);
  }).limit(20);
};



exports.get_stockCompanies_details= function(req, res) {
  stockDetails.find({Symbol:req.params.symbol}, function(err, admin) {
    if (err)
      res.send(err);
    res.json(admin);
  });
};

