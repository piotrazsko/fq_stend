"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRating = _interopRequireDefault(require("react-rating"));
var _emptyStar = _interopRequireDefault(require("../../static/images/emptyStar.svg"));
var _fullStar = _interopRequireDefault(require("../../static/images/fullStar.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InputRating = _ref => {
  let {
    rating = 0,
    className,
    onClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactRating.default, {
    initialRating: parseFloat(rating),
    fractions: 1,
    onClick: onClick,
    emptySymbol: /*#__PURE__*/_react.default.createElement("img", {
      className: className,
      src: _emptyStar.default,
      alt: "\u043F\u0443\u0441\u0442\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430"
    }),
    fullSymbol: /*#__PURE__*/_react.default.createElement("img", {
      className: className,
      src: _fullStar.default,
      alt: "\u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430"
    })
  });
};
InputRating.propTypes = {
  rating: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  className: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = exports.default = InputRating;