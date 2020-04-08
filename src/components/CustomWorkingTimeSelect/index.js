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
    // getRealDateByColRowObj,
    getRealDateByColRow,
    getFirstWeekDayByDate,
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

    const [curentDay, setCurentDay] = React.useState(
        getFirstWeekDayByDate({ date: curentDayDefault, startWeekDay })
    );
    React.useEffect(() => {
        const newCurentDay = getFirstWeekDayByDate({ date: curentDayDefault, startWeekDay });
        setCurentDay(newCurentDay);
    }, [startWeekDay]);

    const [selectedCell, setSelectedCell] = React.useState([
        ...convertCustomTimeToColRowObj({
            interval,
            startTime,
            startWeekDay,
            colOffset: 1,
            rowOffset: 1,
            customTimeIntervals,
        }),
    ]);
    React.useEffect(() => {
        const json = JSON.stringify(
            convertCustomTimeToColRowObj({
                interval,
                startTime,
                startWeekDay,
                colOffset: 1,
                rowOffset: 1,
                customTimeIntervals,
            })
        );
        if (json !== JSON.stringify(selectedCell)) {
            console.log(json);
        }
    }, [customTimeIntervals]);
    React.useEffect(() => {
        setSelectedCell([
            ...convertCustomTimeToColRowObj({
                interval,
                startTime,
                startWeekDay,
                colOffset: 1,
                rowOffset: 1,
                customTimeIntervals,
            }),
        ]);
    }, [interval, startWeekDay]);

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
        // onChange(
        //     convertColRowToCustomTime({
        //         data: selectedCell,
        //         interval,
        //         startTime,
        //         startWeekDay,
        //         disableSelectBeforeDate,
        //     })
        // );
    }, [selectedCell]);

    const onSelect = selected => {
        const filtered = selectedCell.filter(item => {
            const startWeekDayMS = item.startWeekDay.valueOf();
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
                        startWeekDay: curentDay,
                        itemTime: getRealDateByColRow({
                            col: item.col,
                            row: item.row,
                            interval,
                            startTime,
                            rowOffset: 1,
                            colOffset: 1,
                            firstWeekDayDate: curentDay,
                        }),
                        disabled: Boolean(
                            workingTime.find(i => i.col == item.col && item.row == i.row)
                        ),
                    })),
            ];
            setSelectedCell(
                disableSelectBeforeDate
                    ? cells.filter(i => i.itemTime > disableSelectBeforeDate)
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
                    switch (col) {
                        case 0:
                            return style.firstColumn;
                        case 8:
                            return style.lastColumn;
                        default:
                            return '';
                    }
                }}
                cellProps={{
                    children: (
                        <Cell
                            setCurentDay={setCurentDay}
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
    customTimeIntervals: {},
};

export default CustomWorkingTimeSelect;
