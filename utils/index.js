const crypto = require("crypto");
const { Module } = require("module");

const secret =  crypto.randomBytes(20).toString('hex');

const hash = crypto
  .createHash("sha256", secret)
  .digest("hex");


var sessionChecker = (req, res, next) => {
  console.log("Session Checker", req.session);
  if (req.session.token) {
    next();
  } else {
    res.json({status: 401, accessToken: false})
  }
};

  module.exports = {
    hash,
    sessionChecker
  }