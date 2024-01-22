"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SvgTattoo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 32,
    height: 32,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5.214 26.686l1.5-2.598",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.616 16.258l5.196 3-3.5 6.33-5.196-3 3.5-6.33zM21.044 9l5.196 3-4.5 7.794-5.196-3L21.044 9zm0 0l-4.33-2.5",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.464 17.325l1.75-3.03m0 0l9.526 5.5L26.24 12l2.165 1.25m-16.19 1.044l-2.599-1.5",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
var _default = exports.default = SvgTattoo;