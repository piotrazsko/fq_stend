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

function SvgCup(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 40,
    height: 40,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M38 4h-6V2a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v6a8 8 0 0 0 8 8h3.08A12 12 0 0 0 18 23.82V28h-2a6 6 0 0 0-6 6v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a6 6 0 0 0-6-6h-2v-4.18A12 12 0 0 0 28.92 20H32a8 8 0 0 0 8-8V6a2 2 0 0 0-2-2zM8 16a4 4 0 0 1-4-4V8h4v4a12 12 0 0 0 .7 4H8zm16 16a2 2 0 0 1 2 2v2H14v-2a2 2 0 0 1 2-2h8zm4-20a8 8 0 0 1-16 0V4h16v8zm8 0a4 4 0 0 1-4 4h-.7a12 12 0 0 0 .7-4V8h4v4z",
    fill: "#767676"
  }));
}

var _default = SvgCup;
exports.default = _default;