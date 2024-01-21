"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPermanentWorkingPeriods = exports.getCustomTimePeriods = exports.getBookedTimePeriods = void 0;
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const reduceIntervals = (arr, interval) => {
  return arr.reduce((acc, item) => {
    const startTimeArr = item.start.match(/^.{1,2}:..($|:..)/gm) ? item.start.split(':') : (() => {
      const time = new Date((0, _moment.default)(item.start).toDate());
      return [time.getHours().toString(), time.getMinutes().toString()];
    })();
    const endTimeArr = item.end.match(/^.{1,2}:..($|:..)/gm) ? item.end.split(':') : (() => {
      const time = new Date((0, _moment.default)(item.end).toDate());
      const hours = time.getHours();
      return [hours.toString(), time.getMinutes().toString()];
    })();
    endTimeArr[0] = endTimeArr[0] == 0 ? '24' : endTimeArr[0];
    const startTime = startTimeArr[0] * 60 + parseInt(startTimeArr[1]);
    const endTime = endTimeArr[0] * 60 + parseInt(endTimeArr[1]);
    const externalItervals = Math.floor((endTime - startTime) / interval);
    for (let i = 0; i < externalItervals; i++) {
      acc = [...acc, startTime + i * interval];
    }
    return acc;
  }, []);
};
const getPermanentWorkingPeriods = _ref => {
  let {
    workingTimeDay,
    interval = 60
  } = _ref;
  return workingTimeDay && Object.keys(workingTimeDay).length > 0 ? reduceIntervals(workingTimeDay, interval) : [];
};
exports.getPermanentWorkingPeriods = getPermanentWorkingPeriods;
const getCustomTimePeriods = _ref2 => {
  let {
    customTimeDay,
    interval = 60
  } = _ref2;
  return {
    enabled: customTimeDay.enabled ? reduceIntervals(customTimeDay.enabled, interval) : [],
    disabled: customTimeDay.disabled ? reduceIntervals(customTimeDay.disabled, interval) : []
  };
};
exports.getCustomTimePeriods = getCustomTimePeriods;
const getBookedTimePeriods = _ref3 => {
  let {
    bookedTimeDay,
    interval = 60
  } = _ref3;
  return bookedTimeDay.reduce((acc, item) => {
    const date = new Date((0, _moment.default)(item.date).toDate());
    const startTime = date.getHours() * 60 + date.getMinutes();
    const endTime = startTime + item.duration;
    // TODO:  need check it for calnedar
    for (let i = startTime; i < endTime; i = i + interval) {
      acc = [...acc, i];
    }
    return [...acc];
  }, []);
};
exports.getBookedTimePeriods = getBookedTimePeriods;