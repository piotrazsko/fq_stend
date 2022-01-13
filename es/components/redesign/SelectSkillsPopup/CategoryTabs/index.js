"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CatedoryTabs = function CatedoryTabs(props) {
  var skills = props.skills,
      customSkills = props.customSkills,
      _onClick = props.onClick,
      focusElement = props.focusElement;

  var scrollRef = _react.default.useRef(null);

  var _React$useState = _react.default.useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var handleMouseDown = function handleMouseDown(element) {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      isScrolling: true,
      clientX: element.clientX
    }));
  };

  var handleMouseUp = function handleMouseUp() {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      isScrolling: false
    }));
  };

  var handleMouseMove = function handleMouseMove(element) {
    var clientX = state.clientX,
        scrollX = state.scrollX;

    if (state.isScrolling) {
      scrollRef.current.scrollLeft = scrollX - element.clientX + clientX;
      scrollX = scrollX + element.clientX - clientX;
      clientX = element.clientX;
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.tabsContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.tabs,
    ref: scrollRef,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseUp
  }, skills.map(function (skill) {
    return /*#__PURE__*/_react.default.createElement("button", {
      key: skill.id,
      type: "button",
      className: [_stylesModule.default.tabsButton, focusElement === skill.id ? _stylesModule.default.selected : ''].join(' '),
      onClick: function onClick() {
        return _onClick(skill.id);
      }
    }, skill.title);
  }), customSkills && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: [_stylesModule.default.tabsButton, focusElement === "custom" ? _stylesModule.default.selected : ''].join(' '),
    onClick: function onClick() {
      return _onClick("custom");
    }
  }, "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438")));
};

CatedoryTabs.propTypes = {
  focusElement: _propTypes.default.string,
  skills: _propTypes.default.array,
  customSkills: _propTypes.default.array,
  onClick: _propTypes.default.func
};
var _default = CatedoryTabs;
exports.default = _default;