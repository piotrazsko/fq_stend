import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import { MONTHS, WEEKDAYS_SHORT } from '../../../../helpers/config';
import style from './style.module.scss';
// import 'react-day-picker/lib/style.css';
const yesterday = new Date();
yesterday.setDate(new Date().getDate() - 1);
yesterday.setHours(12);
yesterday.setMinutes(0);
yesterday.setSeconds(0);
yesterday.setMilliseconds(0);
const Month = ({
    curentDay,
    setCurentDay,
    setShowTime,
    disableBeforeCurentTime = true,
    disabledDays: disabledDaysFunction,
}) => {
    const disabledDays = disableBeforeCurentTime
        ? date => {
              return date <= yesterday || disabledDaysFunction(date).length == 0;
          }
        : [];

    return (
        <DayPicker
            onMonthChange={month => {
                const day = new Date(curentDay);
                day.setMonth(month.getMonth());
            }}
            onDayClick={(day, modifiers) => {
                if (!modifiers.disabled) {
                    setCurentDay(day);
                    setShowTime();
                }
            }}
            disabledDays={disabledDays}
            locale="ru"
            firstDayOfWeek={1}
            selectedDays={[curentDay]}
            className={style.datapicker}
            weekdaysShort={WEEKDAYS_SHORT}
            months={MONTHS}
        />
    );
};

Month.propTypes = {
    curentDay: PropTypes.object.isRequired,
    setCurentDay: PropTypes.func.isRequired,
    setShowTime: PropTypes.func.isRequired,
    disableBeforeCurentTime: PropTypes.bool,
    disabledDays: PropTypes.func,
};

export default Month;
