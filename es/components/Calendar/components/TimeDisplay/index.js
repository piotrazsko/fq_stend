function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
var DISABLE_CLASS_NAME = 'time_grid__item-disable';
var SELECTED_CLASS_NAME = 'time_grid__item-selected';

var TimeDisplay = function TimeDisplay(props) {
  var timeProps = function timeProps(i, props) {
    var disabledTime = props.disabledTime,
        selectedTime = props.selectedTime,
        onTimeClick = props.onTimeClick;
    var disabledArr = disabledTime.map(function (item) {
      return item * 2;
    });
    var disabled = disabledArr.indexOf(i) !== -1;
    var selectedName = selectedTime === i ? SELECTED_CLASS_NAME : '';
    return {
      onClick: function onClick() {
        if (!disabled) {
          onTimeClick(i);
        }
      },
      className: disabled ? "time_grid__item ".concat(DISABLE_CLASS_NAME, " ") : "time_grid__item ".concat(selectedName),
      disabled: disabled
    };
  };

  var timesGrid = function timesGrid() {
    var arr = [];

    for (var i = 0; i < 48; i++) {
      var timeProperties = timeProps(i, props);

      if (!timeProperties.disabled) {
        arr.push(React.createElement("div", _extends({
          key: i
        }, timeProperties, {
          "index-key": i
        }), "".concat(Math.floor(i / 2), ":").concat(i % 2 * 30 || '00')));
      }
    }

    return arr;
  };

  var times = timesGrid();
  return React.createElement("div", {
    className: times.length > 0 ? 'time_grid' : 'time_grid empty'
  }, times.length > 0 ? times : React.createElement("div", {
    className: 'emptyDay_shedule'
  }, "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F"));
};

TimeDisplay.defaultProps = {
  disabledTime: [0, 1, 2, 3, 4, 5, 6]
};
TimeDisplay.propTypes = {
  disabledTime: PropTypes.array,
  selectedTime: PropTypes.number,
  onTimeClick: PropTypes.func
};
export default TimeDisplay;