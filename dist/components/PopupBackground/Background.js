"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Background = _ref => {
  let {
    onClick,
    children,
    childrenClassName = '',
    className = ''
  } = _ref;
  _react.default.useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);
  const handleClick = event => {
    onClick(event);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.popup_background, className].join(' '),
    role: "presentation",
    onClick: ev => {
      handleClick(ev);
      ev.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.popup_background_inbox, childrenClassName].join(' '),
    onClick: ev => ev.stopPropagation()
  }, children));
};
Background.propTypes = {
  onClick: _propTypes.default.func,
  className: _propTypes.default.string,
  childrenClassName: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.array]).isRequired
};
var _default = exports.default = Background;