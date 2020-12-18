import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../helpers/calendar.js';
import style from './style.module.scss';
const Cell = ({
    interval,
    row,
    col,
    colSpan,
    rowSpan,
    isSelected,
    isMobile,
    onClear = () => {},
    selectedTimeText = 'Рабочее время',
}) => {
    switch (true) {
        case isSelected: {
            return '';
        }
        case col == 5 && row == 2:
            return <div className={style.test} />;
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
    endTime: PropTypes.number,
    interval: PropTypes.number,
    startWeekDay: PropTypes.number,
};

export default Cell;
