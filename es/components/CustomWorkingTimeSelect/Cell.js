"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _core = require("@material-ui/core");

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _DeleteForever = _interopRequireDefault(require("@material-ui/icons/DeleteForever"));

var _ArrowForwardIos = _interopRequireDefault(require("@material-ui/icons/ArrowForwardIos"));

var _calendar = require("../../helpers/calendar");

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  var _React$useState = _react.default.useState(null),
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

  var cell = customTimeSelectedCell.find(function (i) {
    return i.col == col && i.row == row && i.startWeekDay.valueOf() === curentDay.valueOf();
  });

  switch (true) {
    case Boolean(bookedTime.find(function (i) {
      return i.col == col && i.row == row;
    })):
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _styleModule.default.reservedTime
      }, "\u0417\u0430\u043F\u0438\u0441\u044C");

    case Boolean(cell):
      {
        var time = startTime + (row - 1) * interval;
        var minutes = (time % 60).toString();
        var child = typeof selectedTimeText == 'string' ? isMobile ? "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes) : "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes, " \u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043E") : selectedTimeText;
        return /*#__PURE__*/_react.default.createElement("div", {
          date: cell.itemTime.toISOString(),
          className: isSelected ? _styleModule.default.cellCustomDayDisabled : _styleModule.default.cellCustomDay
        }, child);
      }

    case isSelected:
      {
        var _time = startTime + (row - 1) * interval;

        var _minutes = (_time % 60).toString();

        var _child = typeof selectedTimeText == 'string' ? isMobile ? "".concat(Math.floor(_time / 60), ":").concat(_minutes.length === 1 ? '0' + _minutes : _minutes) : "".concat(Math.floor(_time / 60), ":").concat(_minutes.length === 1 ? '0' + _minutes : _minutes, " \u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043E") : selectedTimeText;

        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.selectedCell
        }, _child);
      }

    case col === 0 && row > 0 || col === 8 && row > 0:
      {
        var _time2 = startTime + (row - 1) * interval;

        var _minutes2 = (_time2 % 60).toString();

        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.cellTime
        }, "".concat(Math.floor(_time2 / 60), ":").concat(_minutes2.length === 1 ? '0' + _minutes2 : _minutes2));
      }

    case col === 8 && row == 0:
      {
        return /*#__PURE__*/_react.default.createElement(_core.IconButton, {
          size: "small",
          onClick: function onClick() {
            setCurentDay(new Date(curentDay.valueOf() + 7 * DAY_MS));
          }
        }, /*#__PURE__*/_react.default.createElement(_ArrowForwardIos.default, {
          style: {
            fontSize: 20
          },
          htmlColor: "#000"
        }));
      }

    case col === 0 && row == 0:
      {
        return /*#__PURE__*/_react.default.createElement(_core.IconButton, {
          size: "small",
          onClick: function onClick() {
            setCurentDay(new Date(curentDay.valueOf() - 7 * DAY_MS));
          }
        }, /*#__PURE__*/_react.default.createElement(_ArrowForwardIos.default, {
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
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.cellDay
        }, /*#__PURE__*/_react.default.createElement("div", null, isMobile ? "".concat(date.getDate(), " ").concat(_calendar.WEEKDAYS_SHORT[dayOfWeek]) : "".concat(date.getDate(), " ").concat(_calendar.WEEKDAYS_LONG[dayOfWeek])), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
          size: "small",
          onClick: handleClick
        }, /*#__PURE__*/_react.default.createElement(_MoreVert.default, {
          style: {
            fontSize: 15
          }
        })), /*#__PURE__*/_react.default.createElement(_Menu.default, {
          id: "simple-menu",
          anchorEl: anchorEl,
          keepMounted: true,
          open: Boolean(anchorEl),
          onClose: handleClose
        }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
          onClick: function onClick() {
            return onMenuClick(col);
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.menuItem
        }, /*#__PURE__*/_react.default.createElement(_DeleteForever.default, {
          style: {
            fontSize: 18
          }
        }), " \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C")))));
      }

    default:
      return /*#__PURE__*/_react.default.createElement("div", null);
  }
};

Cell.propTypes = {
  row: _propTypes.default.number,
  col: _propTypes.default.number,
  isSelected: _propTypes.default.bool,
  onClear: _propTypes.default.func,
  isMobile: _propTypes.default.bool,
  selectedTimeText: _propTypes.default.string,
  startTime: _propTypes.default.number,
  curentDay: _propTypes.default.instanceOf(Date),
  interval: _propTypes.default.number,
  customTimeSelectedCell: _propTypes.default.shape({
    col: _propTypes.default.number,
    row: _propTypes.default.number,
    curentDay: _propTypes.default.number
  }),
  bookedTime: _propTypes.default.array,
  startWeekDay: _propTypes.default.number,
  setCurentDay: _propTypes.default.func.isRequired
};
var _default = Cell;
exports.default = _default;