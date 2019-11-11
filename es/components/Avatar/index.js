import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classes from 'classnames';

var Avatar = function Avatar(_ref) {
  var imageUrl = _ref.imageUrl,
      className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;
  return React.createElement("div", {
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