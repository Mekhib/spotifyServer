var express = require('express');
var session = require("express-session");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var utils = require("./utils")
var bodyParser = require("body-parser");
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var userRouter = require("./routes/user");
var globalRouter = require("./routes/global");

var app = express();

app.use(
  session({
    name: `spotifyUser`,
    secret: utils.hash,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 10, // 1 hour
    },
  })
);

// app.options("*", cors());

app.use(function (req, res, next) {
  req.headers.origin = req.headers.origin || req.headers.host;
  console.log("req.header.orign", req.headers.origin)
  next();
});

app.use(function (req, res, next) {
  var origin = req.header('origin');
  (console.log("origin",origin));
  res.header("Access-Control-Allow-Origin", origin);
  // res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
    res.header(
      "Access-Control-Allow-Credentials",
      "true"
    );
  res.header("Access-Control-Allow-Headers", "headers,method,withcredentials,content-type");
  next();
});

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/',indexRouter);
app.use('/auth', authRouter);
app.use("/user",  userRouter);
app.use("/global", globalRouter);

module.exports = app;
