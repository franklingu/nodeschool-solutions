// this is exporting the map function for other js to use. the json object here will be the content in [designDoc.views]
module.exports = {
  thingsMadeOfMetal: {
    map: function (doc) {
      if (doc.material === 'metal') {
        emit(doc.id, doc);
      }
    }.toString(),
  }
};
