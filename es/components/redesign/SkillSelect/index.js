"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Item = _interopRequireDefault(require("./Item"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var SkillSelect = function SkillSelect(_ref) {
  var skills = _ref.skills,
      searchText = _ref.searchText,
      _ref$showInputs = _ref.showInputs,
      showInputs = _ref$showInputs === void 0 ? true : _ref$showInputs,
      selectedSkills = _ref.selectedSkills,
      onChangeCustomSkills = _ref.onChangeCustomSkills,
      onChange = _ref.onChange,
      showOnlySkills = _ref.showOnlySkills,
      _ref$customSkills = _ref.customSkills,
      customSkills = _ref$customSkills === void 0 ? [] : _ref$customSkills,
      itemComponentCustomSubSkill = _ref.itemComponentCustomSubSkill,
      itemComponentSubSkill = _ref.itemComponentSubSkill,
      forceExpand = _ref.forceExpand,
      defaultExpand = _ref.defaultExpand,
      _ref$showSelectAll = _ref.showSelectAll,
      showSelectAll = _ref$showSelectAll === void 0 ? false : _ref$showSelectAll,
      _ref$showSelectedItem = _ref.showSelectedItemsCount,
      showSelectedItemsCount = _ref$showSelectedItem === void 0 ? false : _ref$showSelectedItem,
      _ref$customSkillCount = _ref.customSkillCount,
      customSkillCount = _ref$customSkillCount === void 0 ? false : _ref$customSkillCount,
      onFilter = _ref.onFilter,
      itemProps = _ref.itemProps,
      subItemProps = _ref.subItemProps,
      selectedCustomSkills = _ref.selectedCustomSkills;

  var skillsFiltred = _react.default.useMemo(function () {
    return showOnlySkills ? skills.reduce(function (acc, i) {
      var filtredSubskills = i.sub_skills.filter(function (i) {
        return showOnlySkills.includes(i.id);
      });
      return filtredSubskills.length ? [].concat(_toConsumableArray(acc), [_objectSpread(_objectSpread({}, i), {}, {
        sub_skills: filtredSubskills
      })]) : _toConsumableArray(acc);
    }, []) : skills.reduce(function (acc, i) {
      var filtredSubskills = i.sub_skills.filter(function (i) {
        return i.title.toLowerCase().search(searchText.toLowerCase()) !== -1;
      });
      return filtredSubskills.length ? [].concat(_toConsumableArray(acc), [_objectSpread(_objectSpread({}, i), {}, {
        sub_skills: filtredSubskills
      })]) : _toConsumableArray(acc);
    }, []);
  }, [searchText, showOnlySkills, skills]);

  var customSkillsFiltred = _react.default.useMemo(function () {
    var skills = searchText.length > 0 ? customSkills.filter(function (i) {
      return i.title.toLowerCase().search(searchText.toLowerCase()) !== -1;
    }) : customSkills;
    return skills.length > 0 ? [{
      description: 'Уникальные услуги',
      id: 'custom',
      parent_skill_id: null,
      parent_uid: null,
      sub_skills: _toConsumableArray(skills),
      title: 'Уникальные услуги',
      uid: 'customSkills'
    }] : [];
  }, [customSkills, searchText]);

  var _React$useState = _react.default.useState(defaultExpand ? _toConsumableArray(skills.map(function (i) {
    return i.id;
  })) : []),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var _React$useState3 = _react.default.useState(defaultExpand ? [].concat(_toConsumableArray(customSkills.map(function (i) {
    return i.id;
  })), ['custom']) : []),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      expandedCustom = _React$useState4[0],
      setExpandedCustom = _React$useState4[1];

  var _React$useState5 = _react.default.useState(_toConsumableArray(selectedSkills)),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selected = _React$useState6[0],
      setSelected = _React$useState6[1];

  var _React$useState7 = _react.default.useState(_toConsumableArray(selectedCustomSkills)),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      selectedCustom = _React$useState8[0],
      setSelectedCustom = _React$useState8[1];

  _react.default.useEffect(function () {
    if (selectedSkills.length !== selected.length) {
      setSelected(_toConsumableArray(selectedSkills));
    }
  }, [selectedSkills]);

  _react.default.useEffect(function () {
    onChange(_toConsumableArray(selected));
  }, [selected]);

  _react.default.useEffect(function () {
    onChangeCustomSkills(_toConsumableArray(selectedCustom));
  }, [selectedCustom]);

  _react.default.useEffect(function () {
    onFilter({
      skillsFiltred: skillsFiltred,
      customSkillsFiltred: customSkillsFiltred
    });
  }, [skillsFiltred, customSkillsFiltred]);

  return /*#__PURE__*/_react.default.createElement("div", null, (searchText || showOnlySkills ? skillsFiltred : skills).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_Item.default, _extends({
      showSelectAll: showSelectAll,
      showInputs: showInputs,
      key: i.id,
      expanded: searchText || showOnlySkills ? skillsFiltred.map(function (i) {
        return i.id;
      }) : expanded,
      setExpanded: setExpanded,
      forceExpand: forceExpand,
      selected: selected,
      setSelected: setSelected,
      showSelectedItemsCount: showSelectedItemsCount,
      data: i,
      itemComponent: itemComponentSubSkill,
      subItemProps: subItemProps
    }, itemProps));
  }), customSkills && customSkillsFiltred.map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_Item.default, _extends({
      showSelectedItemsCount: showSelectedItemsCount,
      showSelectAll: showSelectAll,
      itemComponent: itemComponentCustomSubSkill,
      showInputs: showInputs,
      key: i.id,
      expanded: searchText || showOnlySkills ? customSkillsFiltred.map(function (i) {
        return i.id;
      }) : expandedCustom,
      forceExpand: forceExpand,
      setExpanded: setExpandedCustom,
      selected: selectedCustom,
      setSelected: setSelectedCustom,
      data: i,
      count: customSkillCount ? (0, _get.default)(customSkillsFiltred, '[0].sub_skills', []).length : false,
      subItemProps: subItemProps
    }, itemProps));
  }));
};

SkillSelect.defaultProps = {
  selectedCustom: [],
  selected: [],
  setSelected: function setSelected() {},
  setSelectedCustom: function setSelectedCustom() {},
  selectedSkills: [],
  customSkills: [],
  selectedCustomSkills: [],
  onChange: function onChange() {},
  searchText: '',
  showOnlySkills: false,
  itemComponentSubSkill: false,
  itemComponentCustomSubSkill: false,
  onChangeCustomSkills: function onChangeCustomSkills() {},
  forceExpand: false,
  skills: [],
  defaultExpand: false,
  customSkillCount: false,
  onFilter: function onFilter() {}
};
SkillSelect.propTypes = {
  skills: _propTypes.default.array,
  searchText: _propTypes.default.string,
  showInputs: _propTypes.default.bool,
  selectedSkills: _propTypes.default.array,
  onChange: _propTypes.default.func,
  selectedCustom: _propTypes.default.array,
  selected: _propTypes.default.array,
  setSelected: _propTypes.default.func,
  setSelectedCustom: _propTypes.default.func,
  showOnlySkills: _propTypes.default.array,
  onChangeCustomSkills: _propTypes.default.func,
  customSkills: _propTypes.default.array,
  selectedCustomSkills: _propTypes.default.array,
  itemComponentSubSkill: _propTypes.default.element,
  itemComponentCustomSubSkill: _propTypes.default.element,
  forceExpand: _propTypes.default.bool,
  showSelectedItemsCount: _propTypes.default.bool,
  showSelectAll: _propTypes.default.bool,
  defaultExpand: _propTypes.default.bool,
  customSkillCount: _propTypes.default.number,
  onFilter: _propTypes.default.func,
  itemProps: _propTypes.default.object,
  subItemProps: _propTypes.default.func
};
var _default = SkillSelect;
exports.default = _default;