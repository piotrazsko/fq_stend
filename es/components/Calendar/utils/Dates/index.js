"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatesMounthBeforeToday = getDatesMounthBeforeToday;
exports.getDisabledTimeForDay = getDisabledTimeForDay;
exports.getDisabledTimeBeforeCurrentTime = getDisabledTimeBeforeCurrentTime;
exports.getFreeHours = getFreeHours;

function getDatesMounthBeforeToday(today, currentMonth) {
  if (today instanceof Date) {
    var days = function daysInThisMonth() {
      var now = currentMonth;
      return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    }();

    var day = currentMonth.getFullYear() === today.getFullYear() && currentMonth.getMonth() < today.getMonth() || currentMonth.getFullYear() < today.getFullYear() ? days : currentMonth.getFullYear() === today.getFullYear() && currentMonth.getMonth() === today.getMonth() ? today.getDate() : 0;
    var result = [];

    for (var i = 1; i < day; i++) {
      var _day = new Date(today.setDate(i));

      _day.setMonth(currentMonth.getMonth());

      _day.setYear(currentMonth.getFullYear());

      result.push(_day);
    }

    return result;
  } else {
    throw new Error('Type of  function arguments is wrong!');
  }
}

function getDisabledTimeForDay() {
  var disabledMoment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [new Date()];
  var currentDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var result = [];

  for (var i = 0; i < disabledMoment.length; i++) {
    if (disabledMoment[i].getDate() === currentDate.getDate() && disabledMoment[i].getMonth() === currentDate.getMonth() && disabledMoment[i].getYear() === currentDate.getYear()) {
      var time = Math.round((disabledMoment[i].getHours() + disabledMoment[i].getMinutes() / 60) * 2) / 2;
      result.push(time);
    }
  }

  return result;
}

function getDisabledTimeBeforeCurrentTime() {
  var checkedDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var disabledMoments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var result = [];

  if (checkedDate instanceof Date) {
    var currentTime = new Date();
    var currentDateObj = {
      day: currentTime.getDate(),
      month: currentTime.getMonth(),
      year: currentTime.getYear()
    };
    var checkedDateObj = {
      day: checkedDate.getDate(),
      month: checkedDate.getMonth(),
      year: checkedDate.getYear()
    };

    if (currentDateObj.day === checkedDateObj.day && currentDateObj.month === checkedDateObj.month && currentDateObj.year === checkedDateObj.year) {
      currentTime = currentTime.getHours() * 2 + currentTime.getMinutes() * 2 / 60;

      for (var i = 0; i <= currentTime; i++) {
        result.push(i / 2);
      }
    } else if (currentTime.valueOf() > checkedDate.valueOf()) {
      for (var _i = 0; _i < 48; _i++) {
        result.push(_i / 2);
      }
    }
  }

  result = result.concat(getDisabledTimeForDay(disabledMoments, checkedDate));
  return result;
}

function getFreeHours() {}