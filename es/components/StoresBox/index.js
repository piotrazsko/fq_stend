"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _appStore = _interopRequireDefault(require("../../static/images/stores/appStore.png"));

var _googlePlay = _interopRequireDefault(require("../../static/images/stores/googlePlay.png"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoresBox = function StoresBox(_ref) {
  var appStoreLink = _ref.appStoreLink,
      googlePlayLink = _ref.googlePlayLink,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? '_blank' : _ref$target;
  return _react.default.createElement("div", {
    className: _stylesModule.default.container
  }, _react.default.createElement("a", {
    href: appStoreLink,
    target: target,
    className: _stylesModule.default.link
  }, _react.default.createElement("img", {
    className: _stylesModule.default.imageContainer,
    src: _appStore.default
  })), _react.default.createElement("a", {
    href: googlePlayLink,
    target: target,
    className: _stylesModule.default.link
  }, _react.default.createElement("img", {
    className: _stylesModule.default.imageContainer,
    src: _googlePlay.default
  })));
};

StoresBox.propTypes = {
  appStoreLink: _propTypes.default.string,
  googlePlayLink: _propTypes.default.string
};
var _default = StoresBox;
exports.default = _default;