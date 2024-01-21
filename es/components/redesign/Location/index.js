"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Icons = require("../../Icons");
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Location = _ref => {
  let {
    city,
    className = ''
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.container, className].join(' ')
  }, city && /*#__PURE__*/_react.default.createElement(_Icons.LocationIcon, {
    className: _styleModule.default.locationIcon
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.city
  }, city));
};
Location.propTypes = {
  city: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = exports.default = Location;