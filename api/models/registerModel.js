'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RegisterSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter your name'
  },
  email: {
    type: String,
    Required: 'Kindly enter your email ID'
  },
  phone: {
    type: String,
    Required: 'Kindly enter your phone number'
  },
  registerationType: {
    type: [{
      type: String,
      enum: ['self', 'group', 'corporate','others']
    }],
    default: ['self']
  },
  tickets: {
    type: Number,
    default:1
  },
  IDProof: {
    type: String,
    Required: 'Please upload ID proof'
  },
  eventId: {
    type: String,
  },
  regiterDate:{
    type: Date,
    default:Date.now
  }
});

module.exports = mongoose.model('Register', RegisterSchema);