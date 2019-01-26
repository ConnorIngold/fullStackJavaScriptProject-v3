const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const morgan = require('morgan');



app = express();
app.use(serveStatic(__dirname + "/client/dist"));

// app.use has to come after setting app to express
app.use(morgan(dev));

const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);