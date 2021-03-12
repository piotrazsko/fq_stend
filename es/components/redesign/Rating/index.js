"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Star = _interopRequireDefault(require("@material-ui/icons/Star"));

var _get = _interopRequireDefault(require("lodash/get"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rating = function Rating(_ref) {
  var data = _ref.data;
  var master_feedbacks_count = data.master_feedbacks_count,
      user_rating = data.user_rating;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.additionalInfo
  }, master_feedbacks_count ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Star.default, {
    htmlColor: "#FFBB2F",
    className: _styleModule.default.locationIcon
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.rating
  }, user_rating)) : '', /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.feedbacks
  }, master_feedbacks_count ? "(".concat(master_feedbacks_count, ")") : 'Нет отзывов'));
};

Rating.propTypes = {
  data: _propTypes.default.shape({
    master_feedbacks_count: _propTypes.default.number,
    user_rating: _propTypes.default.number
  })
};
var _default = Rating;
exports.default = _default;