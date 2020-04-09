import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../helpers/calendar';
import style from './style.module.scss';
const DAY_MS = 60 * 1000 * 60 * 24;
const Cell = ({
    startTime,
    startWeekDay = 0,
    interval,
    row,
    col,
    isSelected,
    isMobile,
    curentDay,
    customTimeSelectedCell = [],
    onClear = () => {},
    selectedTimeText = '',
    bookedTime,
    setCurentDay,
}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const onMenuClick = col => {
        onClear(col);
        handleClose();
    };
    const cell = customTimeSelectedCell.find(i => {
        return i.col == col && i.row == row && i.startWeekDay.valueOf() === curentDay.valueOf();
    });
    switch (true) {
        case Boolean(bookedTime.find(i => i.col == col && i.row == row)):
            return <div className={style.reservedTime}>Запись</div>;

        case Boolean(cell): {
            const time = startTime + (row - 1) * interval;

            const minutes = (time % 60).toString();
            const child =
                typeof selectedTimeText == 'string'
                    ? isMobile
                        ? `${Math.floor(time / 60)}:${
                              minutes.length === 1 ? '0' + minutes : minutes
                          }`
                        : `${Math.floor(time / 60)}:${
                              minutes.length === 1 ? '0' + minutes : minutes
                          } Время выбрано`
                    : selectedTimeText;
            return cell.disabled && !isSelected ? (
                <div disabled />
            ) : (
                <div
                    date={cell.itemTime.toISOString()}
                    className={isSelected ? style.cellCustomDayDisabled : style.cellCustomDay}
                >
                    {child}
                </div>
            );
        }

        case isSelected: {
            const time = startTime + (row - 1) * interval;
            const minutes = (time % 60).toString();
            const child =
                typeof selectedTimeText == 'string'
                    ? isMobile
                        ? `${Math.floor(time / 60)}:${
                              minutes.length === 1 ? '0' + minutes : minutes
                          }`
                        : `${Math.floor(time / 60)}:${
                              minutes.length === 1 ? '0' + minutes : minutes
                          } Время выбрано`
                    : selectedTimeText;
            return <div className={style.selectedCell}>{child}</div>;
        }

        case (col === 0 && row > 0) || (col === 8 && row > 0): {
            const time = startTime + (row - 1) * interval;
            const minutes = (time % 60).toString();
            return (
                <div className={style.cellTime}>{`${Math.floor(time / 60)}:${
                    minutes.length === 1 ? '0' + minutes : minutes
                }`}</div>
            );
        }
        case col === 8 && row == 0: {
            return (
                <IconButton
                    size="small"
                    onClick={() => {
                        setCurentDay(new Date(curentDay.valueOf() + 7 * DAY_MS));
                    }}
                >
                    <ArrowForwardIosIcon
                        style={{
                            fontSize: 20,
                        }}
                        htmlColor="#000"
                    />
                </IconButton>
            );
        }
        case col === 0 && row == 0: {
            return (
                <IconButton
                    size="small"
                    onClick={() => {
                        setCurentDay(new Date(curentDay.valueOf() - 7 * DAY_MS));
                    }}
                >
                    <ArrowForwardIosIcon
                        htmlColor="#000"
                        style={{
                            transform: 'rotate(180deg)',
                            fontSize: 20,
                        }}
                    />
                </IconButton>
            );
        }

        case col > 0 && row === 0 && col < 8: {
            const dayOfWeek = (col - 1 + startWeekDay) % 7;
            const date = new Date(curentDay);
            date.setDate(curentDay.getDate() - curentDay.getDay() + ((col - 1) % 7) + startWeekDay);
            return (
                <div className={style.cellDay}>
                    <div>
                        {isMobile
                            ? `${date.getDate()} ${WEEKDAYS_SHORT[dayOfWeek]}`
                            : `${date.getDate()} ${WEEKDAYS_LONG[dayOfWeek]}`}
                    </div>
                    <div>
                        <IconButton size="small" onClick={handleClick}>
                            <MoreVertIcon style={{ fontSize: 15 }} />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => onMenuClick(col)}>
                                <div className={style.menuItem}>
                                    <DeleteForeverIcon style={{ fontSize: 18 }} /> Очистить
                                </div>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            );
        }

        default:
            return <div />;
    }
};

Cell.propTypes = {
    row: PropTypes.number,
    col: PropTypes.number,
    isSelected: PropTypes.bool,
    onClear: PropTypes.func,
    isMobile: PropTypes.bool,
    selectedTimeText: PropTypes.string,
    startTime: PropTypes.number,
    curentDay: PropTypes.instanceOf(Date),
    interval: PropTypes.number,
    customTimeSelectedCell: PropTypes.shape({
        col: PropTypes.number,
        row: PropTypes.number,
        curentDay: PropTypes.number,
    }),
    bookedTime: PropTypes.array,
    startWeekDay: PropTypes.number,
    setCurentDay: PropTypes.func.isRequired,
};

export default Cell;
