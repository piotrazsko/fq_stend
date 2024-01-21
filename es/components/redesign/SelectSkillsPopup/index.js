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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const color = '#fa835f';
const SelectSkillsPopup = _ref => {
  let {
    onSubmit,
    skills,
    onCancel,
    onClose,
    showPopup,
    selectedSkills,
    selectedCustomSkills = [],
    title = 'Выберите услуги для комлекса',
    customSkills,
    forceExpand,
    onAddCustomSkills,
    showSelectAll,
    showSelectedItemsCount,
    skillsSelectProps,
    popupProps,
    selectedCustom,
    selected,
    setSelected,
    setSelectedCustom
  } = _ref;
  const [search, setSearch] = _react.default.useState();
  const [selectedSkillsState, setSelectedSkills] = _react.default.useState([...selectedSkills]);
  const [selectedCustomSkillsState, setSelectedCustomSkills] = _react.default.useState([...selectedCustomSkills]);
  return /*#__PURE__*/_react.default.createElement(_Popup.default, _extends({
    showClear: true,
    title: title,
    onClear: () => {
      onClose();
    },
    onSubmit: () => onSubmit(selectedSkillsState, selectedCustomSkillsState),
    onCancel: () => {
      onCancel();
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
  }, popupProps), /*#__PURE__*/_react.default.createElement("div", {
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
    onChange: ev => setSearch(ev.target.value),
    fullWidth: true,
    size: "small",
    variant: "outlined",
    placeholder: "\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0443"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.container
  }, /*#__PURE__*/_react.default.createElement(_SkillSelect.default, _extends({
    selectedCustom: selectedCustom,
    selected: selected,
    setSelected: setSelected,
    setSelectedCustom: setSelectedCustom,
    showSelectAll: showSelectAll,
    showSelectedItemsCount: showSelectedItemsCount,
    forceExpand: forceExpand,
    selectedSkills: selectedSkillsState,
    onChange: data => {
      setSelectedSkills(data);
    },
    showInputs: false,
    skills: skills,
    searchText: search,
    showCustomSkill: false,
    customSkills: customSkills,
    selectedCustomSkills: selectedCustomSkillsState,
    onChangeCustomSkills: setSelectedCustomSkills,
    addCustomSkills: onAddCustomSkills
  }, skillsSelectProps))));
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
  onAddCustomSkills: _propTypes.default.func,
  showSelectAll: _propTypes.default.bool,
  showSelectedItemsCount: _propTypes.default.bool,
  skillsSelectProps: _propTypes.default.object,
  popupProps: _propTypes.default.object,
  selectedCustom: _propTypes.default.array,
  selected: _propTypes.default.array,
  setSelected: _propTypes.default.func,
  setSelectedCustom: _propTypes.default.func
};
SelectSkillsPopup.defaultProps = {
  selectedCustomSkills: [],
  forceExpand: false,
  onAddCustomSkills: () => {},
  showPopup: false,
  selectedSkills: [],
  title: 'test',
  onSubmit: () => {},
  onCancel: () => {},
  onClose: () => {},
  showSelectAll: false,
  showSelectedItemsCount: false,
  skillsSelectProps: {},
  popupProps: {},
  selectedCustom: [],
  selected: [],
  setSelected: () => {},
  setSelectedCustom: () => {}
};
var _default = exports.default = SelectSkillsPopup;