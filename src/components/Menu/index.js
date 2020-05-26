import React from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover';
import Icon from '@material-ui/core/Icon';
import style from './style.module.scss';
const Menu = ({ menuItems = [], ...props }) => {
    return (
        <Popover {...props}>
            {menuItems.map((item, index) => (
                <div
                    className={style.item}
                    onClick={ev => {
                        item.handler(ev);
                        ev.nativeEvent.stopPropagation();
                        ev.nativeEvent.preventDefault();
                    }}
                    key={item.title + index}
                >
                    {item.icon && <Icon>{item.icon}</Icon>} {item.name}
                </div>
            ))}
        </Popover>
    );
};

Menu.propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            onClick: PropTypes.func,
        })
    ).isRequired,
    visible: PropTypes.bool,
    showForce: PropTypes.bool,
    anchorEl: PropTypes.any,
    // : PropTypes.
};

export default Menu;
