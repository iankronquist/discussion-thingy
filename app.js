
/**
 * Module dependencies.
 */

//Import configuration
var config = require("./config.json");

//Set up database based on config
var Sequelize = require('sequelize')
    , sequelize = new Sequelize(config.db.name, config.db.username,
	config.db.password, {
		dialect: config.db.dialect,
		port: config.db.port,
});


sequelize
	.authenticate()
	.complete(function(err) {
		if (!!err) {
			console.log('Unable to connect to the database:', err);
			throw "DB connection error!";
		} else {
			console.log('Connection has been established successfully.');
	}
});

exports.sequelize = sequelize;

var express = require('express');

var path = require('path');



var app = module.exports = express()
var server = require('http').createServer(app)
var io = require('./sockets').listen(server) //this is where sockets.js comes in

var points = require('./points')

// all environments
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));


//=======
//app.set('env', 'production')
//=======

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/reset', function(req, res){
  points.reset()
  res.send('reset')
});

app.get('/requestTopics', function(req, res){
  points.requestTopics(function(topics){res.send(topics)});
});

app.post('/submit', function(req, res, data){
	points.new_point(req.body, function(){res.send('')});
})

