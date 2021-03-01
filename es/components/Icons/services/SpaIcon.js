"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgSpaIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 32,
    height: 32,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.906 11.757c1.956-.4 4.047-.681 5.435-.845a.955.955 0 0 1 1.001 1.319C25.56 16.505 23.033 20.76 18.555 23M16.055 25H26.42c.748 0 1.205-.776.788-1.396-.675-1.005-1.742-2.393-3.153-3.604M11.654 11.757c-1.956-.4-4.048-.681-5.436-.845a.954.954 0 0 0-1 1.319C7 16.505 9.525 20.76 14.004 23M16.055 25H6.187c-.747 0-1.202-.776-.785-1.396.675-1.005 1.742-2.393 3.153-3.604",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.16 5.789l-2.882 5.764a10 10 0 0 0 1.873 11.543l1.197 1.197a1 1 0 0 0 1.414 0l1.196-1.197a10 10 0 0 0 1.873-11.543L16.95 5.79a1 1 0 0 0-1.789 0z",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round"
  }));
}

var _default = SvgSpaIcon;
exports.default = _default;