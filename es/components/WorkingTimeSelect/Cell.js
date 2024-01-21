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
const Cell = _ref => {
  let {
    startTime,
    startWeekDay = 0,
    interval,
    row,
    col,
    isSelected,
    isMobile,
    onClear = () => {},
    selectedTimeText = 'Рабочее время'
  } = _ref;
  const [anchorEl, setAnchorEl] = _react.default.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onMenuClick = col => {
    onClear(col);
    handleClose();
  };
  switch (true) {
    case isSelected:
      {
        const time = startTime + (row - 1) * interval;
        const minutes = (time % 60).toString();
        const child = typeof selectedTimeText == 'string' ? isMobile ? "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes) : "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes, " \u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043E") : selectedTimeText;
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.selectedCell
        }, child);
      }
    case col === 0 && row > 0:
      {
        const time = startTime + (row - 1) * interval;
        const minutes = (time % 60).toString();
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.cellTime
        }, "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes));
      }
    case col > 0 && row === 0:
      {
        const dayOfWeek = (col - 1 + startWeekDay) % 7;
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
          onClick: () => onMenuClick(col)
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
var _default = exports.default = Cell;