"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CatedoryTabs = function CatedoryTabs(props) {
  var skills = props.skills,
      customSkills = props.customSkills,
      _onClick = props.onClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.tabsContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.tabs
  }, skills.map(function (skill) {
    return /*#__PURE__*/_react.default.createElement("button", {
      key: skill.id,
      type: "button",
      className: _stylesModule.default.tabsButton,
      onClick: function onClick() {
        return _onClick(skill.id);
      }
    }, skill.title);
  }), customSkills && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: _stylesModule.default.tabsButton,
    onClick: function onClick() {
      return _onClick("custom");
    }
  }, "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438")));
};

CatedoryTabs.propTypes = {
  skills: _propTypes.default.array,
  customSkills: _propTypes.default.array,
  onClick: _propTypes.default.func
};
var _default = CatedoryTabs;
exports.default = _default;