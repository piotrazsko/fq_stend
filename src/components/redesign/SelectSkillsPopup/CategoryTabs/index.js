import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const CatedoryTabs = props => {
    const {skills, customSkills, onClick, focusElement} = props;
    const scrollRef = React.useRef(null);
    const [state, setState] = React.useState({
        isScrolling: false,
        clientX: 0,
        scrollX: 0
      });

    const handleMouseDown = element => {
        setState({
            ...state,
            isScrolling: true,
            clientX: element.clientX
        });
    };
    const handleMouseUp = () => {
        setState({ ...state, isScrolling: false });
    };
    const handleMouseMove = element => {
        let { clientX, scrollX } = state;
        if (state.isScrolling) {
            scrollRef.current.scrollLeft = scrollX - element.clientX + clientX;
            scrollX = scrollX + element.clientX - clientX;
            clientX = element.clientX;
        }
    };

    return (
        <div className={styles.tabsContainer}>
            <div
                className={styles.tabs}
                ref={scrollRef} 
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
            >
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
