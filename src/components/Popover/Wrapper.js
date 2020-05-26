import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

const positionPopover = (el, container) => {
    if (el) {
        const position = el.getBoundingClientRect();
        // window.outerHeight
        if (position.left < 0) {
            container.style.left = 0;
        }
        if (position.top < 0) {
            container.style.top = 0;
        }
        if (position.right > window.outerWidth) {
            container.style.left = window.outerWidth - (position.width + 15) + 'px';
        }
    }
};
const Wrapper = ({ children, anchorEl, onClick }) => {
    const inputEl = React.useRef(null);
    const container = React.useRef(null);
    React.useEffect(() => {
        positionPopover(inputEl.current, container.current);
    }, []);
    return (
        <div
            className={style.positionContainer}
            style={anchorEl && { top: anchorEl.offsetTop, left: anchorEl.offsetLeft }}
            ref={container}
        >
            <div
                onClick={ev => {
                    ev.nativeEvent.stopPropagation();
                    ev.nativeEvent.preventDefault();
                    onClick();
                }}
                ref={inputEl}
                className={style.container}
            >
                {children}
            </div>
            <div
                className={style.background}
                onClick={() => {
                    onClick();
                }}
            />
        </div>
    );
};

Wrapper.propTypes = {
    children: PropTypes.any,
    anchorEl: PropTypes.any,
    onClick: PropTypes.func,
};

export default Wrapper;
