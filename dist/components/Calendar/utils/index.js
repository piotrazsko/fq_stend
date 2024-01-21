"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getDataForSelectedDate", {
  enumerable: true,
  get: function () {
    return _curentDayPrepareV.getDataForSelectedDate;
  }
});
exports.workingTimePrepare = void 0;
var _periodsPrepareV = require("../../../helpers/periodsPrepare.v2.js");
var _curentDayPrepareV = require("../../../helpers/curentDayPrepare.v2.js");
/*global  Set*/

const workingTimePrepare = _ref => {
  let {
    workingTimeDay,
    customTimeDay,
    bookedTimeDay,
    interval = 15
  } = _ref;
  const permanentWorkingIntervals = (0, _periodsPrepareV.getPermanentWorkingPeriods)({
    workingTimeDay,
    interval
  });
  const customTimePeriods = (0, _periodsPrepareV.getCustomTimePeriods)({
    customTimeDay,
    interval
  });
  const bookedTimePeriods = (0, _periodsPrepareV.getBookedTimePeriods)({
    bookedTimeDay,
    interval
  });
  const enabledTime = Array.from(new Set([...permanentWorkingIntervals, ...customTimePeriods.enabled])).sort((a, b) => a - b).map(item => ({
    start: item,
    end: item + interval,
    hour: Math.floor(item / 60),
    minutes: item % 60
  }));
  const disabledTime = Array.from(new Set([...bookedTimePeriods, ...customTimePeriods.disabled])).sort((a, b) => a - b).map(item => ({
    start: item,
    end: item + interval,
    hour: Math.floor(item / 60),
    minutes: item % 60
  }));
  return enabledTime.filter(item => {
    return !disabledTime.find(disabledItem => {
      return item.start <= disabledItem.start && item.end > disabledItem.start && item.end <= disabledItem.end || item.start >= disabledItem.start && item.start < disabledItem.end && item.end >= disabledItem.end;
    });
  });
};
exports.workingTimePrepare = workingTimePrepare;