"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));
var _get = _interopRequireDefault(require("lodash/get"));
var _Rating = _interopRequireDefault(require("@material-ui/lab/Rating"));
var _moment = _interopRequireDefault(require("moment"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
var _skills = require("../../../helpers/skills");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* global Set */

const FeedbackItem = _ref => {
  let {
    data = {},
    history,
    showDivider = true,
    showParent = false,
    skillsList = []
  } = _ref;
  const {
    rating,
    master,
    feedback,
    user,
    created_at,
    skills,
    id,
    user_id
  } = data;
  const skillsStr = !showParent ? skills.map(i => i.title).join(',') : Array.from(new Set((0, _skills.getParentsSkillsBySkillsUID)(skills, skillsList))).map(i => i.title).join(', ');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.container, showDivider ? _styleModule.default.divider : ''].join(' ')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.containerInfo,
    onClick: () => {
      history.push('/clients/' + user_id);
    }
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    src: (0, _get.default)(data, 'user.avatar')
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.infoBlock
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.name
  }, " ".concat((0, _get.default)(user, 'first_name') || '', " ").concat((0, _get.default)(user, 'last_name') || '')), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.date
  }, (0, _moment.default)(created_at).format('HH:mm, DD MMMM YYYY')))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Rating.default, {
    size: "small",
    name: "simple-controlled",
    value: rating,
    readOnly: true
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.feedbackText
  }, feedback), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.masterName
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.title
  }, "\u041C\u0430\u0441\u0442\u0435\u0440:"), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.value
  }, "".concat((0, _get.default)(master, 'first_name'), " ").concat((0, _get.default)(master, 'last_name')))), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.skills
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.title
  }, "\u0423\u0441\u043B\u0443\u0433\u0438:"), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.value
  }, skillsStr))));
};
FeedbackItem.propTypes = {
  data: _propTypes.default.object,
  history: _propTypes.default.object,
  showDivider: _propTypes.default.bool,
  showParent: _propTypes.default.bool,
  skillsList: _propTypes.default.array
};
var _default = exports.default = FeedbackItem;