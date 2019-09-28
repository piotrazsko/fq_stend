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

// console.log(fullStar);
// console.log(emptyStar);
var Rating = function Rating(_ref) {
  var rating = _ref.rating,
      className = _ref.className;
  return _react.default.createElement(_reactRating.default, {
    initialRating: parseFloat(rating),
    readonly: true,
    fractions: 2,
    emptySymbol: _emptyStar.default,
    fullSymbol: _fullStar.default
  });
};

Rating.propTypes = {
  rating: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  className: _propTypes.default.string
};
var _default = Rating;
exports.default = _default;