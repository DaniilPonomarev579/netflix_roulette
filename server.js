const express = require('express');
const PORT = 8081;
const app = express();

app.use(express.static('./built'));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/built/index.html');
});

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT + '...');
});