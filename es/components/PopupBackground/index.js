import React from 'react';
import PropTypes from 'prop-types';
import Background from './Background';

var PopupBackground = function PopupBackground(_ref) {
  var onClick = _ref.onClick,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      children = _ref.children;
  return visible ? React.createElement(Background, {
    onClick: onClick
  }, children) : null;
};

PopupBackground.propTypes = {
  visible: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]).isRequired
};
export default PopupBackground;