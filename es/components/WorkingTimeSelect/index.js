function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid';
import Cell from './Cell';
import Days from './Days';
import { prepareWorkingTimeIntervals, recoveryWorkingTimeIntervals } from './utils';
var style = {
  "container": "style-module_fq_container___1dmNn",
  "title": "style-module_fq_title___tFfDD",
  "resultContainer": "style-module_fq_resultContainer___10tCz",
  "cellTime": "style-module_fq_cellTime___1tycP",
  "cellDay": "style-module_fq_cellDay___37LA4",
  "menuItem": "style-module_fq_menuItem___1wNiM",
  "selectedCell": "style-module_fq_selectedCell___KT0hk",
  "gridContainer": "style-module_fq_gridContainer___2HoLV",
  "firstRow": "style-module_fq_firstRow___3qcYX",
  "firstColumn": "style-module_fq_firstColumn___1KiEl"
};

var WorkingTimeSelect = function WorkingTimeSelect(_ref) {
  var workingTimeIntervals = _ref.workingTimeIntervals,
      _ref$isMobile = _ref.isMobile,
      isMobile = _ref$isMobile === void 0 ? false : _ref$isMobile,
      _ref$selectedTimeText = _ref.selectedTimeText,
      selectedTimeText = _ref$selectedTimeText === void 0 ? '' : _ref$selectedTimeText,
      startTime = _ref.startTime,
      endTime = _ref.endTime,
      interval = _ref.interval,
      startWeekDay = _ref.startWeekDay,
      onChange = _ref.onChange;

  var _React$useState = React.useState(_toConsumableArray(recoveryWorkingTimeIntervals({
    data: workingTimeIntervals,
    startTime: startTime,
    interval: interval,
    startWeekDay: startWeekDay
  }))),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedTime = _React$useState2[0],
      selectTime = _React$useState2[1];

  React.useEffect(function () {
    onChange(prepareWorkingTimeIntervals({
      data: selectedTime,
      startTime: startTime,
      interval: interval,
      startWeekDay: startWeekDay
    }));
  }, [selectedTime]);
  React.useEffect(function () {
    var workingTimePrepared = recoveryWorkingTimeIntervals({
      data: workingTimeIntervals,
      startTime: startTime,
      interval: interval,
      startWeekDay: startWeekDay
    });

    if (workingTimePrepared.length !== selectedTime.length || !workingTimePrepared.every(function (item) {
      return selectedTime.find(function (i) {
        return i.col == item.col && i.row == item.row;
      });
    })) {
      selectTime(_toConsumableArray(workingTimePrepared));
    }
  }, [workingTimeIntervals, startWeekDay]); // TODO:  we can get bugs

  React.useEffect(function () {
    var workingTimePrepared = recoveryWorkingTimeIntervals({
      data: workingTimeIntervals,
      startTime: startTime,
      interval: interval,
      startWeekDay: startWeekDay
    });
    selectTime(_toConsumableArray(workingTimePrepared));
  }, [interval]);

  var onSelect = function onSelect(selected) {
    if (selectedTime.find(function (item) {
      return selected.length > 0 && item.col === selected[0].col && item.row === selected[0].row;
    })) {
      selectTime(_toConsumableArray(selectedTime.filter(function (item) {
        return !selected.find(function (i) {
          return item.col == i.col && item.row == i.row;
        });
      })));
    } else {
      selectTime([].concat(_toConsumableArray(selectedTime), _toConsumableArray(selected)));
    }
  };

  var onClear = function onClear(col) {
    selectTime(_toConsumableArray(_toConsumableArray(selectedTime).filter(function (item) {
      return item.col !== col;
    })));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: style.container
  }, /*#__PURE__*/React.createElement("div", {
    className: style.resultContainer
  }, /*#__PURE__*/React.createElement(Days, {
    startWeekDay: startWeekDay,
    selectedTime: selectedTime,
    startTime: startTime,
    interval: interval
  })), /*#__PURE__*/React.createElement(Grid, {
    isMobile: isMobile,
    className: style.gridContainer,
    cols: 8,
    rows: Math.ceil((endTime - startTime) / interval + 1),
    selectFromCol: 1,
    selectToCol: 7,
    selectFromRow: 1,
    selectToRow: Math.ceil((endTime - startTime) / interval + 1),
    setRowStyle: function setRowStyle(row) {
      return row === 0 ? style.firstRow : '';
    },
    setColStyle: function setColStyle(col) {
      return col === 0 ? style.firstColumn : '';
    },
    cellProps: {
      children: /*#__PURE__*/React.createElement(Cell, {
        startTime: startTime,
        startWeekDay: startWeekDay,
        endTime: endTime,
        interval: interval,
        selectedTimeText: selectedTimeText,
        onClear: onClear,
        isMobile: isMobile
      })
    },
    selected: selectedTime,
    onSelect: onSelect
  }));
};

WorkingTimeSelect.propTypes = {
  onChange: PropTypes.func,
  isMobile: PropTypes.bool,
  selectedTimeText: PropTypes.string,
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  startWeekDay: PropTypes.number,
  interval: PropTypes.number,
  workingTimeIntervals: PropTypes.object
};
WorkingTimeSelect.defaultProps = {
  workingTime: [],
  startTime: 300,
  endTime: 1440,
  interval: 60,
  startWeekDay: 1,
  //utc day of week
  workingTimeIntervals: {}
};
export default WorkingTimeSelect;