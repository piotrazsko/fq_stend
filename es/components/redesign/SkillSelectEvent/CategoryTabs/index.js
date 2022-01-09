"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CatedoryTabs = function CatedoryTabs(props) {
  var skills = props.skills,
      customSkills = props.customSkills,
      onClick = props.onClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.tabsContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.tabs
  }, skills.map(function (skill) {
    return /*#__PURE__*/_react.default.createElement("button", {
      key: skill.id,
      type: "button",
      className: _stylesModule.default.tabsButton,
      onClick: onClick
    }, skill.title);
  }), customSkills && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: _stylesModule.default.tabsButton,
    onClick: onClick
  }, "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438")));
};

CatedoryTabs.propTypes = {
  skills: _propTypes.default.array,
  customSkills: _propTypes.default.array,
  onClick: _propTypes.default.func
};
var _default = CatedoryTabs;
exports.default = _default;