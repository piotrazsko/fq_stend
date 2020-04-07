import React from 'react';
import PropTypes from 'prop-types';
import { MONTHS } from '../../../helpers/calendar';
import { IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import style from './style.module.scss';

const DAY_MS = 60 * 1000 * 60 * 24;

const getPrevMonth = curentDay => {
    const date = new Date(curentDay);
    date.setMonth(date.getMonth() - 1);
    return date;
};
const getNextMonth = curentDay => {
    const date = new Date(curentDay);
    date.setMonth(date.getMonth() + 1);
    return date;
};

const Days = ({ curentDay, setCurentDay }) => {
    const firstDayMs = curentDay.valueOf() - curentDay.getDay() * DAY_MS;
    return (
        <React.Fragment>
            <div className={style.monthTitle}>
                <div className={style.month}>{MONTHS[new Date(firstDayMs).getMonth()]}</div>
                <div className={style.year}>{curentDay.getFullYear()}</div>
                <div className={style.buttons}>
                    <IconButton
                        size="small"
                        onClick={() => {
                            setCurentDay(getPrevMonth(curentDay));
                        }}
                    >
                        <ArrowForwardIosIcon
                            htmlColor="#000"
                            style={{
                                transform: 'rotate(180deg)',
                                fontSize: 18,
                            }}
                        />
                    </IconButton>
                    <IconButton
                        size="small"
                        onClick={() => {
                            setCurentDay(getNextMonth(curentDay));
                        }}
                    >
                        <ArrowForwardIosIcon
                            style={{
                                fontSize: 18,
                            }}
                            htmlColor="#000"
                        />
                    </IconButton>
                </div>
            </div>
        </React.Fragment>
    );
};

Days.propTypes = {
    curentDay: PropTypes.instanceOf(Date),
    setCurentDay: PropTypes.func.isRequired,
};

export default Days;
