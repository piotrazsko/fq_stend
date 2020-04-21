import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

const Background = ({ onClick, children }) => {
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    const handleClick = event => {
        onClick(event);
    };
    return (
        <div
            className={style.popup_background}
            role="presentation"
            onClick={ev => {
                handleClick(ev);
                ev.stopPropagation();
            }}
        >
            <div className={style.popup_background_inbox} onClick={ev => ev.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

Background.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array])
        .isRequired,
};

export default Background;
