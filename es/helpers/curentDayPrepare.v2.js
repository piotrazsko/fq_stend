"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataForSelectedDate = void 0;
var _config = require("./config.js");
var _get = _interopRequireDefault(require("lodash/get"));
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
 * @param  {[object]} curentDay                   [date for filter data 	{ date: '2019-12-03 09:00:00', duration: 75 }]
 * @param  {[object]} [weekDaysArr=WEEKDAYS_ENG_RUS] [description]
 * @return {[object]}                                [description]
 */

const getDataForSelectedDate = _ref => {
  let {
    workingTime,
    customTime,
    bookedTime = [],
    curentDay,
    weekDaysArr = _config.WEEKDAYS_ENG_RUS,
    interval = 60
  } = _ref;
  const year = curentDay.getFullYear();
  const month = curentDay.getMonth();
  const date = curentDay.getDate();
  const workingTimeDay = () => {
    const nonPreparedDay = workingTime && workingTime[weekDaysArr[curentDay.getDay()].eng];
    return nonPreparedDay ? typeof nonPreparedDay === 'string' ? JSON.parse(nonPreparedDay) : nonPreparedDay : {};
  };
  const bookedTimeDay = () => {
    return bookedTime.filter(item => {
      const itemDate = new Date((0, _moment.default)(item.date).toDate());
      return itemDate.getFullYear() === year && itemDate.getMonth() === month && itemDate.getDate() === date;
    });
  };
  const customTimeDay = () => {
    const enabled = (0, _get.default)(customTime, 'enabled', []) || [];
    const disabled = (0, _get.default)(customTime, 'disabled', []) || [];
    return {
      enabled: enabled.filter(item => {
        const itemDate = new Date((0, _moment.default)(item.start).toDate());
        return itemDate.getFullYear() === year && itemDate.getMonth() === month && itemDate.getDate() === date;
      }),
      disabled: disabled.filter(item => {
        const itemDate = new Date((0, _moment.default)(item.start).toDate());
        return itemDate.getFullYear() === year && itemDate.getMonth() === month && itemDate.getDate() === date;
      })
    };
  };
  return {
    workingTimeDay: workingTimeDay(),
    customTimeDay: customTimeDay(),
    bookedTimeDay: bookedTimeDay(),
    curentDay: curentDay,
    interval
  };
};
exports.getDataForSelectedDate = getDataForSelectedDate;