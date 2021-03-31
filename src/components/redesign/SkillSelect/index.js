import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import get from 'lodash/get';

const SkillSelect = ({
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
}) => {
    const skillsFiltred = React.useMemo(() => {
        return showOnlySkills
            ? skills.reduce((acc, i) => {
                  const filtredSubskills = i.sub_skills.filter(i => showOnlySkills.includes(i.id));

                  return filtredSubskills.length
                      ? [...acc, { ...i, sub_skills: filtredSubskills }]
                      : [...acc];
              }, [])
            : skills.reduce((acc, i) => {
                  const filtredSubskills = i.sub_skills.filter(
                      i => i.title.toLowerCase().search(searchText.toLowerCase()) !== -1
                  );

                  return filtredSubskills.length
                      ? [...acc, { ...i, sub_skills: filtredSubskills }]
                      : [...acc];
              }, []);
    }, [searchText, showOnlySkills, skills]);
    const customSkillsFiltred = React.useMemo(() => {
        const skills =
            searchText.length > 0
                ? customSkills.filter(
                      i => i.title.toLowerCase().search(searchText.toLowerCase()) !== -1
                  )
                : customSkills;
        return skills.length > 0
            ? [
                  {
                      description: 'Уникальные услуги',
                      id: 'custom',
                      parent_skill_id: null,
                      parent_uid: null,
                      sub_skills: [...skills],
                      title: 'Уникальные услуги',
                      uid: 'customSkills',
                  },
              ]
            : [];
    }, [customSkills, searchText]);
    const [expanded, setExpanded] = React.useState(defaultExpand ? [...skills.map(i => i.id)] : []);
    const [selected, setSelected] = React.useState([...selectedSkills]);
    const [selectedCustom, setSelectedCustom] = React.useState([...selectedCustomSkills]);
    React.useEffect(() => {
        if (selectedSkills.length !== selected.length) {
            setSelected([...selectedSkills]);
        }
    }, [selectedSkills]);
    React.useEffect(() => {
        onChange([...selected]);
    }, [selected]);
    React.useEffect(() => {
        onChangeCustomSkills([...selectedCustom]);
    }, [selectedCustom]);
    return (
        <div>
            {(searchText || showOnlySkills ? skillsFiltred : skills).map(i => (
                <Item
                    showSelectAll={showSelectAll}
                    showInputs={showInputs}
                    key={i.id}
                    expanded={
                        forceExpand || searchText || showOnlySkills
                            ? skillsFiltred.map(i => i.id)
                            : expanded
                    }
                    setExpanded={setExpanded}
                    selected={selected}
                    setSelected={setSelected}
                    showSelectedItemsCount={showSelectedItemsCount}
                    data={i}
                    itemComponent={itemComponentSubSkill}
                />
            ))}
            {customSkills &&
                customSkillsFiltred.map(i => (
                    <Item
                        showSelectedItemsCount={showSelectedItemsCount}
                        showSelectAll={showSelectAll}
                        itemComponent={itemComponentCustomSubSkill}
                        showInputs={showInputs}
                        key={i.id}
                        expanded={
                            forceExpand || searchText || showOnlySkills
                                ? customSkillsFiltred.map(i => i.id)
                                : expanded
                        }
                        setExpanded={setExpanded}
                        selected={selectedCustom}
                        setSelected={setSelectedCustom}
                        data={i}
                        count={
                            customSkillCount
                                ? get(customSkillsFiltred, '[0].sub_skills', []).length
                                : false
                        }
                    />
                ))}
        </div>
    );
};
SkillSelect.defaultProps = {
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
};

SkillSelect.propTypes = {
    skills: PropTypes.array,
    searchText: PropTypes.string,
    showInputs: PropTypes.bool,
    selectedSkills: PropTypes.array,
    onChange: PropTypes.func,
    showOnlySkills: PropTypes.array,
    onChangeCustomSkills: PropTypes.func,
    customSkills: PropTypes.array,
    selectedCustomSkills: PropTypes.array,
    itemComponentSubSkill: PropTypes.element,
    itemComponentCustomSubSkill: PropTypes.element,
    forceExpand: PropTypes.bool,
    showSelectedItemsCount: PropTypes.bool,
    showSelectAll: PropTypes.bool,
    defaultExpand: PropTypes.bool,
    customSkillCount: PropTypes.number,
};

export default SkillSelect;
