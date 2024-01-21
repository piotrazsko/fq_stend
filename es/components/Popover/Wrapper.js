"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* global global */

const positionPopover = (el, container) => {
  if (el && global) {
    const position = el.getBoundingClientRect();
    if (position.left < 0) {
      container.style.left = 0;
    }
    if (position.top < 0) {
      container.style.top = 0;
    }
    if (position.right > global.outerWidth) {
      container.style.left = global.outerWidth - (position.width + 15) + 'px';
    }
  }
};
const Wrapper = _ref => {
  let {
    children,
    anchorEl,
    onClick
  } = _ref;
  const inputEl = _react.default.useRef(null);
  const container = _react.default.useRef(null);
  _react.default.useEffect(() => {
    positionPopover(inputEl.current, container.current);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.positionContainer,
    style: anchorEl && {
      top: anchorEl.offsetTop,
      left: anchorEl.offsetLeft
    },
    ref: container
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: ev => {
      ev.nativeEvent.stopPropagation();
      ev.nativeEvent.preventDefault();
      onClick();
    },
    ref: inputEl,
    className: _styleModule.default.container
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.background,
    onClick: () => {
      onClick();
    }
  }));
};
Wrapper.propTypes = {
  children: _propTypes.default.any,
  anchorEl: _propTypes.default.any,
  onClick: _propTypes.default.func
};
var _default = exports.default = Wrapper;