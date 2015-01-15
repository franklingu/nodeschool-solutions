var async = require('async');
var request = require('request');
var views = require('./reduce-views');

async.waterfall([
  function (next) {
    request.get('http://localhost:5984/programming-languages-learn-couchdb/_design/languages', next);
  },
  function (res, body, next) {
    if (res.statusCode === 200) {
      next(null, JSON.parse(body));
    } else if (res.statusCode === 404) {
      next(null, {views: {}});
    }
  },
  function (doc, next) {
    Object.keys(views).forEach(function (name) {
      doc.views[name] = views[name];
    });
    request({
      method: 'PUT',
      url: 'http://localhost:5984/programming-languages-learn-couchdb/_design/languages',
      json: doc
    }, next);
  }
], function (err, res, body) {
  if (err) {
    throw err;
  }
  console.log(res.statusCode, body);
});
