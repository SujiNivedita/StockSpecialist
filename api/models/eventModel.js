'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter your name'
  },
  startDate: {
    type: Date,
    Required: 'Kindly enter the event start date'
  },
  endDate:{
      type: Date,
      required:'Kindly enter the event end date'
  },
  description: {
    type: String,
    Required: 'Kindly enter a small description for your event'
  },
  geolocation: {
    type: String,
    Required: 'Kindly enter location'
  },
  image:{
    type:String
  },
  EventType: {
    type: [{
      type: String,
      enum: ['marathon', 'tech summit', 'Gamification','coding','other']
    }],
    default: ['Gamification']
  },
  admin:{
      name:{
          type:String
      },
      email:{
            type:String
      }
  }
});

module.exports = mongoose.model('Event', EventSchema);