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

app.set("trust proxy", 1); 
const isProduction = process.env.NODE_ENV === "production" || process.env.RENDER === "true";
app.use(
  session({
    secret: utils.hash, // Keep whatever secret you already have
    resave: false,
    saveUninitialized: false,
    cookie: {
      // 2. Dynamic cookie settings based on environment
      secure: process.env.NODE_ENV === "production", // MUST be true on Render
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // 'none' required for cross-origin
      httpOnly: true, // Prevents frontend XSS attacks
      maxAge: 3600000, // 1 Hour
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
