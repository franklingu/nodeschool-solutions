var async = require('async');
var request = require('request');
var views = require('./map-views');

// making use of async to make a series of calls to put the design documents
async.waterfall([
  // first function: make request to the design document
  function (next) {
    request.get('http://localhost:5984/things-learn-couchdb/_design/thingsMadeOfMetal', next);
  },
  // after getting back responses, we check if the document exists or not. so the views
  // will be updated or created depending on the situation
  function (res, body, next) {
    if (res.statusCode === 200) {
      next(null, JSON.parse(body));
    } else if (res.statusCode === 404) {
      next(null, {views: {}});
    }
  },
  // make the final request to update or create
  function (doc, next) {
    Object.keys(views).forEach(function (name) {
      doc.views[name] = views[name];
    });
    request({
      method: 'PUT',
      url: 'http://localhost:5984/things-learn-couchdb/_design/thingsMadeOfMetal',
      json: doc
    }, next);
  }
], function (err, res, body) {
  // last function after all 3 completes
  if (err) {
    throw err;
  }
  console.log(res.statusCode, body);
});
