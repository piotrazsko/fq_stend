"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "container": "style-module_fq_container___3UmWF",
  "baseblock": "style-module_fq_baseblock___3PR-Y",
  "numberblock": "style-module_fq_numberblock___1dan-"
};

var NumberOrders = function NumberOrders(_ref) {
  var ordersValue = _ref.ordersValue,
      text = _ref.text;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.baseblock
  }, text), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.numberblock
  }, ordersValue));
};

NumberOrders.propTypes = {
  text: _propTypes.default.string,
  ordersValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
NumberOrders.defaultProps = {
  text: 'Количество заказов',
  ordersValue: 0
};
var _default = NumberOrders;
exports.default = _default;