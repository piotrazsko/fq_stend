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
  var _ref$onClickgoogle = _ref.onClickgoogle,
      onClickgoogle = _ref$onClickgoogle === void 0 ? function () {} : _ref$onClickgoogle,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: _stylesModule.default.container
  }, _react.default.createElement(_Button.default, {
    onClick: function onClick() {
      alert('Скоро в AppStore ');
    }
  }, _react.default.createElement(_Avatar.default, {
    imageUrl: _appStore.default,
    className: _stylesModule.default.appStore
  })), _react.default.createElement(_Button.default, {
    onClick: onClickgoogle
  }, _react.default.createElement(_Avatar.default, {
    imageUrl: _googlePlay.default,
    className: _stylesModule.default.googlePlay
  })));
};

StoresBox.propTypes = {
  onClickgoogle: _propTypes.default.func,
  onClick: _propTypes.default.func
};
var _default = StoresBox;
exports.default = _default;