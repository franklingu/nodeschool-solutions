// similar to map-views
module.exports = {
  languages: {
    map: function (doc) {
      emit(null, doc);
    }.toString(),

    reduce: '_count'
  }
};
