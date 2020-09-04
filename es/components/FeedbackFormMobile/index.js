"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PopupsCore = require("../PopupsCore");

var _InputRating = _interopRequireDefault(require("../InputRating"));

var _core = require("@material-ui/core");

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  var _React$useState = _react.default.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      message = _React$useState2[0],
      setMessage = _React$useState2[1];

  var _React$useState3 = _react.default.useState(5),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      rating = _React$useState4[0],
      setRating = _React$useState4[1];

  return /*#__PURE__*/_react.default.createElement(_PopupsCore.PopupCore, _extends({
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
  }, popupCoreProps), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.content
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.title
  }, "\u0412\u0441\u0435 \u043B\u0438 \u0432\u0430\u043C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C?"), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.ratingContainer
  }, /*#__PURE__*/_react.default.createElement(_InputRating.default, _extends({
    rating: rating,
    onClick: function onClick(ev) {
      setRating(ev);
    }
  }, ratingProps))), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.inputContainer
  }, /*#__PURE__*/_react.default.createElement(_core.TextField, _extends({
    margin: "none",
    inputProps: {
      className: _styleModule.default.input
    },
    fullWidth: true,
    placeholder: "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430",
    multiline: true,
    rowsMax: 6,
    value: message,
    onChange: function onChange(ev) {
      setMessage(ev.target.value);
    }
  }, inputProps)))));
};

FeedbackFormMobile.propTypes = {
  type: _propTypes.default.string,
  onClick: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  textConfirm: _propTypes.default.string,
  textCancel: _propTypes.default.string,
  show: _propTypes.default.bool,
  showForce: _propTypes.default.bool,
  popupCoreProps: _propTypes.default.object,
  ratingProps: _propTypes.default.object,
  inputProps: _propTypes.default.object
};
var _default = FeedbackFormMobile;
exports.default = _default;