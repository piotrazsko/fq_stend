import React from 'react';
import PropTypes from 'prop-types';
import Background from './Background';

var PopupBackground = function PopupBackground(_ref) {
  var onClick = _ref.onClick,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      className = _ref.className,
      children = _ref.children,
      childrenClassName = _ref.childrenClassName;
  return visible ? /*#__PURE__*/React.createElement(Background, {
    onClick: onClick,
    className: className,
    childrenClassName: childrenClassName
  }, children) : null;
};

PopupBackground.propTypes = {
  visible: PropTypes.bool,
  className: PropTypes.string,
  childrenClassName: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]).isRequired
};
export default PopupBackground;