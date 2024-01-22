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
const DAY_MS = 60 * 1000 * 60 * 24;
const Cell = _ref => {
  let {
    startTime,
    startWeekDay = 0,
    interval,
    row,
    col,
    isSelected,
    isMobile,
    curentDay,
    customTimeSelectedCell = [],
    onClear = () => {},
    selectedTimeText = '',
    bookedTime,
    setCurentDay
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
  const cell = customTimeSelectedCell.find(i => {
    return i.col == col && i.row == row && i.startWeekDay.valueOf() === curentDay.valueOf();
  });
  switch (true) {
    case Boolean(bookedTime.find(i => i.col == col && i.row == row)):
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _styleModule.default.reservedTime
      }, "\u0417\u0430\u043F\u0438\u0441\u044C");
    case Boolean(cell):
      {
        const time = startTime + (row - 1) * interval;
        const minutes = (time % 60).toString();
        const child = typeof selectedTimeText == 'string' ? isMobile ? "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes) : "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes, " \u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043E") : selectedTimeText;
        return /*#__PURE__*/_react.default.createElement("div", {
          date: cell.itemTime.toISOString(),
          className: isSelected ? _styleModule.default.cellCustomDayDisabled : _styleModule.default.cellCustomDay
        }, child);
      }
    case isSelected:
      {
        const time = startTime + (row - 1) * interval;
        const minutes = (time % 60).toString();
        const child = typeof selectedTimeText == 'string' ? isMobile ? "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes) : "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes, " \u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043E") : selectedTimeText;
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.selectedCell
        }, child);
      }
    case col === 0 && row > 0 || col === 8 && row > 0:
      {
        const time = startTime + (row - 1) * interval;
        const minutes = (time % 60).toString();
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.cellTime
        }, "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes));
      }
    case col === 8 && row == 0:
      {
        return /*#__PURE__*/_react.default.createElement(_core.IconButton, {
          size: "small",
          onClick: () => {
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
          onClick: () => {
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
        const dayOfWeek = (col - 1 + startWeekDay) % 7;
        const date = new Date(curentDay);
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
var _default = exports.default = Cell;