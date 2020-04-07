import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid';
import Cell from './Cell';
import Days from './Days';

import {
    recoveryWorkingTimeIntervals,
    workingTimePrepare,
    getDataForSelectedDate,
    convertColRowToCustomTime,
    convertCustomTimeToColRowObj,
    getBookingTime,
    getRealDateByColRowObj,
} from './utils';
import style from './style.module.scss';

const today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
const DAY_MS = 60 * 1000 * 60 * 24;

const useBookedTimeHook = ({
    workingTimeIntervals,
    customTimeIntervals,
    bookedTime,
    curentDay,
    interval,
    startWeekDay,
    startTime,
}) => {
    const [workingTimeActual, setActualWorkingTime] = React.useState(
        weekPrepare({
            workingTimeIntervals,
            customTimeIntervals,
            bookedTime,
            curentDay,
            interval,
            startWeekDay,
        })
    );
    React.useEffect(() => {
        setActualWorkingTime(
            weekPrepare({
                workingTimeIntervals,
                customTimeIntervals,
                bookedTime,
                curentDay,
                interval,
                startWeekDay,
            })
        );
    }, [curentDay, bookedTime, startWeekDay, interval, customTimeIntervals, workingTimeIntervals]);
    return getBookingTime({
        interval,
        startTime,
        startWeekDay,
        bookedTime: workingTimeActual.map(i => i.bookedTimePeriods),
    });
};

const weekPrepare = ({
    workingTimeIntervals,
    customTimeIntervals,
    bookedTime,
    curentDay,
    interval,
    startWeekDay,
}) => {
    const arr = new Array(7);
    return arr.fill(1).map((item, index) => {
        const day = new Date(curentDay);
        return workingTimePrepare({
            ...getDataForSelectedDate({
                workingTime: workingTimeIntervals,
                customTime: customTimeIntervals,
                bookedTime: bookedTime,
                curentDay: new Date(day.valueOf() - (day.getDay() - index - startWeekDay) * DAY_MS),
                interval,
            }),
        });
    });
};

const CustomWorkingTimeSelect = ({
    onChange = () => {},
    workingTimeIntervals,
    customTimeIntervals,
    bookedTime,
    isMobile = false,
    selectedTimeText = '',
    startTime,
    endTime,
    disableSelectBeforeDate = new Date(),
    interval,
    startWeekDay,
    curentDay: curentDayDefault,
}) => {
    //used for show working time
    const [workingTime] = React.useState([
        ...recoveryWorkingTimeIntervals({
            data: workingTimeIntervals,
            startTime,
            interval,
            startWeekDay,
        }),
    ]);
    const [curentDay, setCurentDay] = React.useState(curentDayDefault);

    const [selectedCell, setSelectedCell] = React.useState([
        ...convertCustomTimeToColRowObj({
            interval,
            startTime,
            startWeekDay,
            customTimeIntervals,
        }),
    ]);

    const bookedTimePrepared = useBookedTimeHook({
        workingTimeIntervals,
        customTimeIntervals,
        bookedTime,
        curentDay,
        interval,
        startWeekDay,
        startTime,
    });
    React.useEffect(() => {
        setSelectedCell([]);
    }, [startWeekDay, interval]);

    React.useEffect(() => {
        onChange(
            convertColRowToCustomTime({
                data: selectedCell,
                interval,
                startTime,
                startWeekDay,
                disableSelectBeforeDate,
            })
        );
    }, [selectedCell]);

    React.useEffect(() => {
        setSelectedCell([
            ...convertCustomTimeToColRowObj({
                interval,
                startTime,
                startWeekDay,
                customTimeIntervals,
            }),
        ]);
    }, [startWeekDay, interval, customTimeIntervals]);

    const onSelect = selected => {
        const filtered = selectedCell.filter(item => {
            const day = new Date(item.curentDay);
            day.setDate(day.getDate() - day.getDay() + startWeekDay);
            day.setHours(0);
            day.setMinutes(0);
            day.setSeconds(0);
            day.setMilliseconds(0);
            const startWeekDayMS = day.valueOf();
            return !selected.find(
                i =>
                    i.col === item.col &&
                    i.row === item.row &&
                    curentDay.valueOf() >= startWeekDayMS &&
                    curentDay.valueOf() < startWeekDayMS + 7 * DAY_MS
            );
        });
        if (filtered.length !== selectedCell.length) {
            setSelectedCell([...filtered]);
        } else {
            const cells = [
                ...selectedCell,
                ...selected
                    .filter(item => {
                        return !bookedTimePrepared.find(
                            i => i.col === item.col && i.row === item.row
                        );
                    })
                    .map(item => ({
                        ...item,
                        curentDay: curentDay.valueOf(),
                        disabled: Boolean(
                            workingTime.find(i => i.col == item.col && item.row == i.row)
                        ),
                    })),
            ];

            setSelectedCell(
                disableSelectBeforeDate
                    ? cells.filter(
                          item =>
                              disableSelectBeforeDate <
                              getRealDateByColRowObj({ item, startWeekDay, interval, startTime })
                      )
                    : cells
            );
        }
    };
    const onClear = col => {
        // BUG:  need change algorithm for clean/ now cleaned for all dated in this column
        setSelectedCell([...selectedCell.filter(i => i.col !== col)]);
    };
    return (
        <div>
            <div className={style.title}>Установите подходящее для вас время</div>
            <div className={style.resultContainer}>
                <Days
                    startWeekDay={startWeekDay}
                    curentDay={curentDay}
                    setCurentDay={setCurentDay}
                />
            </div>
            <Grid
                isMobile={isMobile}
                className={style.gridContainer}
                cols={9}
                rows={Math.ceil((endTime - startTime) / interval + 1)}
                selectFromCol={1}
                selectToCol={7}
                selectFromRow={1}
                selectToRow={Math.ceil((endTime - startTime) / interval + 1)}
                setRowStyle={row => {
                    return row === 0 ? style.firstRow : '';
                }}
                setColStyle={col => {
                    return col === 0 ? style.firstColumn : '';
                }}
                cellProps={{
                    children: (
                        <Cell
                            startTime={startTime}
                            startWeekDay={startWeekDay}
                            endTime={endTime}
                            interval={interval}
                            selectedTimeText={selectedTimeText}
                            onClear={onClear}
                            isMobile={isMobile}
                            curentDay={curentDay}
                            customTimeSelectedCell={selectedCell}
                            bookedTime={bookedTimePrepared}
                        />
                    ),
                }}
                selected={workingTime}
                onSelect={onSelect}
            />
        </div>
    );
};

CustomWorkingTimeSelect.propTypes = {
    onChange: PropTypes.func,
    isMobile: PropTypes.bool,
    selectedTimeText: PropTypes.string,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
    startWeekDay: PropTypes.number,
    interval: PropTypes.number,
    workingTimeIntervals: PropTypes.object,
    customTimeIntervals: PropTypes.object,
    bookedTime: PropTypes.array,
    curentDay: PropTypes.instanceOf(Date),
    disableSelectBeforeDate: PropTypes.instanceOf(Date),
};
CustomWorkingTimeSelect.defaultProps = {
    workingTime: [],
    startTime: 300,
    endTime: 1440,
    interval: 60,
    startWeekDay: 1, //utc day of week
    workingTimeIntervals: {},
    curentDay: today,
};

export default CustomWorkingTimeSelect;
