var app = require('./server/server.js');
var db = require('./server/config.js');

var port = process.env.PORT || 3000;

app.listen(port);

console.log("Watchly is listening on port " + port);
