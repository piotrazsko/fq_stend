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
const UserInfoSearch = _ref => {
  let {
    data,
    onClick,
    isMaster = false
  } = _ref;
  const {
    first_name,
    last_name,
    rating,
    master_feedbacks_count,
    avatar,
    id,
    feedback_count,
    city,
    info = ''
  } = data;
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
  onClick: () => {}
};
UserInfoSearch.propTypes = {
  onClick: _propTypes.default.func,
  isMaster: _propTypes.default.bool
};
var _default = exports.default = UserInfoSearch;