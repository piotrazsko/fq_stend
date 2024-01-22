"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _appStore = _interopRequireDefault(require("../../static/images/stores/appStore.png"));
var _googlePlay = _interopRequireDefault(require("../../static/images/stores/googlePlay.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const StoresBox = _ref => {
  let {
    appStoreLink,
    googlePlayLink,
    target = '_blank'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.container
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: appStoreLink,
    target: target,
    className: _stylesModule.default.link,
    rel: target == '_blank' ? 'noopener noreferrer' : undefined
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _stylesModule.default.imageContainer,
    alt: "app_store",
    src: _appStore.default
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: googlePlayLink,
    target: target,
    className: _stylesModule.default.link,
    rel: target == '_blank' ? 'noopener noreferrer' : undefined
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _stylesModule.default.imageContainer,
    alt: "google_play",
    src: _googlePlay.default
  })));
};
StoresBox.propTypes = {
  appStoreLink: _propTypes.default.string,
  googlePlayLink: _propTypes.default.string,
  target: _propTypes.default.string
};
var _default = exports.default = StoresBox;