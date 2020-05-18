import React from 'react';
import PropTypes from 'prop-types';
var style = {
  "popup_background": "style-module_fq_popup_background___1eN_y",
  "popup_background_inbox": "style-module_fq_popup_background_inbox___1IsCJ"
};

var Background = function Background(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      _ref$childrenClassNam = _ref.childrenClassName,
      childrenClassName = _ref$childrenClassNam === void 0 ? '' : _ref$childrenClassNam,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  React.useEffect(function () {
    document.body.style.overflowY = 'hidden';
    return function () {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  var handleClick = function handleClick(event) {
    onClick(event);
  };

  return React.createElement("div", {
    className: [style.popup_background, className].join(' '),
    role: "presentation",
    onClick: function onClick(ev) {
      handleClick(ev);
      ev.stopPropagation();
    }
  }, React.createElement("div", {
    className: [style.popup_background_inbox, childrenClassName].join(' '),
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    }
  }, children));
};

Background.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  childrenClassName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]).isRequired
};
export default Background;