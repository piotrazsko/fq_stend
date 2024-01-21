"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("./utils");
var _Day = _interopRequireDefault(require("./components/Day"));
var _Month = _interopRequireDefault(require("./components/Month"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getActualIntervalsByDay = _ref => {
  let {
    day,
    workingTimeIntervals,
    customTime,
    bookedTime,
    interval
  } = _ref;
  return (0, _utils.workingTimePrepare)({
    ...(0, _utils.getDataForSelectedDate)({
      workingTime: workingTimeIntervals,
      customTime,
      bookedTime,
      curentDay: day
    }),
    interval
  });
};
const today = new Date();
const Calendar = _ref2 => {
  let {
    defaultShowDay = false,
    workingTimeIntervals,
    bookedTime,
    onConfirm = () => {},
    onCancel = () => {},
    customTime = {},
    interval = 20,
    curentDay: curentDayDefault = today,
    selectedDate: selectedTimeProps = today,
    classNames
  } = _ref2;
  const [curentDay, setCurentDay] = _react.default.useState(curentDayDefault);
  const [selectedDate, selectDate] = _react.default.useState(selectedTimeProps);
  const [showTime, setShowTime] = _react.default.useState(defaultShowDay);
  _react.default.useEffect(() => {
    selectDate(selectedTimeProps);
  }, [selectedTimeProps]);
  const curentDayIntervals = getActualIntervalsByDay({
    day: curentDay,
    workingTimeIntervals,
    customTime,
    bookedTime,
    interval
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.container, classNames.container || ''].join(' ')
  }, showTime ? /*#__PURE__*/_react.default.createElement(_Day.default, {
    workingTimeActual: curentDayIntervals,
    disableBeforeCurentTime: true,
    curentDay: curentDay,
    setCurentDay: setCurentDay,
    selectDate: date => {
      selectDate(date);
    },
    onCancel: onCancel,
    onConfirm: onConfirm,
    selectedDate: selectedDate,
    setShowTime: () => setShowTime(!showTime)
  }) : /*#__PURE__*/_react.default.createElement(_Month.default, {
    disableBeforeCurentTime: true,
    workingTimeActual: curentDayIntervals,
    curentDay: curentDay,
    setCurentDay: setCurentDay,
    disabledDays: day => {
      return getActualIntervalsByDay({
        day: day,
        workingTimeIntervals,
        customTime,
        bookedTime,
        interval
      });
    },
    setShowTime: () => setShowTime(!showTime)
  }));
};
Calendar.getActualIntervals = getActualIntervalsByDay;
Calendar.propTypes = {
  defaultShowDay: _propTypes.default.bool,
  bookedTime: _propTypes.default.array,
  onConfirm: _propTypes.default.func.isRequired,
  workingTimeIntervals: _propTypes.default.object.isRequired,
  customTime: _propTypes.default.array,
  interval: _propTypes.default.number,
  curentDay: _propTypes.default.instanceOf(Date),
  selectedDate: _propTypes.default.instanceOf(Date),
  classNames: _propTypes.default.shape({
    container: _propTypes.default.string
  }),
  onCancel: _propTypes.default.func
};
Calendar.defaultProps = {
  selectedDay: new Date(),
  classNames: {
    conatainer: ''
  }
};
var _default = exports.default = Calendar;