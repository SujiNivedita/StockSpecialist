'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var stockDetailsSchema = new Schema({
 Symbol: {
    type: String
   
  },
  Name: {
    type: String
    
  },
  MarketCap: {
    type: String
   
  },
  Sector: {
    type: String
   
  },
  Industry: {
    type: String
  }
});

module.exports = mongoose.model('stockDetails', stockDetailsSchema,'stockDetails');