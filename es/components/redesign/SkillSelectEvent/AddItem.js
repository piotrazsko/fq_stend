"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddItem = function AddItem(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.titleContainer].join(' '),
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("div", null, "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u0443\u0441\u043B\u0443\u0433\u0430"), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small"
  }, /*#__PURE__*/_react.default.createElement(_Add.default, {
    htmlColor: '#FA835F'
  }))));
};

AddItem.propTypes = {
  onClick: _propTypes.default.func.isRequired
};
var _default = AddItem;
exports.default = _default;