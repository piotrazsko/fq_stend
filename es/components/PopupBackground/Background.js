import React from 'react';
import PropTypes from 'prop-types';
var style = {
  "popup_background": "style-module_fq_popup_background___1eN_y",
  "popup_background_inbox": "style-module_fq_popup_background_inbox___1IsCJ"
};

var Background = function Background(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children;
  React.useEffect(function () {
    document.body.style.overflow = 'hidden';
    return function () {
      document.body.style.overflow = 'auto';
    };
  }, []);

  var handleClick = function handleClick(event) {
    onClick(event);
  };

  return React.createElement("div", {
    className: style.popup_background,
    role: "presentation",
    onClick: function onClick(ev) {
      handleClick(ev);
      ev.stopPropagation();
    }
  }, React.createElement("div", {
    className: style.popup_background_inbox,
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    }
  }, children));
};

Background.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]).isRequired
};
export default Background;