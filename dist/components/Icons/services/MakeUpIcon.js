"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SvgMakeUpIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 32,
    height: 32,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 15.5h4v10a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v-10zM7 19.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-7zM10.132 8.27C10.64 7.38 12 7.74 12 8.765V18.5H8V12l2.132-3.73zM17.127 10.506c-.084-.224-.139-.465-.092-.7.313-1.571 2.64-2.306 3.988-2.306 1.806 0 3.641 1.018 3.936 2.307.053.234-.002.475-.086.7L23 15.5h-4l-1.873-4.994z",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round"
  }));
}
var _default = exports.default = SvgMakeUpIcon;