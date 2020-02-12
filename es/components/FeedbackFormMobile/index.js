function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from 'prop-types';
import { PopupCore } from '../PopupsCore';
import InputRating from '../InputRating';
import { TextField } from '@material-ui/core';
var styles = {
  "content": "style-module_fq_content___Avf_5",
  "title": "style-module_fq_title___p8AB0",
  "ratingContainer": "style-module_fq_ratingContainer___EtNMa",
  "inputContainer": "style-module_fq_inputContainer___2SWTP",
  "input": "style-module_fq_input___2S9_k"
};

var FeedbackFormMobile = function FeedbackFormMobile(_ref) {
  var type = _ref.type,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$onCancel = _ref.onCancel,
      _onCancel = _ref$onCancel === void 0 ? function () {} : _ref$onCancel,
      _ref$textConfirm = _ref.textConfirm,
      textConfirm = _ref$textConfirm === void 0 ? 'Отправить' : _ref$textConfirm,
      _ref$textCancel = _ref.textCancel,
      textCancel = _ref$textCancel === void 0 ? 'Позже' : _ref$textCancel,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$showForce = _ref.showForce,
      showForce = _ref$showForce === void 0 ? false : _ref$showForce,
      _ref$popupCoreProps = _ref.popupCoreProps,
      popupCoreProps = _ref$popupCoreProps === void 0 ? {} : _ref$popupCoreProps,
      _ref$ratingProps = _ref.ratingProps,
      ratingProps = _ref$ratingProps === void 0 ? {} : _ref$ratingProps,
      _ref$inputProps = _ref.inputProps,
      inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps;

  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      message = _React$useState2[0],
      setMessage = _React$useState2[1];

  var _React$useState3 = React.useState(5),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      rating = _React$useState4[0],
      setRating = _React$useState4[1];

  return React.createElement(PopupCore, _extends({
    showForce: showForce,
    showPopup: show,
    colorConfirm: type === 'danger' ? 'secondary' : 'primary',
    onClick: function onClick() {
      if (typeof _onClick === 'function') {
        _onClick({
          message: message,
          rating: rating
        });
      }
    },
    textConfirm: textConfirm,
    textCancel: textCancel,
    type: "button",
    onCancel: function onCancel(ev) {
      if (typeof _onCancel === 'function') {
        _onCancel(ev);
      }
    },
    cancellButtonProps: {
      variant: 'outlined'
    }
  }, popupCoreProps), React.createElement("div", {
    className: styles.content
  }, React.createElement("div", {
    className: styles.title
  }, "\u0412\u0441\u0435 \u043B\u0438 \u0432\u0430\u043C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C?"), React.createElement("div", {
    className: styles.ratingContainer
  }, React.createElement(InputRating, _extends({
    rating: rating,
    onClick: function onClick(ev) {
      setRating(ev);
    }
  }, ratingProps))), React.createElement("div", {
    className: styles.inputContainer
  }, React.createElement(TextField, _extends({
    margin: "none",
    inputProps: {
      className: styles.input
    },
    fullWidth: true,
    placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u043F\u0440\u0438\u044F\u0442\u043D\u043E\u0435!",
    multiline: true,
    rowsMax: 6,
    value: message,
    onChange: function onChange(ev) {
      setMessage(ev.target.value);
    }
  }, inputProps)))));
};

FeedbackFormMobile.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  onCancel: PropTypes.func,
  textConfirm: PropTypes.string,
  textCancel: PropTypes.string,
  show: PropTypes.bool,
  showForce: PropTypes.bool,
  popupCoreProps: PropTypes.object,
  ratingProps: PropTypes.object,
  inputProps: PropTypes.object
};
export default FeedbackFormMobile;