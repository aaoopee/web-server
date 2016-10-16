var express = require('express');
var PORT = 3000;
var app = express();
var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function(req,res,next) {
		var date = new Date().toString();
		console.log('Request: '+date+' '+req.method+' '+req.originalUrl);
		next();
	}
};

app.use(middleware.logger);


// app.get('/', function(req, resp) {
// 	resp.send('Hello Express!');
// });

app.get('/about', middleware.requireAuthentication, function(req, resp) {
	resp.send('About us.')
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function() {
	console.log('Server started at port '+PORT+'.');
});