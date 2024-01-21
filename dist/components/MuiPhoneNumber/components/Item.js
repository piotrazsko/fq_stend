"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _RootRef = _interopRequireDefault(require("@material-ui/core/RootRef"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
class Item extends _react.default.PureComponent {
  render() {
    const {
      name,
      iso2,
      dialCode,
      localization,
      itemRef,
      native,
      ...restProps
    } = this.props;
    if (native) {
      return /*#__PURE__*/_react.default.createElement("option", _extends({
        className: "country",
        "data-dial-code": "1",
        "data-country-code": iso2,
        value: iso2
      }, restProps), localization || name, ' ', "+".concat(dialCode));
    }
    return /*#__PURE__*/_react.default.createElement(_RootRef.default, {
      rootRef: node => itemRef(node)
    }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, _extends({
      className: "country",
      "data-dial-code": "1",
      "data-country-code": iso2
    }, restProps), /*#__PURE__*/_react.default.createElement("div", {
      className: "flag ".concat(iso2, " margin")
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "country-name"
    }, localization || name), /*#__PURE__*/_react.default.createElement("span", {
      className: "dial-code"
    }, "+".concat(dialCode))));
  }
}
Item.propTypes = {
  name: _propTypes.default.string.isRequired,
  iso2: _propTypes.default.string.isRequired,
  dialCode: _propTypes.default.string.isRequired,
  itemRef: _propTypes.default.func.isRequired,
  localization: _propTypes.default.string,
  native: _propTypes.default.bool
};
Item.defaultProps = {
  localization: null,
  native: false
};
var _default = exports.default = Item;