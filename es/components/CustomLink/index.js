"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _classnames = _interopRequireDefault(require("classnames"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CustomLink = _ref => {
  let {
    children,
    to,
    className,
    ariaLabel,
    hasUnderline
  } = _ref;
  const linkClasses = (0, _classnames.default)(className, _styleModule.default.link, {
    [_styleModule.default.underline]: hasUnderline
  });
  const isRouterLink = typeof to === 'string';
  const props = {
    [isRouterLink ? 'to' : 'onClick']: to,
    className: linkClasses,
    'aria-label': ariaLabel
  };
  return isRouterLink ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, props, children) : /*#__PURE__*/_react.default.createElement("a", props, children);
};
CustomLink.propTypes = {
  children: _propTypes.default.node.isRequired,
  to: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  ariaLabel: _propTypes.default.string,
  classes: _propTypes.default.shape({
    link: _propTypes.default.string.isRequired,
    underline: _propTypes.default.string.isRequired
  }).isRequired,
  className: _propTypes.default.string,
  hasUnderline: _propTypes.default.bool
};
CustomLink.defaultProps = {
  ariaLabel: 'ссылка',
  hasUnderline: false,
  className: null
};
var _default = exports.default = CustomLink;