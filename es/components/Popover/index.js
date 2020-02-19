function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
var style = {
  "container": "style-module_fq_container___2pgq-",
  "positionContainer": "style-module_fq_positionContainer___3rdF0"
};

var positionPopover = function positionPopover(el) {
  if (el) {
    var position = el.getBoundingClientRect();

    if (position.left < 0) {
      el.style.left -= position.left;
    }

    if (position.top < 0) {
      el.style.top -= position.top;
    }

    if (position.right < 0) {
      el.style.right -= position.right;
    }

    if (position.bottom < 0) {
      el.style.bottom -= position.bottom;
    }
  }
};

var Popover = function Popover(_ref) {
  var children = _ref.children,
      _ref$defaultShow = _ref.defaultShow,
      defaultShow = _ref$defaultShow === void 0 ? false : _ref$defaultShow,
      _ref$showForce = _ref.showForce,
      showForce = _ref$showForce === void 0 ? false : _ref$showForce,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose;
  var inputEl = useRef(null);
  useEffect(function () {
    positionPopover(inputEl.current);
  });

  var _useState = useState(defaultShow),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      switchShow = _useState2[1]; // const listener = ev => {
  // 	if (ev.target) {
  // 		document.body.removeEventListener('click', listener);
  // 		switchShow(!show);
  // 	}
  // };
  // useEffect(() => {
  // 	document.body.removeEventListener('click', listener);
  // 	document.body.addEventListener('click', listener);
  // }, []);


  return (show || showForce) && React.createElement("div", {
    className: style.positionContainer
  }, React.createElement("div", {
    onClick: function onClick(ev) {
      ev.nativeEvent.stopPropagation();
      ev.nativeEvent.preventDefault();
      onClose(ev);
      switchShow(!show);
    },
    ref: inputEl,
    className: style.container
  }, children));
};

Popover.propTypes = {
  children: PropTypes.any,
  showForce: PropTypes.bool,
  defaultShow: PropTypes.bool,
  onClose: PropTypes.func
};
export default Popover;