var path = require('path'),
	express = require('express');

var app = express();

app.use('/ui5', express.static(path.join(__dirname, 'WebContent')));

app.listen(process.env.PORT || 3000, function(){
	console.log('Production Overview app is listening on port 3000!');
});