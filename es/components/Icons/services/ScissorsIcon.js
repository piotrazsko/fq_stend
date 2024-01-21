"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SvgScissorsIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 32,
    height: 32,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 23,
    r: 3,
    stroke: "#000",
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 22,
    cy: 23,
    r: 3,
    stroke: "#000",
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.03 22.925L7.13 8.51a1.73 1.73 0 0 1 .268-2.465v0a1.73 1.73 0 0 1 2.407.268l6.224 7.613 6.223-7.613a1.73 1.73 0 0 1 2.407-.268v0c.767.6.888 1.714.268 2.465L13.03 22.925",
    stroke: "#000",
    strokeWidth: 2
  }));
}
var _default = exports.default = SvgScissorsIcon;