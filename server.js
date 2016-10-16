var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();

//var middleware = require('./middleware.js');

//app.use(middleware.logger);


app.get('/', function(req, resp) {
 	resp.send('Hello Express!');
});

// app.get('/about', middleware.requireAuthentication, function(req, resp) {
// 	resp.send('About us.')
// });

//app.use(express.static(__dirname+'/public'));

app.listen(PORT, function() {
	console.log('Server started at port '+PORT+'.');
});