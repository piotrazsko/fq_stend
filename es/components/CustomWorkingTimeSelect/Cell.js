function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../helpers/calendar';
var style = {
  "title": "style-module_fq_title___1dUq-",
  "resultContainer": "style-module_fq_resultContainer___in4He",
  "cellTime": "style-module_fq_cellTime___3w21q",
  "cellDay": "style-module_fq_cellDay___2VHbc",
  "menuItem": "style-module_fq_menuItem___3rsXc",
  "selectedCell": "style-module_fq_selectedCell___1B1Ne",
  "gridContainer": "style-module_fq_gridContainer___1tkST",
  "firstRow": "style-module_fq_firstRow___lFQL8",
  "firstColumn": "style-module_fq_firstColumn___2NXDm",
  "lastColumn": "style-module_fq_lastColumn___crCtl",
  "cellCustomDay": "style-module_fq_cellCustomDay___2YUDD",
  "cellCustomDayDisabled": "style-module_fq_cellCustomDayDisabled___2lO-G",
  "reservedTime": "style-module_fq_reservedTime___2amMA"
};
var DAY_MS = 60 * 1000 * 60 * 24;

var Cell = function Cell(_ref) {
  var startTime = _ref.startTime,
      _ref$startWeekDay = _ref.startWeekDay,
      startWeekDay = _ref$startWeekDay === void 0 ? 0 : _ref$startWeekDay,
      interval = _ref.interval,
      row = _ref.row,
      col = _ref.col,
      isSelected = _ref.isSelected,
      isMobile = _ref.isMobile,
      curentDay = _ref.curentDay,
      _ref$customTimeSelect = _ref.customTimeSelectedCell,
      customTimeSelectedCell = _ref$customTimeSelect === void 0 ? [] : _ref$customTimeSelect,
      _ref$onClear = _ref.onClear,
      onClear = _ref$onClear === void 0 ? function () {} : _ref$onClear,
      _ref$selectedTimeText = _ref.selectedTimeText,
      selectedTimeText = _ref$selectedTimeText === void 0 ? '' : _ref$selectedTimeText,
      bookedTime = _ref.bookedTime,
      setCurentDay = _ref.setCurentDay;

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var onMenuClick = function onMenuClick(col) {
    onClear(col);
    handleClose();
  };

  var startWeekDay_ms = curentDay.valueOf() - curentDay.getDay() * DAY_MS + startWeekDay * DAY_MS;
  var endWeekDay_ms = curentDay.valueOf() - curentDay.getDay() * DAY_MS + startWeekDay * DAY_MS + 7 * DAY_MS;

  switch (true) {
    case Boolean(bookedTime.find(function (i) {
      return i.col == col && i.row == row;
    })):
      return React.createElement("div", {
        className: style.reservedTime
      }, "\u0417\u0430\u043F\u0438\u0441\u044C");

    case Boolean(customTimeSelectedCell.find(function (i) {
      return i.col == col && i.row == row && i.curentDay >= startWeekDay_ms && i.curentDay < endWeekDay_ms;
    })):
      {
        var time = startTime + (row - 1) * interval;
        var minutes = (time % 60).toString();
        var child = typeof selectedTimeText == 'string' ? isMobile ? "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes) : "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes, " \u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043E") : selectedTimeText;
        return React.createElement("div", {
          className: isSelected ? style.cellCustomDayDisabled : style.cellCustomDay
        }, child);
      }

    case isSelected:
      {
        var _time = startTime + (row - 1) * interval;

        var _minutes = (_time % 60).toString();

        var _child = typeof selectedTimeText == 'string' ? isMobile ? "".concat(Math.floor(_time / 60), ":").concat(_minutes.length === 1 ? '0' + _minutes : _minutes) : "".concat(Math.floor(_time / 60), ":").concat(_minutes.length === 1 ? '0' + _minutes : _minutes, " \u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043E") : selectedTimeText;

        return React.createElement("div", {
          className: style.selectedCell
        }, _child);
      }

    case col === 0 && row > 0 || col === 8 && row > 0:
      {
        var _time2 = startTime + (row - 1) * interval;

        var _minutes2 = (_time2 % 60).toString();

        return React.createElement("div", {
          className: style.cellTime
        }, "".concat(Math.floor(_time2 / 60), ":").concat(_minutes2.length === 1 ? '0' + _minutes2 : _minutes2));
      }

    case col === 8 && row == 0:
      {
        return React.createElement(IconButton, {
          onClick: function onClick() {
            setCurentDay(new Date(curentDay.valueOf() + 7 * DAY_MS));
          }
        }, React.createElement(ArrowForwardIosIcon, {
          style: {
            fontSize: 20
          },
          htmlColor: "#000"
        }));
      }

    case col === 0 && row == 0:
      {
        return React.createElement(IconButton, {
          onClick: function onClick() {
            setCurentDay(new Date(curentDay.valueOf() - 7 * DAY_MS));
          }
        }, React.createElement(ArrowForwardIosIcon, {
          htmlColor: "#000",
          style: {
            transform: 'rotate(180deg)',
            fontSize: 20
          }
        }));
      }

    case col > 0 && row === 0 && col < 8:
      {
        var dayOfWeek = (col - 1 + startWeekDay) % 7;
        var date = new Date(curentDay);
        date.setDate(curentDay.getDate() - curentDay.getDay() + (col - 1) % 7 + startWeekDay);
        return React.createElement("div", {
          className: style.cellDay
        }, React.createElement("div", null, isMobile ? "".concat(date.getDate(), " ").concat(WEEKDAYS_SHORT[dayOfWeek]) : "".concat(date.getDate(), " ").concat(WEEKDAYS_LONG[dayOfWeek])), React.createElement("div", null, React.createElement(IconButton, {
          size: "small",
          onClick: handleClick
        }, React.createElement(MoreVertIcon, {
          style: {
            fontSize: 15
          }
        })), React.createElement(Menu, {
          id: "simple-menu",
          anchorEl: anchorEl,
          keepMounted: true,
          open: Boolean(anchorEl),
          onClose: handleClose
        }, React.createElement(MenuItem, {
          onClick: function onClick() {
            return onMenuClick(col);
          }
        }, React.createElement("div", {
          className: style.menuItem
        }, React.createElement(DeleteForeverIcon, {
          style: {
            fontSize: 18
          }
        }), " \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C")))));
      }

    default:
      return React.createElement("div", null);
  }
};

Cell.propTypes = {
  row: PropTypes.number,
  col: PropTypes.number,
  isSelected: PropTypes.bool,
  onClear: PropTypes.func,
  isMobile: PropTypes.bool,
  selectedTimeText: PropTypes.string,
  startTime: PropTypes.number,
  curentDay: PropTypes.instanceOf(Date),
  interval: PropTypes.number,
  customTimeSelectedCell: PropTypes.shape({
    col: PropTypes.number,
    row: PropTypes.number,
    curentDay: PropTypes.number
  }),
  bookedTime: PropTypes.array,
  startWeekDay: PropTypes.number,
  setCurentDay: PropTypes.func.isRequired
};
export default Cell;