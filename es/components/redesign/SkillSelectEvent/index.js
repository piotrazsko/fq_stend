"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Item = _interopRequireDefault(require("./Item"));
var _get = _interopRequireDefault(require("lodash/get"));
var _CategoryTabs = _interopRequireDefault(require("./CategoryTabs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SkillSelectEvent = _ref => {
  let {
    skills,
    searchText,
    showInputs = true,
    selectedSkills,
    selectedCustomSkills,
    onChangeCustomSkills,
    onChange,
    showOnlySkills,
    customSkills = [],
    itemComponentCustomSubSkill,
    itemComponentSubSkill,
    forceExpand,
    defaultExpand,
    showSelectAll = false,
    showSelectedItemsCount = false,
    customSkillCount = false,
    onFilter,
    itemProps,
    subItemProps
  } = _ref;
  const skillsFiltred = _react.default.useMemo(() => {
    return showOnlySkills ? skills.reduce((acc, i) => {
      const filtredSubskills = i.sub_skills.filter(i => showOnlySkills.includes(i.id));
      return filtredSubskills.length ? [...acc, {
        ...i,
        sub_skills: filtredSubskills
      }] : [...acc];
    }, []) : skills.reduce((acc, i) => {
      const filtredSubskills = i.sub_skills.filter(i => i.title.toLowerCase().search(searchText.toLowerCase()) !== -1);
      return filtredSubskills.length ? [...acc, {
        ...i,
        sub_skills: filtredSubskills
      }] : [...acc];
    }, []);
  }, [searchText, showOnlySkills, skills]);
  const customSkillsFiltred = _react.default.useMemo(() => {
    const skills = searchText.length > 0 ? customSkills.filter(i => i.title.toLowerCase().search(searchText.toLowerCase()) !== -1) : customSkills;
    return skills.length > 0 ? [{
      description: 'Уникальные услуги',
      id: 'custom',
      parent_skill_id: null,
      parent_uid: null,
      sub_skills: [...skills],
      title: 'Уникальные услуги',
      uid: 'customSkills'
    }] : [];
  }, [customSkills, searchText]);
  const [expanded, setExpanded] = _react.default.useState(defaultExpand ? [...skills.map(i => i.id)] : []);
  const [expandedCustom, setExpandedCustom] = _react.default.useState(defaultExpand ? [...customSkills.map(i => i.id), 'custom'] : []);
  const [selected, setSelected] = _react.default.useState([...selectedSkills]);
  const [selectedCustom, setSelectedCustom] = _react.default.useState([...selectedCustomSkills]);
  _react.default.useEffect(() => {
    if (selectedSkills.length !== selected.length) {
      setSelected([...selectedSkills]);
    }
  }, [selectedSkills]);
  _react.default.useEffect(() => {
    onChange([...selected]);
  }, [selected]);
  _react.default.useEffect(() => {
    onChangeCustomSkills([...selectedCustom]);
  }, [selectedCustom]);
  _react.default.useEffect(() => {
    onFilter({
      skillsFiltred,
      customSkillsFiltred
    });
  }, [skillsFiltred, customSkillsFiltred]);
  const setCatedory = () => {};
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_CategoryTabs.default, {
    skills: skills,
    customSkills: customSkills,
    onClick: setCatedory
  }), (searchText || showOnlySkills ? skillsFiltred : skills).map(i => /*#__PURE__*/_react.default.createElement(_Item.default, _extends({
    showSelectAll: showSelectAll,
    showInputs: showInputs,
    key: i.id,
    expanded: searchText || showOnlySkills ? skillsFiltred.map(i => i.id) : expanded,
    setExpanded: setExpanded,
    forceExpand: forceExpand,
    selected: selected,
    setSelected: setSelected,
    showSelectedItemsCount: showSelectedItemsCount,
    data: i,
    itemComponent: itemComponentSubSkill,
    subItemProps: subItemProps
  }, itemProps))), customSkills && customSkillsFiltred.map(i => /*#__PURE__*/_react.default.createElement(_Item.default, _extends({
    showSelectedItemsCount: showSelectedItemsCount,
    showSelectAll: showSelectAll,
    itemComponent: itemComponentCustomSubSkill,
    showInputs: showInputs,
    key: i.id,
    expanded: searchText || showOnlySkills ? customSkillsFiltred.map(i => i.id) : expandedCustom,
    forceExpand: forceExpand,
    setExpanded: setExpandedCustom,
    selected: selectedCustom,
    setSelected: setSelectedCustom,
    data: i,
    count: customSkillCount ? (0, _get.default)(customSkillsFiltred, '[0].sub_skills', []).length : false,
    subItemProps: subItemProps
  }, itemProps))));
};
SkillSelectEvent.defaultProps = {
  selectedSkills: [],
  customSkills: [],
  selectedCustomSkills: [],
  onChange: () => {},
  searchText: '',
  showOnlySkills: false,
  itemComponentSubSkill: false,
  itemComponentCustomSubSkill: false,
  onChangeCustomSkills: () => {},
  forceExpand: false,
  skills: [],
  defaultExpand: false,
  customSkillCount: false,
  onFilter: () => {}
};
SkillSelectEvent.propTypes = {
  skills: _propTypes.default.array,
  searchText: _propTypes.default.string,
  showInputs: _propTypes.default.bool,
  selectedSkills: _propTypes.default.array,
  onChange: _propTypes.default.func,
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
var _default = exports.default = SkillSelectEvent;