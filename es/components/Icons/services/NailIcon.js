"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SvgNailIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 32,
    height: 32,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M24 27v-9a7.985 7.985 0 0 0-3-6.245M8 27v-9a7.985 7.985 0 0 1 3-6.245",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 11,
    y: 5,
    width: 10,
    height: 17,
    rx: 5,
    stroke: "#000",
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 19a4.992 4.992 0 0 1 4-2c1.636 0 3.088.786 4 2",
    stroke: "#000",
    strokeWidth: 2
  }));
}
var _default = exports.default = SvgNailIcon;