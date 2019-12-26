function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Fab, Button as ButtonMat } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
var useStyles = makeStyles(function () {
  return {
    primary: {
      'background-color': '#1c7cff',
      color: 'white'
    },
    root: {
      'font-weight': 'bold',
      'font-size': '16px',
      'padding-left': '20px',
      'padding-right': '20px',
      'min-width': 120,
      margin: '0 5px'
    },
    disabled: {
      'background-color': 'rgba(0, 0, 0, 0.12)'
    },
    outlinedPrimary: {
      color: '#1c7cff',
      'border-color': '#1c7cff'
    }
  };
});

var Button = function Button(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'test' : _ref$text,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? false : _ref$type,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      classesExt = _ref.classesExt,
      rest = _objectWithoutProperties(_ref, ["text", "type", "color", "classesExt"]);

  var classes = useStyles();
  return type === 'fab' ? React.createElement(Fab, _extends({
    color: color,
    variant: "extended",
    classes: _objectSpread({
      root: classes.root,
      primary: classes.primary,
      disabled: classes.disabled
    }, classesExt),
    "aria-label": "edit"
  }, rest), text) : React.createElement(ButtonMat, _extends({
    color: color,
    variant: "contained",
    classes: _objectSpread({
      root: classes.root,
      containedPrimary: classes.primary,
      outlinedPrimary: classes.outlinedPrimary,
      disabled: classes.disabled
    }, classesExt),
    "aria-label": "edit"
  }, rest), text);
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  classesExt: PropTypes.object
};
export default Button;