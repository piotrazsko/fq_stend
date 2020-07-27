"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  "popup_background": "style-module_fq_popup_background___1eN_y",
  "popup_background_inbox": "style-module_fq_popup_background_inbox___1IsCJ"
};

var Background = function Background(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      _ref$childrenClassNam = _ref.childrenClassName,
      childrenClassName = _ref$childrenClassNam === void 0 ? '' : _ref$childrenClassNam,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;

  _react.default.useEffect(function () {
    document.body.style.overflowY = 'hidden';
    return function () {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  var handleClick = function handleClick(event) {
    onClick(event);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: [style.popup_background, className].join(' '),
    role: "presentation",
    onClick: function onClick(ev) {
      handleClick(ev);
      ev.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [style.popup_background_inbox, childrenClassName].join(' '),
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    }
  }, children));
};

Background.propTypes = {
  onClick: _propTypes.default.func,
  className: _propTypes.default.string,
  childrenClassName: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.array]).isRequired
};
var _default = Background;
exports.default = _default;