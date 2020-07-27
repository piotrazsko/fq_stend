"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  "container": "style-module_fq_container___2pgq-",
  "positionContainer": "style-module_fq_positionContainer___3rdF0",
  "background": "style-module_fq_background___3Lefb"
};

var positionPopover = function positionPopover(el, container) {
  if (el) {
    var position = el.getBoundingClientRect(); // window.outerHeight

    if (position.left < 0) {
      container.style.left = 0;
    }

    if (position.top < 0) {
      container.style.top = 0;
    }

    if (position.right > window.outerWidth) {
      container.style.left = window.outerWidth - (position.width + 15) + 'px';
    }
  }
};

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      anchorEl = _ref.anchorEl,
      _onClick = _ref.onClick;

  var inputEl = _react.default.useRef(null);

  var container = _react.default.useRef(null);

  _react.default.useEffect(function () {
    positionPopover(inputEl.current, container.current);
  }, []);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: style.positionContainer,
    style: anchorEl && {
      top: anchorEl.offsetTop,
      left: anchorEl.offsetLeft
    },
    ref: container
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick(ev) {
      ev.nativeEvent.stopPropagation();
      ev.nativeEvent.preventDefault();

      _onClick();
    },
    ref: inputEl,
    className: style.container
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: style.background,
    onClick: function onClick() {
      _onClick();
    }
  }));
};

Wrapper.propTypes = {
  children: _propTypes.default.any,
  anchorEl: _propTypes.default.any,
  onClick: _propTypes.default.func
};
var _default = Wrapper;
exports.default = _default;