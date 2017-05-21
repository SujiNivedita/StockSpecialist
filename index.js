var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
   bodyParser = require('body-parser'),
  methodOverride = require('method-override');

mongoose.connect('mongodb://localhost/Einsite');
//require models
require('./api/models/stockDetailsModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/portal'));

require('./routes')(app); // configure our routes-- create routes.js
var stockDetailsRoutes = require('./api/routes/stockDetailsRoutes');
     
stockDetailsRoutes(app);

app.listen(port);

console.log('Stocky stuff is ready on ' + port);
