const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/info-chim'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/info-chim/'}),
);

app.listen(process.env.PORT || 8080);