import React from 'react';
import PropTypes from 'prop-types';
var style = {
  "popup_background": "style-module_fq_popup_background___1eN_y",
  "popup_background_inbox": "style-module_fq_popup_background_inbox___1IsCJ"
};

var PopupBackground = function PopupBackground(_ref) {
  var onClick = _ref.onClick,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      children = _ref.children;

  var handleClick = function handleClick(event) {
    onClick(event);
  };

  return visible ? React.createElement("div", {
    className: style.popup_background,
    role: "presentation",
    onClick: function onClick(ev) {
      handleClick(ev);
      ev.stopPropagation();
    },
    onKeyDown: function onKeyDown() {}
  }, React.createElement("div", {
    className: style.popup_background_inbox,
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    }
  }, children)) : null;
};

PopupBackground.propTypes = {
  visible: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]).isRequired
};
export default PopupBackground;