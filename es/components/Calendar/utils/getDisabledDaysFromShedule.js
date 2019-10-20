"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisabledDaysFromShedule = getDisabledDaysFromShedule;

var _config = require("../config");

function getDisabledDaysFromShedule(shedule, selectedDay) {
  var result = [];
  var tempDay = new Date(selectedDay.toISOString());

  var days = function daysInThisMonth() {
    var now = selectedDay;
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }();

  for (var i = 1; i <= days; i++) {
    tempDay.setDate(i);
    var dayOfWeek = tempDay.getDay();

    if (Object.keys(shedule[_config.WEEKDAYS_ENG_RUS[dayOfWeek].eng]).length === 0) {
      result.push(new Date(tempDay.toISOString()));
    }
  }

  return result;
}