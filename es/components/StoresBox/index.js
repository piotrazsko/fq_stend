"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "container": "styles-module_fq_container___m2A_R",
  "appStore": "styles-module_fq_appStore___d0OZc",
  "googlePlay": "styles-module_fq_googlePlay___2Lxtp",
  "link": "styles-module_fq_link___2POHs",
  "imageContainer": "styles-module_fq_imageContainer___1Gs7j"
};
var appStore = "/public/097295b898a7e7c4ead484051257ba1e.png";
var googlePlay = "/public/ad720b31b694ade3b53cf489497c08e9.png";

var StoresBox = function StoresBox(_ref) {
  var appStoreLink = _ref.appStoreLink,
      googlePlayLink = _ref.googlePlayLink,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? '_blank' : _ref$target;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: appStoreLink,
    target: target,
    className: styles.link,
    rel: target == '_blank' ? 'noopener noreferrer' : undefined
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: styles.imageContainer,
    alt: "app_store",
    src: appStore
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: googlePlayLink,
    target: target,
    className: styles.link,
    rel: target == '_blank' ? 'noopener noreferrer' : undefined
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: styles.imageContainer,
    alt: "google_play",
    src: googlePlay
  })));
};

StoresBox.propTypes = {
  appStoreLink: _propTypes.default.string,
  googlePlayLink: _propTypes.default.string,
  target: _propTypes.default.string
};
var _default = StoresBox;
exports.default = _default;