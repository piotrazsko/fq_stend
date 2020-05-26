import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import Wrapper from './Wrapper';

const Popover = ({
    children,
    anchorEl,
    visible = false,
    showForce = false,
    onClose = () => {},
}) => {
    const [show, switchShow] = useState(visible);
    useEffect(() => {
        switchShow(visible);
    }, [visible]);

    // BUG:  showd after mount
    useEffect(() => {
        if (!show) {
            onClose();
        }
    }, [show]);

    return (
        (show || showForce) && (
            <Wrapper
                anchorEl={anchorEl}
                onClick={() => {
                    switchShow(!show);
                }}
            >
                {children}
            </Wrapper>
        )
    );
};

Popover.propTypes = {
    children: PropTypes.any,
    showForce: PropTypes.bool,
    visible: PropTypes.bool,
    onClose: PropTypes.func,
};

export default Popover;
