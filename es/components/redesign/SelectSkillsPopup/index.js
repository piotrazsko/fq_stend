"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Popup = _interopRequireDefault(require("../../Popup"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _SkillSelect = _interopRequireDefault(require("../SkillSelect"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var color = '#fa835f';

var SelectSkillsPopup = function SelectSkillsPopup(_ref) {
  var _onSubmit = _ref.onSubmit,
      skills = _ref.skills,
      _onCancel = _ref.onCancel,
      onClose = _ref.onClose,
      showPopup = _ref.showPopup,
      selectedSkills = _ref.selectedSkills,
      _ref$selectedCustomSk = _ref.selectedCustomSkills,
      selectedCustomSkills = _ref$selectedCustomSk === void 0 ? [] : _ref$selectedCustomSk,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Выберите услуги для комлекса' : _ref$title,
      customSkills = _ref.customSkills,
      forceExpand = _ref.forceExpand,
      onAddCustomSkills = _ref.onAddCustomSkills;

  var _React$useState = _react.default.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      search = _React$useState2[0],
      setSearch = _React$useState2[1];

  var _React$useState3 = _react.default.useState(_toConsumableArray(selectedSkills)),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedSkillsState = _React$useState4[0],
      setSelectedSkills = _React$useState4[1];

  var _React$useState5 = _react.default.useState(_toConsumableArray(selectedCustomSkills)),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selectedCustomSkillsState = _React$useState6[0],
      setSelectedCustomSkills = _React$useState6[1];

  return /*#__PURE__*/_react.default.createElement(_Popup.default, {
    showClear: true,
    title: title,
    onClear: function onClear() {
      onClose();
    },
    onSubmit: function onSubmit() {
      return _onSubmit(selectedSkillsState, selectedCustomSkillsState);
    },
    onCancel: function onCancel() {
      _onCancel();

      setSelectedSkills([]);
    },
    showSubmit: true,
    showCancel: true,
    showPopup: showPopup,
    visible: true,
    cancelButtonText: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
    submitButtonText: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
    childrenContainerClassName: _styleModule.default.dataContainer,
    popupBackgroundsProps: {
      onClick: onClose
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.topBlock
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    className: _styleModule.default.searchInput,
    InputProps: {
      startAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "start"
      }, /*#__PURE__*/_react.default.createElement(_Search.default, {
        htmlColor: color
      }))
    },
    required: true,
    value: search,
    onChange: function onChange(ev) {
      return setSearch(ev.target.value);
    },
    fullWidth: true,
    size: "small",
    variant: "outlined",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u043C\u0430\u043D\u0438\u043A\u044E\u0440"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.container
  }, /*#__PURE__*/_react.default.createElement(_SkillSelect.default, {
    forceExpand: forceExpand,
    selectedSkills: selectedSkillsState,
    onChange: setSelectedSkills,
    onChangeCustom: true,
    showInputs: false,
    skills: skills,
    searchText: search,
    showCustomSkill: false,
    customSkills: customSkills,
    selectedCustomSkills: selectedCustomSkillsState,
    onChangeCustomSkills: setSelectedCustomSkills,
    addCustomSkills: onAddCustomSkills
  })));
};

SelectSkillsPopup.propTypes = {
  onSubmit: _propTypes.default.func.isRequired,
  onCancel: _propTypes.default.func.isRequired,
  selectedSkills: _propTypes.default.array,
  skills: _propTypes.default.array,
  showPopup: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func.isRequired,
  title: _propTypes.default.string,
  customSkills: _propTypes.default.array,
  forceExpand: _propTypes.default.bool,
  selectedCustomSkills: _propTypes.default.array,
  onAddCustomSkills: _propTypes.default.func
};
SelectSkillsPopup.defaultProps = {
  selectedCustomSkills: [],
  forceExpand: false,
  onAddCustomSkills: function onAddCustomSkills() {},
  showPopup: false,
  selectedSkills: [],
  title: 'test',
  onSubmit: function onSubmit() {},
  onCancel: function onCancel() {},
  onClose: function onClose() {}
};
var _default = SelectSkillsPopup;
exports.default = _default;