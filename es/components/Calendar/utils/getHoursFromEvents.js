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
      var startHour = time.getHours() * 2 + time.getMinutes() * 2 / 60;
      var hours = Math.ceil(events[i].duration / 60 * 2);

      for (var j = startHour; j < startHour + hours; j++) {
        time.setHours(Math.floor(j / 2));
        time.setMinutes(j % 2 * 30);
        result.push(new Date(time));
      }
    }
  }

  return result;
}