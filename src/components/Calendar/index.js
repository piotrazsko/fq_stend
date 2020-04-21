import React from 'react';
import PropTypes from 'prop-types';
// import { preppareDataforworkingTime, recoveryDataForworkingTime } from '../../helpers/calendar';
import { workingTimePrepare, getDataForSelectedDate } from './utils';
import Day from './components/Day';
import Month from './components/Month';
// import style from './style.module.scss';

const today = new Date();
const Calendar = ({
    defaultShowDay = false,
    autoConfirm,
    workingTimeIntervals,
    bookedTime,
    onConfirm = () => {},
    onCancel = () => {},
    customTime = {},
    interval = 20,
    curentDay: curentDayDefault = today,
    selectedDate: selectedTimeProps = today,
    classNames,
}) => {
    const [curentDay, setCurentDay] = React.useState(curentDayDefault);
    const [selectedDate, selectDate] = React.useState(selectedTimeProps);

    const [showTime, setShowTime] = React.useState(defaultShowDay);

    React.useEffect(() => {
        selectDate(selectedTimeProps);
    }, [selectedTimeProps]);
    const selectedDayData = getDataForSelectedDate({
        workingTime: workingTimeIntervals,
        customTime,
        bookedTime,
        curentDay: curentDay,
    });
    const workingTimeActual = workingTimePrepare({
        ...selectedDayData,
        interval,
    });
    return (
        <div className={classNames.container || ''}>
            {showTime ? (
                <Day
                    workingTimeActual={workingTimeActual}
                    disableBeforeCurentTime
                    curentDay={curentDay}
                    setCurentDay={setCurentDay}
                    autoConfirm={autoConfirm}
                    selectDate={date => {
                        selectDate(date);
                    }}
                    onCancel={onCancel}
                    onConfirm={onConfirm}
                    selectedDate={selectedDate}
                    setShowTime={() => setShowTime(!showTime)}
                />
            ) : (
                <Month
                    disableBeforeCurentTime
                    workingTimeActual={workingTimeActual}
                    curentDay={curentDay}
                    setCurentDay={setCurentDay}
                    setShowTime={() => setShowTime(!showTime)}
                />
            )}
        </div>
    );
};

Calendar.propTypes = {
    defaultShowDay: PropTypes.bool,
    autoConfirm: PropTypes.bool,
    bookedTime: PropTypes.array,
    onConfirm: PropTypes.func.isRequired,
    workingTimeIntervals: PropTypes.object.isRequired,
    customTime: PropTypes.array,
    interval: PropTypes.number,
    curentDay: PropTypes.instanceOf(Date),
    selectedDate: PropTypes.instanceOf(Date),
    classNames: PropTypes.shape({
        container: PropTypes.string,
    }),
    onCancel: PropTypes.func,
};
Calendar.defaultProps = {
    selectedDay: new Date(),
    classNames: { conatainer: '' },
};
export default Calendar;
