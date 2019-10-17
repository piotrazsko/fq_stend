"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHoursFromEvents;

function getHoursFromEvents() {
  var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var result = [];

  for (var i = 0; i < events.length; i++) {
    if ('date' in events[i] && 'duration' in events[i]) {
      var time = new Date(events[i].date);
      var startHour = time.getHours();
      var hours = Math.ceil(events[i].duration / 60);

      for (var j = startHour; j < startHour + hours; j++) {
        result.push(new Date(time.setHours(j)));
      }
    }
  }

  return result;
}