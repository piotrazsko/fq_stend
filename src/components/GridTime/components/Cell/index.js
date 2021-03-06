import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Avatar from '@material-ui/core/Avatar';
import { WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../../../helpers/calendar.js';

import style from './style.module.scss';

const Cell = ({
    row,
    col,
    isSelected,
    startTime = 0,
    interval = 15,
    getMaster,
    defaultCellOnclick,
    onMasterClick,
    onMasterRightClick,
    onCellRightClick,
}) => {
    const time = startTime + (row - 1) * interval;
    const minutes = (time % 60).toString();
    const hour = Math.floor(time / 60);
    switch (true) {
        case isSelected: {
            return <div />;
        }
        case col === 0 && row === 0: {
            return <div />;
        }
        case col > 0 && row === 0: {
            const master = getMaster(col);
            return (
                <div
                    className={style.avatarContainer}
                    onContextMenu={ev => {
                        onMasterRightClick({ ev, master, interval });
                        ev.preventDefault();
                    }}
                    onClick={ev => {
                        onMasterClick(master, ev);
                    }}
                >
                    <Avatar className={style.avatar} alt="Remy Sharp" src={master.avatar} />
                    <div className={style.name}>{master.name}</div>
                </div>
            );
        }
        case col === 0 && row > 0: {
            return (
                <div className={style.cellTime}>
                    {time % 60 == 0
                        ? `${Math.floor(time / 60)}:${
                              minutes.length === 1 ? '0' + minutes : minutes
                          }`
                        : ''}
                </div>
            );
        }
        case col == 5 && row == 2:
            return <div className={style.test} />;
        default: {
            return (
                <div
                    className={style.emptyCell}
                    onContextMenu={ev => {
                        onCellRightClick({
                            ev,
                            time: { hour, minutes },
                            col,
                            row,
                            master: getMaster(col),
                        });
                        ev.preventDefault();
                    }}
                    onClick={ev => {
                        defaultCellOnclick({ time: { hour, minutes }, col, row });
                    }}
                >
                    <div className={style.content}>
                        {hour + ':' + (minutes.length == 1 ? '0' + minutes : minutes)}
                    </div>
                </div>
            );
        }
    }
};

Cell.propTypes = {
    row: PropTypes.number,
    col: PropTypes.number,
    isSelected: PropTypes.bool,
};
Cell.defaultProps = {
    defaultCellOnclick: () => {},
};

export default Cell;
