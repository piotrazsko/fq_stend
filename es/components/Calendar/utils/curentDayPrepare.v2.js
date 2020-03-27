import { WEEKDAYS_ENG_RUS } from './config.js';
import get from 'lodash/get';
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
      _ref$bookedTime = _ref.bookedTime,
      bookedTime = _ref$bookedTime === void 0 ? [] : _ref$bookedTime,
      selectedDate = _ref.selectedDate,
      _ref$weekDaysArr = _ref.weekDaysArr,
      weekDaysArr = _ref$weekDaysArr === void 0 ? WEEKDAYS_ENG_RUS : _ref$weekDaysArr;
  var year = selectedDate.getFullYear();
  var month = selectedDate.getMonth();
  var date = selectedDate.getDate();

  var workingTimeDay = function workingTimeDay() {
    var nonPreparedDay = workingTime && workingTime[weekDaysArr[selectedDate.getDay()].eng];
    return nonPreparedDay ? typeof nonPreparedDay === 'string' ? JSON.parse(nonPreparedDay) : nonPreparedDay : {};
  };

  var bookedTimeDay = function bookedTimeDay() {
    return bookedTime.filter(function (item) {
      var itemDate = new Date(item.date);
      return itemDate.getFullYear() === year && itemDate.getMonth() === month && itemDate.getDate() === date;
    });
  };

  var customTimeDay = function customTimeDay() {
    var enabled = get(customTime, 'enabled', []) || [];
    var disabled = get(customTime, 'enabled', []) || [];
    return {
      enabled: enabled.filter(function (item) {
        var itemDate = new Date(item.start);
        return itemDate.getFullYear() === year && itemDate.getMonth() === month && itemDate.getDate() === date;
      }),
      disabled: disabled.filter(function (item) {
        var itemDate = new Date(item.start);
        return itemDate.getFullYear() === year && itemDate.getMonth() === month && itemDate.getDate() === date;
      })
    };
  };

  return {
    workingTimeDay: workingTimeDay(),
    customTimeDay: customTimeDay(),
    bookedTimeDay: bookedTimeDay()
  };
};