function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from 'prop-types';
import { preppareDataforworkingTime, recoveryDataForworkingTime } from '../../helpers/calendar';
import { workingTimePrepare } from './utils';

var Calendar = function Calendar(_ref) {
  var defaultShowDay = _ref.defaultShowDay,
      autoConfirm = _ref.autoConfirm,
      bookedTime = _ref.bookedTime,
      onConfirm = _ref.onConfirm,
      workingTime = _ref.workingTime,
      customTime = _ref.customTime,
      selectedDay = _ref.selectedDay;

  var _React$useState = React.useState(selectedDay),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      curentDay = _React$useState2[0],
      setCurentDay = _React$useState2[1];

  workingTimePrepare({
    workingTime: workingTime,
    curentDay: curentDay
  });
  return React.createElement("div", null);
};

Calendar.propTypes = {
  defaultShowDay: PropTypes.bool,
  autoConfirm: PropTypes.bool,
  bookedTime: PropTypes.array,
  onConfirm: PropTypes.func.isRequired,
  workingTime: PropTypes.object.isRequired,
  customTime: PropTypes.array
};
Calendar.defaultProps = {
  selectedDay: new Date()
};
export default Calendar;