'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var stockSchema = new Schema({
  symbol: {
    type: String   
  },
  exchange: {
    type: Date  
  },
  lastPrice:{
      type: Date
  },
  lastTradeDateTime: {
    type: String
  },
  changePercentage: {
    type: String
  },
  lastTradeDateTimeFormat:{
    type:String
  }
});

module.exports = mongoose.model('stock', stockSchema,'stock');