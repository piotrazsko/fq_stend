function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
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
  var linkClasses = classNames(className, styles.link, _defineProperty({}, styles.underline, hasUnderline));
  var isRouterLink = typeof to === 'string';
  var props = (_props = {}, _defineProperty(_props, isRouterLink ? 'to' : 'onClick', to), _defineProperty(_props, "className", linkClasses), _defineProperty(_props, 'aria-label', ariaLabel), _props);
  return isRouterLink ? React.createElement(NavLink, props, children) : React.createElement("a", props, children);
};

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  ariaLabel: PropTypes.string,
  classes: PropTypes.shape({
    link: PropTypes.string.isRequired,
    underline: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string,
  hasUnderline: PropTypes.bool
};
CustomLink.defaultProps = {
  ariaLabel: 'ссылка',
  hasUnderline: false,
  className: null
};
export default CustomLink;