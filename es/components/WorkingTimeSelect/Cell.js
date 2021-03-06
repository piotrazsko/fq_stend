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

var _calendar = require("../../helpers/calendar.js");

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Cell = function Cell(_ref) {
  var startTime = _ref.startTime,
      _ref$startWeekDay = _ref.startWeekDay,
      startWeekDay = _ref$startWeekDay === void 0 ? 0 : _ref$startWeekDay,
      interval = _ref.interval,
      row = _ref.row,
      col = _ref.col,
      isSelected = _ref.isSelected,
      isMobile = _ref.isMobile,
      _ref$onClear = _ref.onClear,
      onClear = _ref$onClear === void 0 ? function () {} : _ref$onClear,
      _ref$selectedTimeText = _ref.selectedTimeText,
      selectedTimeText = _ref$selectedTimeText === void 0 ? 'Рабочее время' : _ref$selectedTimeText;

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

  switch (true) {
    case isSelected:
      {
        var time = startTime + (row - 1) * interval;
        var minutes = (time % 60).toString();
        var child = typeof selectedTimeText == 'string' ? isMobile ? "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes) : "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes, " \u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043E") : selectedTimeText;
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.selectedCell
        }, child);
      }

    case col === 0 && row > 0:
      {
        var _time = startTime + (row - 1) * interval;

        var _minutes = (_time % 60).toString();

        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.cellTime
        }, "".concat(Math.floor(_time / 60), ":").concat(_minutes.length === 1 ? '0' + _minutes : _minutes));
      }

    case col > 0 && row === 0:
      {
        var dayOfWeek = (col - 1 + startWeekDay) % 7;
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.cellDay
        }, /*#__PURE__*/_react.default.createElement("div", null, isMobile ? _calendar.WEEKDAYS_SHORT[dayOfWeek] : _calendar.WEEKDAYS_LONG[dayOfWeek]), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
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
  endTime: _propTypes.default.number,
  interval: _propTypes.default.number,
  startWeekDay: _propTypes.default.number
};
var _default = Cell;
exports.default = _default;