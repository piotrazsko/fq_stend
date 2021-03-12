"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Breadcrumbs = _interopRequireDefault(require("@material-ui/core/Breadcrumbs"));

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _reactRouterDom = require("react-router-dom");

var _style = _interopRequireDefault(require("./style.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = '#eb5757';

var Skeleton = function Skeleton(_ref) {
  var children = _ref.children,
      _ref$nextButtonText = _ref.nextButtonText,
      nextButtonText = _ref$nextButtonText === void 0 ? '+ Добавить мастера' : _ref$nextButtonText,
      onNext = _ref.onNext,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$subTitle = _ref.subTitle,
      subTitle = _ref$subTitle === void 0 ? '' : _ref$subTitle,
      _ref$showBreadcump = _ref.showBreadcump,
      showBreadcump = _ref$showBreadcump === void 0 ? false : _ref$showBreadcump,
      breadcamps = _ref.breadcamps,
      _ref$showTitle = _ref.showTitle,
      showTitle = _ref$showTitle === void 0 ? true : _ref$showTitle,
      _ref$backButtonText = _ref.backButtonText,
      backButtonText = _ref$backButtonText === void 0 ? '' : _ref$backButtonText,
      onBack = _ref.onBack,
      _ref$textError = _ref.textError,
      textError = _ref$textError === void 0 ? '' : _ref$textError,
      _ref$textInfo = _ref.textInfo,
      textInfo = _ref$textInfo === void 0 ? '' : _ref$textInfo,
      _ref$bottomPositionBu = _ref.bottomPositionButtons,
      bottomPositionButtons = _ref$bottomPositionBu === void 0 ? true : _ref$bottomPositionBu,
      _ref$showBackButtonIn = _ref.showBackButtonInTop,
      showBackButtonInTop = _ref$showBackButtonIn === void 0 ? false : _ref$showBackButtonIn,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? '#fff' : _ref$backgroundColor,
      _ref$headerChildren = _ref.headerChildren,
      headerChildren = _ref$headerChildren === void 0 ? '' : _ref$headerChildren,
      classes = _ref.classes,
      buttonClasses = _ref.buttonClasses;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showBackButtonInTop && /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    style: {
      backgroundColor: backgroundColor
    },
    className: _style.default.backButtonInTop
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: onBack
  }, /*#__PURE__*/_react.default.createElement(_ArrowBack.default, {
    htmlColor: color
  }))))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    style: {
      backgroundColor: backgroundColor
    },
    className: _style.default.root
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12
  }, showTitle && /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.title
  }, showBreadcump ? /*#__PURE__*/_react.default.createElement(_Breadcrumbs.default, {
    className: _style.default.breadcamps,
    separator: ">",
    "aria-label": "breadcrumb"
  }, breadcamps.map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
      key: i.link,
      className: [_style.default.link, _style.default.breadcamps].join(' '),
      to: i.link
    }, i.title);
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: _style.default.breadcamps,
    color: "textPrimary"
  }, title)) : showTitle && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h4"
  }, title), headerChildren, onNext && !bottomPositionButtons && /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: onNext,
    variant: "contained",
    color: "primary",
    classes: buttonClasses
  }, nextButtonText)), showBreadcump && showTitle && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h4"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: [_style.default.children, classes.children].join(' ')
  }, subTitle && /*#__PURE__*/_react.default.createElement("span", {
    className: [_style.default.subTitle, classes.subtitle || ''].join(' ')
  }, subTitle), children), bottomPositionButtons && /*#__PURE__*/_react.default.createElement("div", null, backButtonText && /*#__PURE__*/_react.default.createElement(_Button.default, {
    size: "large",
    variant: "outlined",
    color: "primary",
    onClick: onBack,
    classes: buttonClasses
  }, backButtonText), nextButtonText && onNext && /*#__PURE__*/_react.default.createElement(_Button.default, {
    size: "large",
    variant: "contained",
    color: "primary",
    onClick: onNext
  }, nextButtonText), /*#__PURE__*/_react.default.createElement("span", {
    className: _style.default.textError
  }, " ", textError), /*#__PURE__*/_react.default.createElement("span", {
    className: _style.default.textInfo
  }, " ", textInfo)))));
};

Skeleton.propTypes = {
  children: _propTypes.default.any,
  onNext: _propTypes.default.func,
  subTitle: _propTypes.default.string,
  title: _propTypes.default.string,
  showBreadcump: _propTypes.default.bool,
  nextButtonText: _propTypes.default.string,
  breadcamps: _propTypes.default.array,
  backButtonText: _propTypes.default.string,
  onBack: _propTypes.default.func,
  textError: _propTypes.default.string,
  textInfo: _propTypes.default.string,
  bottomPositionButtons: _propTypes.default.bool,
  showBackButtonInTop: _propTypes.default.bool,
  backgroundColor: _propTypes.default.string,
  headerChildren: _propTypes.default.element,
  showTitle: _propTypes.default.bool,
  classes: _propTypes.default.shape({
    children: _propTypes.default.string
  }),
  buttonClasses: _propTypes.default.object
};
Skeleton.defaultProps = {
  onNext: function onNext() {},
  onBack: function onBack() {},
  breadcamps: [],
  headerChildren: '',
  classes: {
    children: ''
  }
};
var _default = Skeleton;
exports.default = _default;