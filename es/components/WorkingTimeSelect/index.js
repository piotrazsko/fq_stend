function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid';
import Cell from './Cell';
import Days from './Days';
import { prepareWorkingTimeIntervals, recoveryWorkingTimeIntervals } from './utils';
var style = {
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
  var _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      workingTimeIntervals = _ref.workingTimeIntervals,
      _ref$isMobile = _ref.isMobile,
      isMobile = _ref$isMobile === void 0 ? false : _ref$isMobile,
      workingTime = _ref.workingTime,
      _ref$selectedTimeText = _ref.selectedTimeText,
      selectedTimeText = _ref$selectedTimeText === void 0 ? '' : _ref$selectedTimeText,
      startTime = _ref.startTime,
      endTime = _ref.endTime,
      interval = _ref.interval,
      startWeekDay = _ref.startWeekDay;

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
  }, [workingTime]); // TODO:  we can get bugs

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

  return React.createElement("div", null, React.createElement("div", {
    className: style.title
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0435 \u0434\u043B\u044F \u0432\u0430\u0441 \u0432\u0440\u0435\u043C\u044F"), React.createElement("div", {
    className: style.resultContainer
  }, React.createElement(Days, {
    startWeekDay: startWeekDay,
    selectedTime: selectedTime,
    startTime: startTime,
    interval: interval
  })), React.createElement(Grid, {
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
      children: React.createElement(Cell, {
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
  workingTime: PropTypes.arrayOf(PropTypes.shape({
    col: PropTypes.number,
    row: PropTypes.number
  })),
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