"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactDayPicker = _interopRequireDefault(require("react-day-picker"));
var _config = require("../../../../helpers/config");
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import 'react-day-picker/lib/style.css';
const yesterday = new Date();
yesterday.setDate(new Date().getDate() - 1);
yesterday.setHours(12);
yesterday.setMinutes(0);
yesterday.setSeconds(0);
yesterday.setMilliseconds(0);
const Month = _ref => {
  let {
    curentDay,
    setCurentDay,
    setShowTime,
    disableBeforeCurentTime = true,
    disabledDays: disabledDaysFunction
  } = _ref;
  const disabledDays = disableBeforeCurentTime ? date => {
    return date <= yesterday || disabledDaysFunction(date).length == 0;
  } : [];
  return /*#__PURE__*/_react.default.createElement(_reactDayPicker.default, {
    onMonthChange: month => {
      const day = new Date(curentDay);
      day.setMonth(month.getMonth());
    },
    onDayClick: (day, modifiers) => {
      if (!modifiers.disabled) {
        setCurentDay(day);
        setShowTime();
      }
    },
    disabledDays: disabledDays,
    locale: "ru",
    firstDayOfWeek: 1,
    selectedDays: [curentDay],
    className: _styleModule.default.datapicker,
    weekdaysShort: _config.WEEKDAYS_SHORT,
    months: _config.MONTHS
  });
};
Month.propTypes = {
  curentDay: _propTypes.default.object.isRequired,
  setCurentDay: _propTypes.default.func.isRequired,
  setShowTime: _propTypes.default.func.isRequired,
  disableBeforeCurentTime: _propTypes.default.bool,
  disabledDays: _propTypes.default.func
};
var _default = exports.default = Month;