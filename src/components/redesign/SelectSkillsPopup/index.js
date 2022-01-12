import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import PopupBackground from '../../Popup';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import SkillsSelect from '../SkillSelect';
import SkillSelectEvent from '../SkillSelectEvent'
import style from './style.module.scss';

const color = '#fa835f';

const SelectSkillsPopup = ({
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
    selected,
    setSelected,
    selectedCustom,
    setSelectedCustom,
    isEvent
}) => {
    const [search, setSearch] = React.useState();
    const [selectedSkillsState, setSelectedSkills] = React.useState([...selectedSkills]);
    const [selectedCustomSkillsState, setSelectedCustomSkills] = React.useState([
        ...selectedCustomSkills,
    ]);
    return (
        <PopupBackground
            showClear
            title={title}
            onClear={() => {
                onClose();
            }}
            onSubmit={() => onSubmit(selectedSkillsState, selectedCustomSkillsState)}
            onCancel={() => {
                onCancel();
                setSelectedSkills([]);
            }}
            showSubmit
            showCancel
            showPopup={showPopup}
            visible
            cancelButtonText="Очистить"
            submitButtonText="Добавить"
            childrenContainerClassName={style.dataContainer}
            popupBackgroundsProps={{ onClick: onClose }}
            {...popupProps}
        >
            <div className={style.topBlock}>
                <TextField
                    className={style.searchInput}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon htmlColor={color} />
                            </InputAdornment>
                        ),
                    }}
                    required
                    value={search}
                    onChange={ev => setSearch(ev.target.value)}
                    fullWidth
                    size="small"
                    variant="outlined"
                    placeholder="Введите название услуги, например маникюр"
                />
            </div>

            <div className={style.container}>
                {!isEvent ?
                    <SkillsSelect
                        showSelectAll={showSelectAll}
                        showSelectedItemsCount={showSelectedItemsCount}
                        forceExpand={forceExpand}
                        selectedSkills={selectedSkillsState}
                        onChange={data => {
                            setSelectedSkills(data);
                        }}
                        showInputs={false}
                        skills={skills}
                        searchText={search}
                        showCustomSkill={false}
                        customSkills={customSkills}
                        selectedCustomSkills={selectedCustomSkillsState}
                        onChangeCustomSkills={setSelectedCustomSkills}
                        addCustomSkills={onAddCustomSkills}
                        {...skillsSelectProps}
                    />
                    :
                    <SkillSelectEvent
                        showSelectAll={showSelectAll}
                        showSelectedItemsCount={showSelectedItemsCount}
                        forceExpand={forceExpand}
                        selectedSkills={selectedSkillsState}
                        onChange={data => {
                            setSelectedSkills(data);
                        }}
                        selected={selected}
                        setSelected={setSelected}
                        selectedCustom={selectedCustom}
                        setSelectedCustom={setSelectedCustom}
                        showInputs={false}
                        skills={skills}
                        searchText={search}
                        showCustomSkill={false}
                        customSkills={customSkills}
                        selectedCustomSkills={selectedCustomSkillsState}
                        onChangeCustomSkills={setSelectedCustomSkills}
                        addCustomSkills={onAddCustomSkills}
                        {...skillsSelectProps}
                    />
                }
            </div>
        </PopupBackground>
    );
};

SelectSkillsPopup.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    selectedSkills: PropTypes.array,
    skills: PropTypes.array,
    showPopup: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    customSkills: PropTypes.array,
    forceExpand: PropTypes.bool,
    selectedCustomSkills: PropTypes.array,
    onAddCustomSkills: PropTypes.func,
    showSelectAll: PropTypes.bool,
    showSelectedItemsCount: PropTypes.bool,
    skillsSelectProps: PropTypes.object,
    popupProps: PropTypes.object,
    selectedCustom: PropTypes.array,
    selected: PropTypes.array,
    setSelected: PropTypes.func,
    setSelectedCustom: PropTypes.func,
    isEvent: PropTypes.bool,
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
    isEvent: false,
    selectedCustom: [],
    selected: [],
    setSelected: () => {},
    setSelectedCustom: () => {},
};

export default SelectSkillsPopup;
