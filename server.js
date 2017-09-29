const express = require('express');
const path = require('path');
// const rewrite = require('express-urlrewrite');

const PORT = 8080;

const app = express();

app.use(express.static('./built'));

// app.use(rewrite('/users', '/'))

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/built/index.html');
});

// app.all("*", function(req, res) {
//     res.sendFile(path.resolve('./built', 'index.html'));
// });

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT + '...');
});