"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisabledTimeFromShefule = getDisabledTimeFromShefule;

var _config = require("../config.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function getDisabledTimeFromShefule(shedule, selectedDate) {
  var currentDay = selectedDate.getDay();

  var workingDay = _toConsumableArray(Array(24).keys());

  var disabledTime = workingDay.filter(function (item) {
    return Object.keys(shedule[_config.WEEKDAYS_ENG_RUS[currentDay].eng]).indexOf(item.toString()) === -1;
  });
  var selectedDateISO = selectedDate.toISOString();
  return disabledTime.map(function (item) {
    var disabledTime = new Date(selectedDateISO);
    disabledTime.setHours(item);
    return disabledTime;
  });
}