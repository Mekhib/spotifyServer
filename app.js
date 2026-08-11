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
var playerRouter = require("./routes/player"); 

var app = express();

const corsOptions = {
  origin: [
    'http://127.0.0.1:3000', 
    'https://spotify-server-ruby.vercel.app',
    'https://spotifyserver-fehr.onrender.com',
    'https://super-spotify-27q1kxjrh-mekhi19132-3917s-projects.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true 
};

// Standard Express parsers
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: utils.hash, 
    resave: false,
    saveUninitialized: false,
    name: 'connect.sid', // Explicitly name the cookie
    cookie: {
      secure: false, // Must be false for local HTTP
      httpOnly: true,
      sameSite: 'lax', // 'lax' is usually best for local proxy setups
      maxAge: 3600000,
    },
  })
);

app.use((req, res, next) => {
  console.log("--- DEBUG ---");
  console.log("Request Path:", req.path);
  console.log("Session ID:", req.sessionID);
  console.log("Token exists:", !!req.session.token);
  next();
});

app.set("trust proxy", 1); 

app.options('*', cors(corsOptions));

// Routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use("/user", userRouter);
app.use("/global", globalRouter);


app.use("/player", playerRouter); 

module.exports = app;