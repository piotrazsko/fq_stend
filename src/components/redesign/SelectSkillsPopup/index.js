import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import PopupBackground from '../../Popup';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import SkillsSelect from '../SkillItem';
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
                <SkillsSelect
                    forceExpand={forceExpand}
                    selectedSkills={selectedSkillsState}
                    onChange={setSelectedSkills}
                    onChangeCustom
                    showInputs={false}
                    skills={skills}
                    searchText={search}
                    showCustomSkill={false}
                    customSkills={customSkills}
                    selectedCustomSkills={selectedCustomSkillsState}
                    onChangeCustomSkills={setSelectedCustomSkills}
                    addCustomSkills={onAddCustomSkills}
                />
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
};

export default SelectSkillsPopup;