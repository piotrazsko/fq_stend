"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Star = _interopRequireDefault(require("@material-ui/icons/Star"));

var _Location = _interopRequireDefault(require("../Location"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { ReactComponent as Location } from '../../static/images/Location.svg';
var RatingLocation = function RatingLocation(_ref) {
  var feedback_count = _ref.feedback_count,
      rating = _ref.rating,
      city = _ref.city;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.additionalInfo
  }, feedback_count ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Star.default, {
    htmlColor: "#FFBB2F",
    className: _styleModule.default.locationIcon
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.rating
  }, rating)) : '', /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.feedbacks
  }, feedback_count ? "(".concat(feedback_count, ")") : 'Нет отзывов'), city && /*#__PURE__*/_react.default.createElement(_Location.default, {
    city: city
  }));
};

RatingLocation.propTypes = {
  feedback_count: _propTypes.default.number,
  rating: _propTypes.default.number,
  city: _propTypes.default.string
};
var _default = RatingLocation;
exports.default = _default;