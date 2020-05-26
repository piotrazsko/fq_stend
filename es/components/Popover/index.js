function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
var style = {
  "container": "style-module_fq_container___2pgq-",
  "positionContainer": "style-module_fq_positionContainer___3rdF0",
  "background": "style-module_fq_background___3Lefb"
};
import Wrapper from './Wrapper';

var Popover = function Popover(_ref) {
  var children = _ref.children,
      anchorEl = _ref.anchorEl,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      _ref$showForce = _ref.showForce,
      showForce = _ref$showForce === void 0 ? false : _ref$showForce,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose;

  var _useState = useState(visible),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      switchShow = _useState2[1];

  useEffect(function () {
    switchShow(visible);
  }, [visible]); // BUG:  showd after mount

  useEffect(function () {
    if (!show) {
      onClose();
    }
  }, [show]);
  return (show || showForce) && React.createElement(Wrapper, {
    anchorEl: anchorEl,
    onClick: function onClick() {
      switchShow(!show);
    }
  }, children);
};

Popover.propTypes = {
  children: PropTypes.any,
  showForce: PropTypes.bool,
  visible: PropTypes.bool,
  onClose: PropTypes.func
};
export default Popover;