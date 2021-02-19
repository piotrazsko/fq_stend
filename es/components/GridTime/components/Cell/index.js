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

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _calendar = require("../../../../helpers/calendar.js");

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Cell = function Cell(_ref) {
  var row = _ref.row,
      col = _ref.col,
      isSelected = _ref.isSelected,
      _ref$startTime = _ref.startTime,
      startTime = _ref$startTime === void 0 ? 0 : _ref$startTime,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 15 : _ref$interval,
      master = _ref.master,
      getMaster = _ref.getMaster,
      defaultCellOnclick = _ref.defaultCellOnclick,
      onMasterClick = _ref.onMasterClick;

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showTime = _React$useState2[0],
      setShowtime = _React$useState2[1];

  var time = startTime + (row - 1) * interval;
  var minutes = (time % 60).toString();
  var hour = Math.floor(time / 60);

  switch (true) {
    case isSelected:
      {
        return /*#__PURE__*/_react.default.createElement("div", null, "sss");
      }

    case col === 0 && row === 0:
      {
        return /*#__PURE__*/_react.default.createElement("div", null);
      }

    case col > 0 && row === 0:
      {
        var _master = getMaster(col);

        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.avatarContainer,
          onClick: function onClick(ev) {
            return onMasterClick(_master, ev);
          }
        }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
          className: _styleModule.default.avatar,
          alt: "Remy Sharp",
          src: _master.avatar
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.name
        }, _master.name));
      }

    case col === 0 && row > 0:
      {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.cellTime
        }, time % 60 == 0 ? "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes) : '');
      }

    case col == 5 && row == 2:
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _styleModule.default.test
      });

    default:
      {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.emptyCell,
          onClick: function onClick() {
            return defaultCellOnclick({
              time: {
                hour: hour,
                minutes: minutes
              },
              col: col,
              row: row
            });
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.content
        }, hour + ':' + (minutes.length == 1 ? '0' + minutes : minutes)));
      }
  }
};

Cell.propTypes = {
  row: _propTypes.default.number,
  col: _propTypes.default.number,
  isSelected: _propTypes.default.bool
};
Cell.defaultProps = {
  defaultCellOnclick: function defaultCellOnclick() {}
};
var _default = Cell;
exports.default = _default;