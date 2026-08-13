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

const isProduction = process.env.NODE_ENV === 'production';

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1:3000', 
    'https://spotify-server-ruby.vercel.app',
    'https://spotifyserver-fehr.onrender.com',
    'https://super-spotify-27q1kxjrh-mekhi19132-3917s-projects.vercel.app',
    'https://super-spotify-beta.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true 
};

// Trust proxy is required for secure cookies behind Render/Vercel load balancers
app.set("trust proxy", 1); 

// 1. APPLY CORS GLOBALLY (Must be before routes)
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests explicitly

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
    name: 'connect.sid',
    cookie: {
      // Must be true in production for cross-site HTTPS cookies (Vercel -> Render)
      secure: isProduction, 
      httpOnly: true,
      // Must be 'none' for cross-site fetch requests with credentials
      sameSite: isProduction ? 'none' : 'lax', 
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

// Routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use("/user", userRouter);
app.use("/global", globalRouter);
app.use("/player", playerRouter); 

module.exports = app;