"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "link": "style-module_fq_link___X1Unw",
  "underline": "style-module_fq_underline___YJlCo"
};

var CustomLink = function CustomLink(_ref) {
  var _props;

  var children = _ref.children,
      to = _ref.to,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      hasUnderline = _ref.hasUnderline;
  var linkClasses = (0, _classnames.default)(className, styles.link, _defineProperty({}, styles.underline, hasUnderline));
  var isRouterLink = typeof to === 'string';
  var props = (_props = {}, _defineProperty(_props, isRouterLink ? 'to' : 'onClick', to), _defineProperty(_props, "className", linkClasses), _defineProperty(_props, 'aria-label', ariaLabel), _props);
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
var _default = CustomLink;
exports.default = _default;