import React from 'react';
import PropTypes from 'prop-types';
var styles = {
  "icon": "styles-module_fq_icon___1jf_B",
  "iconDefault": "styles-module_fq_iconDefault____5OV8"
};
import classes from 'classnames';

var Avatar = function Avatar(_ref) {
  var imageUrl = _ref.imageUrl,
      className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: imageUrl ? {
      backgroundImage: "url(".concat(imageUrl, ")")
    } : null,
    className: classes(styles.icon, styles.iconDefault, className)
  }, children);
};

Avatar.propTypes = {
  imageUrl: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element
};
export default Avatar;