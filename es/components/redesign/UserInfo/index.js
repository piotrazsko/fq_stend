"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

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
      isMaster = _ref$isMaster === void 0 ? false : _ref$isMaster,
      classes = _ref.classes;
  var first_name = data.first_name,
      phone = data.phone,
      last_name = data.last_name,
      rating = data.rating,
      master_feedbacks_count = data.master_feedbacks_count,
      avatar = data.avatar,
      id = data.id,
      feedback_count = data.feedback_count;
  var isAdmin = false;
  return !!data && /*#__PURE__*/_react.default.createElement("div", {
    onClick: onClick,
    className: [_styleModule.default.item, classes.root].join(' '),
    key: id
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    alt: "",
    src: avatar || ''
  }, "".concat((0, _get.default)(first_name, '[0]', '')).concat((0, _get.default)(last_name, '[0]', ''))), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.titleContainer
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.title, classes.title].join(' ')
  }, "".concat(first_name || '', " ").concat(last_name || '')), phone && !isMaster && /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.phone
  }, "+", phone))), /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.additionalInfo, classes.dataContainer].join(' ')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.rating, classes.rating].join(' ')
  }, /*#__PURE__*/_react.default.createElement(_Rating.default, {
    data: {
      user_rating: rating,
      master_feedbacks_count: feedback_count || master_feedbacks_count
    }
  })), isAdmin && /*#__PURE__*/_react.default.createElement("span", null, "Admin")));
};

UserInfo.defaultProps = {
  data: {},
  onClick: function onClick() {},
  classes: {
    root: '',
    rating: '',
    title: '',
    dataContainer: ''
  }
};
UserInfo.propTypes = {
  onClick: _propTypes.default.func,
  isMaster: _propTypes.default.bool,
  classes: _propTypes.default.shape({
    root: _propTypes.default.string,
    title: _propTypes.default.string,
    rating: _propTypes.default.string,
    dataContainer: _propTypes.default.string
  })
};
var _default = UserInfo;
exports.default = _default;