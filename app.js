var express = require('express');
var session = require("express-session");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var utils = require("./utils");
var bodyParser = require("body-parser");
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var userRouter = require("./routes/user");
var globalRouter = require("./routes/global");

var app = express();

// 1. DEFINE the options variable first
const corsOptions = {
  origin: [
    'http://localhost:3000', 
    'https://spotify-server-ruby.vercel.app',
    'https://spotifyserver-fehr.onrender.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true 
};

// 2. APPLY the options to the cors middleware
app.use(cors(corsOptions));

// 3. EXPLICITLY handle preflight requests using the same options
app.options('*', cors(corsOptions));

// Session configuration
app.use(
  session({
    name: `spotifyUser`,
    secret: utils.hash,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Note: Set to true if you are enforcing HTTPS in production!
      maxAge: 1000 * 60 * 10, // 10 minutes
    },
  })
);

// Standard Express parsers
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use("/user", userRouter);
app.use("/global", globalRouter);

module.exports = app;
