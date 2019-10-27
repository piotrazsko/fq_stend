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
  var array = [].concat(_toConsumableArray(disabledTime), _toConsumableArray(disabledTime.map(function (item) {
    return item + 0.5;
  })));
  return array.map(function (item) {
    var disabledTime = new Date(selectedDateISO);
    var ceil = Math.floor(item);
    var part = item - ceil;
    disabledTime.setHours(ceil);
    disabledTime.setMinutes(part * 60);
    return disabledTime;
  });
}