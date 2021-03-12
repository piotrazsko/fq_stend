"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style.scss"));

var _moment = _interopRequireDefault(require("moment"));

var _styles = require("@material-ui/core/styles");

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _Rating = _interopRequireDefault(require("../Rating"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = '#fa835f';

var UserInfo = function UserInfo(_ref) {
  var data = _ref.data,
      onClick = _ref.onClick,
      _ref$isMaster = _ref.isMaster,
      isMaster = _ref$isMaster === void 0 ? false : _ref$isMaster;
  var first_name = data.first_name,
      phone = data.phone,
      last_name = data.last_name,
      rating = data.rating,
      master_feedbacks_count = data.master_feedbacks_count,
      avatar = data.avatar,
      id = data.id,
      user_events_count = data.user_events_count,
      feedback_count = data.feedback_count,
      last_event_date = data.last_event_date;
  var isAdmin = false;
  return !!data && /*#__PURE__*/_react.default.createElement("div", {
    onClick: onClick,
    className: _style.default.item,
    key: id
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    alt: "",
    src: avatar || ''
  }, "".concat((0, _get.default)(first_name, '[0]', '')).concat((0, _get.default)(last_name, '[0]', ''))), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.titleContainer
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.title
  }, "".concat(first_name || '', " ").concat(last_name || '')), phone && !isMaster && /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.phone
  }, "+", phone))), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.additionalInfo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.rating
  }, /*#__PURE__*/_react.default.createElement(_Rating.default, {
    data: {
      user_rating: rating,
      master_feedbacks_count: feedback_count || master_feedbacks_count
    }
  })), isAdmin && /*#__PURE__*/_react.default.createElement("span", null, "Admin")));
};

UserInfo.defaultProps = {
  data: {},
  onClick: function onClick() {}
};
UserInfo.propTypes = {
  onClick: _propTypes.default.func,
  isMaster: _propTypes.default.bool
};
var _default = UserInfo;
exports.default = _default;