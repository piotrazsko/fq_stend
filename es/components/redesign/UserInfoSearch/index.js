"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _RatingLocation = _interopRequireDefault(require("../RatingLocation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserInfoSearch = function UserInfoSearch(_ref) {
  var data = _ref.data,
      onClick = _ref.onClick,
      _ref$isMaster = _ref.isMaster,
      isMaster = _ref$isMaster === void 0 ? false : _ref$isMaster;
  var first_name = data.first_name,
      last_name = data.last_name,
      rating = data.rating,
      master_feedbacks_count = data.master_feedbacks_count,
      avatar = data.avatar,
      id = data.id,
      feedback_count = data.feedback_count,
      city = data.city,
      _data$info = data.info,
      info = _data$info === void 0 ? '' : _data$info;
  return !!data && /*#__PURE__*/_react.default.createElement("div", {
    onClick: onClick,
    className: _styleModule.default.item,
    key: id
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    alt: "",
    src: avatar || ''
  }, "".concat((0, _get.default)(first_name, '[0]', '')).concat((0, _get.default)(last_name, '[0]', ''))), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.infoContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.info
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.title
  }, "".concat(first_name || '', " ").concat(last_name || ''))), /*#__PURE__*/_react.default.createElement(_RatingLocation.default, {
    rating: rating,
    feedback_count: feedback_count || master_feedbacks_count,
    city: city
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.additionalInfo
  }, info));
};

UserInfoSearch.defaultProps = {
  data: {},
  onClick: function onClick() {}
};
UserInfoSearch.propTypes = {
  onClick: _propTypes.default.func,
  isMaster: _propTypes.default.bool
};
var _default = UserInfoSearch;
exports.default = _default;