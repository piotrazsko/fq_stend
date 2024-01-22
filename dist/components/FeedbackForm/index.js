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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FeedbackForm = _ref => {
  let {
    type,
    onClick = () => {},
    onCancel = () => {},
    textConfirm = 'Отправить',
    textCancel = 'Позже',
    show = false,
    showForce = false,
    popupCoreProps = {},
    ratingProps = {},
    inputProps = {}
  } = _ref;
  const [message, setMessage] = _react.default.useState('');
  const [rating, setRating] = _react.default.useState(5);
  return /*#__PURE__*/_react.default.createElement(_PopupsCore.PopupCore, _extends({
    showIcon: false,
    showForce: showForce,
    showPopup: show,
    colorConfirm: type === 'danger' ? 'secondary' : 'primary',
    onClick: () => {
      if (typeof onClick === 'function') {
        onClick({
          message,
          rating
        });
      }
    },
    textConfirm: textConfirm,
    textCancel: textCancel,
    type: "button",
    onCancel: ev => {
      if (typeof onCancel === 'function') {
        onCancel(ev);
      }
    },
    cancellButtonProps: {
      variant: 'outlined'
    }
  }, popupCoreProps), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.circle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.title
  }, "\u0412\u0441\u0435 \u043B\u0438 \u0432\u0430\u043C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C?"), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.star
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.content
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.ratingContainer
  }, /*#__PURE__*/_react.default.createElement(_InputRating.default, _extends({
    rating: rating,
    onClick: ev => {
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
    onChange: ev => {
      setMessage(ev.target.value);
    }
  }, inputProps)))));
};
FeedbackForm.propTypes = {
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
var _default = exports.default = FeedbackForm;