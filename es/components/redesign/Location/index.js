"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Location = require("../../../static/images/Location.svg");

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Location = function Location(_ref) {
  var city = _ref.city,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.container, className].join(' ')
  }, city && /*#__PURE__*/_react.default.createElement(_Location.ReactComponent, {
    className: _styleModule.default.locationIcon
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.city
  }, city));
};

Location.propTypes = {
  city: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = Location;
exports.default = _default;