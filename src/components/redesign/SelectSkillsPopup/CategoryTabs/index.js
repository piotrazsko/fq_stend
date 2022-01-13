import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const CatedoryTabs = props => {
    const {skills, customSkills, onClick, focusElement} = props;

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
                {skills.map(skill => (
                    <button
                        key={skill.id}
                        type="button"
                        className={[styles.tabsButton, focusElement === skill.id ? styles.selected : ''].join(' ')}
                        onClick={() => onClick(skill.id)}
                    >
                        {skill.title}
                    </button>
                ))}
                {customSkills &&
                <button
                    type="button"
                    className={[styles.tabsButton, focusElement === "custom" ? styles.selected : ''].join(' ')}
                    onClick={() => onClick("custom")}
                >
                    Уникальные услуги
                </button>}
            </div>
        </div>
    );
};

CatedoryTabs.propTypes = {
    focusElement: PropTypes.string,
    skills: PropTypes.array,
    customSkills: PropTypes.array,
    onClick: PropTypes.func,
};

export default CatedoryTabs;
