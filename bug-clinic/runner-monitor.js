var resolve = require("path").resolve;
var bunyan = require("bunyan");
var log = bunyan.createLogger({name : "scenario"});
var scenario = require('./monitor');
scenario(log, function (value) {
  log.info("value at finish is", value);
});
