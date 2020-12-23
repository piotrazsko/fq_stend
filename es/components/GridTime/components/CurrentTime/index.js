"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentTime = function CurrentTime(_ref) {
  var time = _ref.time,
      cols = _ref.cols,
      verticalSize = _ref.verticalSize,
      interval = _ref.interval,
      rowOffset = _ref.rowOffset;
  var cellRowStart = ((0, _moment.default)(time).get('minutes') + (0, _moment.default)(time).get('hours') * 60) / (interval * verticalSize);
  var row = Math.ceil((cellRowStart * verticalSize + rowOffset) * verticalSize);
  console.log((0, _moment.default)(time).get('minutes') + (0, _moment.default)(time).get('hours') * 60, cellRowStart, row, 'row');
  var gridArea = "".concat(row + 1, " / ", 2, " / ").concat(row + 2, " / ").concat(cols + 1);
  var gridArea2 = "".concat(row + 1, " / ", 1, " / ").concat(row + 2, " / ", 2);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.time,
    style: {
      gridArea: gridArea2
    }
  }, (0, _moment.default)(time).format('HH:mm')), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.container,
    style: {
      gridArea: gridArea
    }
  }));
};

CurrentTime.propTypes = {// : PropTypes.
};
var _default = CurrentTime;
exports.default = _default;