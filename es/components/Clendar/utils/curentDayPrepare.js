function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { WEEKDAYS_ENG_RUS } from './config.js';
/**
 * [getDataForSelectedDate  get data for curent day for form shedule]
 *
 * @param  {[object]} workingTime                    [ permanent working time {"10":"white","11":"white","12":"white","13":"white"}]
 * @param  {[object]} customTime                     [time  custom {
																														 		 id: 120,
																														 		 master_id: 608,
																														 		 date: '2020-03-25 00:00:00',
																														 		 time_disable: ['16', '17'],
																														 		 time_enable: ['15'],
																														 	 }  ]
 * @param  {[object]} bookedTime                     [time of events]
 * @param  {[object]} selectedDate                   [date for filter data 	{ date: '2019-12-03 09:00:00', duration: 75 }]
 * @param  {[object]} [weekDaysArr=WEEKDAYS_ENG_RUS] [description]
 * @return {[object]}                                [description]
 */

export var getDataForSelectedDate = function getDataForSelectedDate(_ref) {
  var workingTime = _ref.workingTime,
      customTime = _ref.customTime,
      bookedTime = _ref.bookedTime,
      selectedDate = _ref.selectedDate,
      _ref$weekDaysArr = _ref.weekDaysArr,
      weekDaysArr = _ref$weekDaysArr === void 0 ? WEEKDAYS_ENG_RUS : _ref$weekDaysArr;
  var year = selectedDate.getFullYear();
  var month = selectedDate.getMonth();
  var date = selectedDate.getDate();

  var workingTimeDay = function workingTimeDay() {
    var nonPreparedDay = workingTime[weekDaysArr[selectedDate.getDay()].eng];
    return nonPreparedDay ? typeof nonPreparedDay === 'string' ? JSON.parse(nonPreparedDay) : nonPreparedDay : {};
  };

  var bookedTimeDay = function bookedTimeDay() {
    return bookedTime.filter(function (item) {
      var itemDate = new Date(item.date);
      return itemDate.getFullYear() === year && itemDate.getMonth() === month && itemDate.getDate() === date;
    });
  };

  var customTimeDay = function customTimeDay() {
    return customTime.reduce(function (accum, item) {
      var itemDate = new Date(item.date);

      if (itemDate.getFullYear() === year && itemDate.getMonth() === month && itemDate.getDate() === date) {
        accum.enabled = [].concat(_toConsumableArray(accum.enabled || []), _toConsumableArray(item.time_enable)).filter(function (item) {
          return item;
        });
        accum.disabled = [].concat(_toConsumableArray(accum.disabled || []), _toConsumableArray(item.time_disable)).filter(function (item) {
          return item;
        });
      }

      return accum;
    }, {});
  };

  return {
    workingTimeDay: workingTimeDay(),
    customTimeDay: customTimeDay(),
    bookedTimeDay: bookedTimeDay()
  };
};