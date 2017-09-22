const express = require('express');
const path = require('path');

const PORT = 8080;

const app = express();

app.use(express.static('./built'))

// app.all("*", function(req, res) {
//     res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
// });

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT + '...');
});