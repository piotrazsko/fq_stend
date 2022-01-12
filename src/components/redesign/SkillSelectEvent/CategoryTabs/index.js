import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classes from 'classnames';

const CatedoryTabs = props => {
    const {skills, customSkills, onClick} = props;

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
                {skills.map(skill => (
                    <button
                        key={skill.id}
                        type="button"
                        className={styles.tabsButton}
                        onClick={() => onClick(skill.id)}
                    >
                        {skill.title}
                    </button>
                ))}
                {customSkills &&
                <button
                    type="button"
                    className={styles.tabsButton}
                    onClick={() => onClick("custom")}
                >
                    Уникальные услуги
                </button>}
            </div>
        </div>
    );
};

CatedoryTabs.propTypes = {
    skills: PropTypes.array,
    customSkills: PropTypes.array,
    onClick: PropTypes.func,
};

export default CatedoryTabs;
