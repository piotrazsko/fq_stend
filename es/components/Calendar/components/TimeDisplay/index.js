"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DISABLE_CLASS_NAME = 'time_grid__item-disable';
var SELECTED_CLASS_NAME = 'time_grid__item-selected';

var TimeDisplay = function TimeDisplay(props) {
  var timeProps = function timeProps(i, props) {
    var disabledTime = props.disabledTime,
        selectedTime = props.selectedTime,
        onTimeClick = props.onTimeClick;
    var disabled = disabledTime.indexOf(i) !== -1;
    var selectedName = selectedTime === i ? SELECTED_CLASS_NAME : '';
    return {
      onClick: function onClick() {
        if (!disabled) {
          onTimeClick(i);
        }
      },
      className: disabled ? "time_grid__item ".concat(DISABLE_CLASS_NAME, " ") : "time_grid__item ".concat(selectedName)
    };
  };

  var timesGrid = function timesGrid() {
    var arr = [];

    for (var i = 0; i < 24; i++) {
      arr.push(_react.default.createElement("div", _extends({
        key: i
      }, timeProps(i, props), {
        "index-key": i
      }), "".concat(i, ":00")));
    }

    return arr;
  };

  return _react.default.createElement("div", {
    className: "time_grid"
  }, timesGrid());
};

TimeDisplay.defaultProps = {
  disabledTime: [0, 1, 2, 3, 4, 5, 6]
};
TimeDisplay.propTypes = {
  disabledTime: _propTypes.default.array,
  selectedTime: _propTypes.default.number,
  onTimeClick: _propTypes.default.func
};
var _default = TimeDisplay;
exports.default = _default;