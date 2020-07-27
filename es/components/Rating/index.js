"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRating = _interopRequireDefault(require("react-rating"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyStar = function EmptyStar(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("title", null, "ic_star_empty"), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.5 0L7.96 7.826H0l6.49 4.593L4.007 20l6.494-4.696L16.992 20l-2.484-7.58 6.49-4.594h-7.96z",
    stroke: "#FDCC0D",
    fill: "none",
    fillRule: "evenodd"
  }));
};

EmptyStar.defaultProps = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  xmlns: "http://www.w3.org/2000/svg"
};

var FullStar = function FullStar(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("title", null, "ic_star_full"), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.5 0L7.96 7.826H0l6.49 4.593L4.007 20l6.494-4.696L16.993 20l-2.486-7.58 6.491-4.594h-7.96z",
    stroke: "#FDCC0D",
    fill: "#FDCC0D",
    fillRule: "evenodd"
  }));
};

FullStar.defaultProps = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  xmlns: "http://www.w3.org/2000/svg"
};

var Rating = function Rating(_ref) {
  var rating = _ref.rating,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement(_reactRating.default, {
    initialRating: parseFloat(rating),
    readonly: true,
    fractions: 2,
    emptySymbol: /*#__PURE__*/_react.default.createElement("img", {
      className: className,
      src: EmptyStar,
      alt: "\u043F\u0443\u0441\u0442\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430"
    }),
    fullSymbol: /*#__PURE__*/_react.default.createElement("img", {
      className: className,
      src: FullStar,
      alt: "\u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430"
    })
  });
};

Rating.propTypes = {
  rating: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  className: _propTypes.default.string
};
var _default = Rating;
exports.default = _default;