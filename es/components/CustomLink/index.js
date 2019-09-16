"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomLink = function CustomLink(_ref) {
  var _props;

  var children = _ref.children,
      to = _ref.to,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      hasUnderline = _ref.hasUnderline,
      classes = _ref.classes;
  var linkClasses = (0, _classnames.default)(className, _styleModule.default.link, _defineProperty({}, _styleModule.default.underline, hasUnderline));
  var isRouterLink = (0, _isString2.default)(to);
  var props = (_props = {}, _defineProperty(_props, isRouterLink ? 'to' : 'onClick', to), _defineProperty(_props, "className", linkClasses), _defineProperty(_props, 'aria-label', ariaLabel), _props);
  return isRouterLink ? _react.default.createElement(_reactRouterDom.NavLink, props, children) : _react.default.createElement("a", props, children);
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