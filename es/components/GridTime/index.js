"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _Cell = _interopRequireDefault(require("./components/Cell"));

var _EventCell = _interopRequireDefault(require("./components/EventCell"));

var _DisabledCell = _interopRequireDefault(require("./components/DisabledCell"));

var _CurrentTime = _interopRequireDefault(require("./components/CurrentTime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TimeGrid = function TimeGrid(_ref) {
  var interval = _ref.interval,
      masters = _ref.masters,
      showCurrentTime = _ref.showCurrentTime,
      verticalSize = _ref.verticalSize,
      props = _objectWithoutProperties(_ref, ["interval", "masters", "showCurrentTime", "verticalSize"]);

  // const verticalSize = 5;
  var rowOffset = 1;

  var _React$useState = _react.default.useState((0, _moment.default)('17.18 24.12.2020', 'HH.mm DD.MM.YYYY').toDate()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentTime = _React$useState2[0],
      setTime = _React$useState2[1];

  _react.default.useState(function () {
    if (showCurrentTime) {
      setInterval(function () {
        setTime(new Date());
      }, 30000);
    }
  }, []);

  var minTime = _react.default.useMemo(function () {
    var minTime = Infinity;
    masters.forEach(function (item) {
      var events = item.events;
      events.forEach(function (i) {
        minTime = i.startTime < minTime ? i.startTime : minTime;
      });
    });
    return minTime;
  }, [masters]);

  var eventsArr = _react.default.useMemo(function () {
    return masters.reduce(function (acc, item, index) {
      var events = item.events;
      var masterEvents = events.map(function (i, j) {
        return /*#__PURE__*/_react.default.createElement(_EventCell.default, {
          type: true,
          eventConfirmed: i.confirmed,
          key: 'event' + index + j,
          startTime: i.startTime,
          endTime: i.endTime,
          verticalSize: verticalSize,
          col: index + 1,
          interval: interval,
          rowOffset: rowOffset,
          data: i,
          setRef: function setRef(ref) {
            if (!showCurrentTime && minTime === i.startTime) {
              ref.scrollIntoView({
                block: 'center'
              });
            }
          }
        });
      });
      return [].concat(_toConsumableArray(acc), _toConsumableArray(masterEvents));
    }, []);
  }, [masters]);

  var disableArr = _react.default.useMemo(function () {
    return masters.reduce(function (acc, item, index) {
      var disabledTime = item.disabledTime;
      var masterEvents = disabledTime.map(function (i, j) {
        return /*#__PURE__*/_react.default.createElement(_DisabledCell.default, {
          key: 'disable' + index + j,
          startTime: i.startTime,
          endTime: i.endTime,
          verticalSize: verticalSize,
          col: index + 1,
          interval: interval,
          rowOffset: rowOffset
        });
      });
      return [].concat(_toConsumableArray(acc), _toConsumableArray(masterEvents));
    }, []);
  }, [masters]);

  return /*#__PURE__*/_react.default.createElement(_Grid.default, _extends({
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
    }
  }, props), eventsArr, disableArr, showCurrentTime && /*#__PURE__*/_react.default.createElement(_CurrentTime.default, {
    setRef: function setRef(ref) {
      if (showCurrentTime) {
        ref.scrollIntoView({
          block: 'center'
        });
      }
    },
    time: currentTime,
    cols: masters.length + 1,
    verticalSize: verticalSize,
    interval: interval,
    rowOffset: rowOffset
  }));
};

TimeGrid.defaultProps = {
  masters: [],
  interval: 10,
  verticalSize: 5,
  showCurrentTime: false
};
TimeGrid.propTypes = {
  masters: _propTypes.default.array,
  showCurrentTime: _propTypes.default.bool,
  interval: _propTypes.default.number,
  verticalSize: _propTypes.default.number
};
var _default = TimeGrid;
exports.default = _default;