const express = require('express');
const path = require('path');
// const rewrite = require('express-urlrewrite');

const PORT = 8081;

const app = express();

app.use(express.static('./built'));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
//
// app.get('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan', function(req, res, next) {
//     console.log('get http://netflixroulette.net/api/api.php?title=Attack%20on%20titan');
//     // Handle the get for this route
// });
//
// app.post('/', function(req, res, next) {
//     console.log('post /');
//     // Handle the post for this route
// });

// app.use(function (req, res, next) {
//     // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.setHeader("Access-Control-Allow-Methods", "*");
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
//     next();
// });

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