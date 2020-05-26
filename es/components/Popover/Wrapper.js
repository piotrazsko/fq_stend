import React from 'react';
import PropTypes from 'prop-types';
var style = {
  "container": "style-module_fq_container___2pgq-",
  "positionContainer": "style-module_fq_positionContainer___3rdF0",
  "background": "style-module_fq_background___3Lefb"
};

var positionPopover = function positionPopover(el, container) {
  if (el) {
    var position = el.getBoundingClientRect();
    var screenSize = window.screen;

    if (position.left < 0) {
      container.style.left = 0;
    }

    if (position.top < 0) {
      container.style.top = 0;
    }

    if (position.right > screenSize.width) {
      container.style.left = screenSize.width - (position.width + 15) + 'px';
    } // console.log(position, screenSize);
    // if (position.bottom) {
    //     el.scrollIntoView();
    // }

  }
};

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      anchorEl = _ref.anchorEl,
      _onClick = _ref.onClick;
  var inputEl = React.useRef(null);
  var container = React.useRef(null);
  React.useEffect(function () {
    positionPopover(inputEl.current, container.current);
  }, []);
  return React.createElement("div", {
    className: style.positionContainer,
    style: anchorEl && {
      top: anchorEl.offsetTop,
      left: anchorEl.offsetLeft
    },
    ref: container
  }, React.createElement("div", {
    onClick: function onClick(ev) {
      ev.nativeEvent.stopPropagation();
      ev.nativeEvent.preventDefault();

      _onClick();
    },
    ref: inputEl,
    className: style.container
  }, children), React.createElement("div", {
    className: style.background,
    onClick: function onClick() {
      _onClick();
    }
  }));
};

Wrapper.propTypes = {
  children: PropTypes.any,
  anchorEl: PropTypes.any,
  onClick: PropTypes.func
};
export default Wrapper;