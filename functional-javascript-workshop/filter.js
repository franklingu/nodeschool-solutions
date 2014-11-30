// function chaining
function getShortMessages(msgs) {
  return msgs.map(function (obj) {
    return obj.message;
  }).filter(function (msg) {
    return msg.length < 50;
  });
}

module.exports = getShortMessages;
