const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const morgan = require('morgan');

app.use(morgan(dev));

app = express();
app.use(serveStatic(__dirname + "/client/dist"));

const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);