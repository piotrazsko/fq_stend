"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _Cell = _interopRequireDefault(require("./components/Cell"));

var _EventCell = _interopRequireDefault(require("./components/EventCell"));

var _DisabledCell = _interopRequireDefault(require("./components/DisabledCell"));

var _CurrentTime = _interopRequireDefault(require("./components/CurrentTime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TimeGrid = function TimeGrid(_ref) {
  var _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 10 : _ref$interval,
      masters = _ref.masters,
      _ref$showCurrentTime = _ref.showCurrentTime,
      showCurrentTime = _ref$showCurrentTime === void 0 ? true : _ref$showCurrentTime,
      props = _objectWithoutProperties(_ref, ["interval", "masters", "showCurrentTime"]);

  var verticalSize = 5;
  var rowOffset = 1;
  var currentTime = new Date();
  return /*#__PURE__*/_react.default.createElement(_Grid.default, {
    className: _styleModule.default.gridContainer,
    setRowStyle: function setRowStyle(row) {
      switch (true) {
        case row === 0:
          return _styleModule.default.firstRow;

        case row % (60 / interval) == 1:
          return _styleModule.default.borderedCell;

        default:
          return _styleModule.default.cell;
      }
    },
    setColStyle: function setColStyle(col) {
      return col === 0 ? _styleModule.default.firstColumn : _styleModule.default.column;
    },
    cols: masters.length + 1,
    verticalSize: verticalSize,
    rows: 60 / interval * 24 + 1,
    cellProps: {
      children: /*#__PURE__*/_react.default.createElement(_Cell.default, {
        interval: interval,
        getMaster: function getMaster(col) {
          return masters[col - 1];
        }
      })
    },
    setCellStyle: function setCellStyle(cell) {// return cell;
    }
  }, masters.reduce(function (acc, item, index) {
    var events = item.events;
    var masterEvents = events.map(function (i) {
      return /*#__PURE__*/_react.default.createElement(_EventCell.default, {
        eventConfirmed: i.confirmed,
        key: i.id,
        startTime: i.startTime,
        endTime: i.endTime,
        verticalSize: verticalSize,
        col: index + 1,
        interval: interval,
        rowOffset: rowOffset,
        data: i
      });
    });
    return [].concat(_toConsumableArray(acc), _toConsumableArray(masterEvents));
  }, []), masters.reduce(function (acc, item, index) {
    var disabledTime = item.disabledTime;
    var masterEvents = disabledTime.map(function (i) {
      return /*#__PURE__*/_react.default.createElement(_DisabledCell.default, {
        key: i.id,
        startTime: i.startTime,
        endTime: i.endTime,
        verticalSize: verticalSize,
        col: index + 1,
        interval: interval,
        rowOffset: rowOffset
      });
    });
    return [].concat(_toConsumableArray(acc), _toConsumableArray(masterEvents));
  }, []), showCurrentTime && /*#__PURE__*/_react.default.createElement(_CurrentTime.default, {
    time: currentTime,
    cols: masters.length + 1,
    verticalSize: verticalSize,
    interval: interval,
    rowOffset: rowOffset
  }));
};

TimeGrid.defaultProps = {
  masters: []
};
TimeGrid.propTypes = {};
var _default = TimeGrid;
exports.default = _default;