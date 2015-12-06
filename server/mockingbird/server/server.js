require('./model/Client');
require('./model/Recommendation');
require('./model/Song');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var uriUtil = require("uri-util");
var uriUtil = require('mongodb-uri');
var routes = require('./routes');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});


var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };

var mongodbUri = 'mongodb://root:root@ds051960.mongolab.com:51960/mockingbird';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

//Conexión a base de datos
mongoose.connect(mongooseUri, options, function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
    console.error.bind(console, 'connection error:')
  } else {
    console.log('Connected to Mockingbird Database');
  }
});

// Auth Middleware - This will check if the token is valid
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you
// are sure that authentication is not needed
app.all('/api/v1/*', [require('./middlewares/validateRequest')]);
app.use('/', require('./routes'));



//app.use('/clients', clients);

// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Start the server
app.set('port', process.env.PORT || 3001);
var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
