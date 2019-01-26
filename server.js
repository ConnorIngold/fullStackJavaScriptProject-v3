const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");

const morgan = require("morgan");

app = express();
app.use(serveStatic(__dirname + "/client/dist"));

// app.use has to come after setting app to express
app.use(morgan("combined"));

function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not found - " + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.status || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port);
console.log("server started " + port);
