"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
var _Wrapper = _interopRequireDefault(require("./Wrapper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Popover = _ref => {
  let {
    children,
    anchorEl,
    visible = false,
    showForce = false,
    onClose = () => {}
  } = _ref;
  const [show, switchShow] = (0, _react.useState)(visible);
  (0, _react.useEffect)(() => {
    switchShow(visible);
  }, [visible]);

  // BUG:  showd after mount
  (0, _react.useEffect)(() => {
    if (!show) {
      onClose();
    }
  }, [show]);
  return (show || showForce) && /*#__PURE__*/_react.default.createElement(_Wrapper.default, {
    anchorEl: anchorEl,
    onClick: () => {
      switchShow(!show);
    }
  }, children);
};
Popover.propTypes = {
  children: _propTypes.default.any,
  showForce: _propTypes.default.bool,
  visible: _propTypes.default.bool,
  onClose: _propTypes.default.func
};
var _default = exports.default = Popover;