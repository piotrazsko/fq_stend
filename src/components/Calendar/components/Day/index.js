import React from 'react';
import PropTypes from 'prop-types';
import { WEEKDAYS_LONG, MONTHS } from '../../../../helpers/config';
import CalendarToday from '@material-ui/icons/CalendarToday';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import { IconButton } from '@material-ui/core';
import style from './style.module.scss';

const Day = ({
    workingTimeActual,
    setCurentDay,
    curentDay,
    selectDate,
    selectedDate,
    setShowTime,
    disableBeforeCurentTime = true,
    onConfirm = () => {},
    autoConfirm = true,
}) => {
    const workingTimeActualFiltered = disableBeforeCurentTime
        ? (() => {
              const today = new Date();
              const minutes =
                  curentDay.getFullYear() === today.getFullYear() &&
                  curentDay.getMonth() === today.getMonth() &&
                  curentDay.getDate() === today.getDate() &&
                  today.getHours() * 60 + today.getMinutes();
              return workingTimeActual.filter(i => i.start > minutes);
          })()
        : workingTimeActual;
    const getPrevDay = () => {
        const newDate = new Date(curentDay.valueOf() - 1000 * 60 * 60 * 24);
        setCurentDay(newDate);
    };
    const getNextDay = () => {
        const newDate = new Date(curentDay.valueOf() + 1000 * 60 * 60 * 24);
        setCurentDay(newDate);
    };
    const onClickDay = item => {
        const day = new Date(curentDay);
        day.setMinutes(item.minutes);
        day.setHours(item.hour);
        day.setSeconds(0);
        selectDate(day);
        if (autoConfirm) {
            onConfirm(day);
        }
    };
    const checkSelected = item => {
        return (
            curentDay.getFullYear() === selectedDate.getFullYear() &&
            curentDay.getMonth() === selectedDate.getMonth() &&
            curentDay.getDate() === selectedDate.getDate() &&
            item.hour === selectedDate.getHours() &&
            item.minutes === selectedDate.getMinutes()
        );
    };
    return (
        <div className={style['timeContainer']}>
            <div className={[style['time_day-block'], style['time_day-name']].join(' ')}>
                <div
                    className={[style['time_day-name__items'], style[' time_day__weekday']].join(
                        ' '
                    )}
                >
                    {WEEKDAYS_LONG[curentDay.getDay()]}
                </div>
                <div
                    role="button"
                    tabIndex="-1"
                    onKeyDown={() => {}}
                    onClick={setShowTime}
                    className={[
                        style['time_day-name__items'],
                        style['time_day__button-calendar'],
                    ].join(' ')}
                >
                    <CalendarToday />
                </div>
            </div>
            <div className={[style['time_day-block'], style['time_day-slider']].join(' ')}>
                <IconButton
                    size="small"
                    className={style['time_day__button']}
                    role="button"
                    tabIndex="-1"
                    disabled={disableBeforeCurentTime && curentDay < new Date()}
                    onKeyDown={() => {}}
                    onClick={getPrevDay}
                >
                    <ArrowLeft />
                </IconButton>
                <div className={style['time_day__date']}>{`${curentDay.getDate()} ${
                    MONTHS[curentDay.getMonth()]
                }`}</div>
                <IconButton
                    size="small"
                    className={style['time_day__button']}
                    role="button"
                    tabIndex="-1"
                    onKeyDown={() => {}}
                    onClick={getNextDay}
                >
                    <ArrowRight />
                </IconButton>
            </div>
            <div
                className={[
                    style['time_grid'],
                    workingTimeActualFiltered.length === 0 ? style['empty'] : '',
                ].join(' ')}
            >
                {workingTimeActualFiltered.length > 0 ? (
                    workingTimeActualFiltered.map(item => {
                        let minutes = item.minutes.toString();
                        minutes = minutes.length == 1 ? `0${minutes}` : minutes;
                        return (
                            <div
                                onClick={() => onClickDay(item)}
                                className={[
                                    style['time_grid__item'],
                                    checkSelected(item) ? style['time_grid__item-selected'] : '',
                                ].join(' ')}
                                key={item.start + '_index'}
                            >{`${item.hour}:${minutes}`}</div>
                        );
                    })
                ) : (
                    <div className={style['emptyDay_shedule']}>Отсутствует свободное время</div>
                )}
            </div>
        </div>
    );
};

Day.propTypes = {
    workingTimeActual: PropTypes.array.isRequired,
    setCurentDay: PropTypes.func.isRequired,
    curentDay: PropTypes.object,
    selectDate: PropTypes.func.isRequired,
    selectedDate: PropTypes.object,
    setShowTime: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    autoConfirm: PropTypes.bool,
    disableBeforeCurentTime: PropTypes.bool,
};

export default Day;
