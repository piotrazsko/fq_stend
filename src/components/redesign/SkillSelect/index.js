import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

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
    itemComponentSubSkill,
    forceExpand,
    showSelectAll = false,
    showSelectedItemsCount = false,
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
    }, [searchText, showOnlySkills]);
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
    }, [customSkills]);
    const [expanded, setExpanded] = React.useState([]);
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
                />
            ))}
            {customSkills &&
                customSkillsFiltred.map(i => (
                    <Item
                        showSelectedItemsCount={showSelectedItemsCount}
                        showSelectAll={showSelectAll}
                        itemComponent={itemComponentSubSkill}
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
    onChangeCustomSkills: () => {},
    forceExpand: false,
    skills: [],
};

SkillSelect.propTypes = {
    skills: PropTypes.array,
    searchText: PropTypes.string,
    addCustomSkills: PropTypes.func.isRequired,
    showCustomSkill: PropTypes.bool,
    showInputs: PropTypes.bool,
    selectedSkills: PropTypes.array,
    onChange: PropTypes.func,
    showOnlySkills: PropTypes.array,
    onChangeCustomSkills: PropTypes.func,
    customSkills: PropTypes.array,
    selectedCustomSkills: PropTypes.array,
    itemComponentSubSkill: PropTypes.element,
    forceExpand: PropTypes.bool,
    showSelectedItemsCount: PropTypes.bool,
};

export default SkillSelect;
