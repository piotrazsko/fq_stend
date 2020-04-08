/*global   Map*/
import { getObjectOfPeriods, strPrepare } from '../../../helpers/calendar';
import moment from 'moment';
import {
    getPermanentWorkingPeriods,
    getCustomTimePeriods,
    getBookedTimePeriods,
} from '../../../helpers/periodsPrepare.v2.js';
export { getDataForSelectedDate } from '../../../helpers/curentDayPrepare.v2.js';
export {
    prepareWorkingTimeIntervals,
    recoveryWorkingTimeIntervals,
} from '../../../helpers/calendar';

const DAY_MS = 60 * 1000 * 60 * 24;

export const workingTimePrepare = ({
    workingTimeDay,
    customTimeDay,
    bookedTimeDay,
    interval = 15,
    curentDay,
}) => {
    const permanentWorkingIntervals = getPermanentWorkingPeriods({ workingTimeDay, interval });
    const customTimePeriods = getCustomTimePeriods({ customTimeDay, interval });
    const bookedTimePeriods = getBookedTimePeriods({ bookedTimeDay, interval });
    return {
        interval,
        curentDay,
        permanentWorkingIntervals,
        customTimePeriods,
        bookedTimePeriods,
    };
};

export const getBookingTime = ({ bookedTime, interval, startTime }) => {
    return bookedTime.reduce((acc, item, index) => {
        item.forEach(i => {
            const row = Math.ceil((i - startTime) / interval) + 1;
            const col = (index % 7) + 1;
            acc = [...acc, { col: col, row }];
        });

        return acc;
    }, []);
};

export const getRealDateByColRowObj = ({
    item,
    interval,
    startTime,
    startWeekDay,
    rowOffset = 1,
    colOffset = 1,
    onlyDate = true,
}) => {
    const date = new Date(item.curentDay);
    const dayOfWeek = date.getDay();
    const curentDayCol = dayOfWeek + colOffset - startWeekDay;
    return new Date(
        item.curentDay -
            (curentDayCol - item.col) * DAY_MS +
            (!onlyDate ? 1000 * 60 * (startTime + (item.row - rowOffset) * interval) : 0)
    );
};
export const getFirstWeekDayByDate = ({ date: inputDate, startWeekDay }) => {
    const date = new Date(inputDate);
    const dayOfWeek = date.getDay();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    const diff = dayOfWeek - startWeekDay;
    return new Date(date.valueOf() - (diff >= 0 ? diff : diff + 7) * DAY_MS);
};
export const getRealDateByColRow = ({
    col,
    row,
    interval,
    startTime,
    rowOffset = 1,
    colOffset = 1,
    firstWeekDayDate,
}) => {
    const date =
        firstWeekDayDate.valueOf() +
        (col - colOffset) * DAY_MS +
        interval * 1000 * 60 * (row - rowOffset) +
        startTime * 60 * 1000;
    return new Date(date);
};

export const addRealDate = ({ data, interval, startTime, startWeekDay }) =>
    data
        .map(item => {
            return {
                ...item,
                curentDate: getRealDateByColRowObj({ item, interval, startTime, startWeekDay }),
                curentTimeReal: getRealDateByColRowObj({
                    item,
                    interval,
                    startTime,
                    startWeekDay,
                    onlyDate: false,
                }),
            };
        })
        .sort((a, b) => a.curentDate.valueOf() - b.curentDate.valueOf());

export const getArrayOfstrDatesByColRow = ({ data, interval, startTime, startWeekDay }) => {
    const map = new Map();
    const res = [];

    addRealDate({ data, interval, startTime, startWeekDay }).forEach(item => {
        const arr = map.get(item.curentDate.valueOf());
        map.set(item.curentDate.valueOf(), [...(Array.isArray(arr) ? arr : []), item]);
    });
    map.forEach((item, index) => {
        getObjectOfPeriods(item.map(i => i.row - 1).sort((a, b) => a - b)).forEach(i => {
            const day = new Date(index);
            const start = `${moment(day).format('YYYY-MM-DD')} ${strPrepare(
                i.from * interval + startTime
            )}`;
            const end = `${moment(day).format('YYYY-MM-DD')} ${strPrepare(
                i.to * interval + startTime
            )}`;
            res.push({ start, end });
        });
    });
    return res;
};

export const convertColRowToCustomTime = ({
    data = [],
    interval,
    startTime,
    startWeekDay,
    disableSelectBeforeDate = new Date(),
}) => {
    const enabled = data.filter(item => !item.disabled);
    const disabled = data.filter(item => item.disabled);
    return {
        enabled: getArrayOfstrDatesByColRow({
            data: enabled,
            interval,
            startTime,
            startWeekDay,
        }).filter(
            item => !disableSelectBeforeDate || new Date(item.start) > disableSelectBeforeDate
        ),
        disabled: getArrayOfstrDatesByColRow({
            data: disabled,
            interval,
            startTime,
            startWeekDay,
        }).filter(
            item => !disableSelectBeforeDate || new Date(item.start) > disableSelectBeforeDate
        ),
    };
};

export const convertCustomTimeToColRowObj = ({
    interval,
    startTime,
    startWeekDay,
    colOffset = 1,
    rowOffset = 1,
    customTimeIntervals,
}) => {
    const resPrepare = (arr = [], callback = () => {}) => {
        return !Array.isArray(arr)
            ? []
            : arr.reduce((acc, item) => {
                  const start = new Date(item.start);
                  const startHour = start.getHours();
                  const startMinutes = start.getMinutes();
                  const day = start.getDay();
                  const duration = (new Date(item.end).valueOf() - start.valueOf()) / (1000 * 60);
                  return [
                      ...acc,
                      ...new Array(Math.ceil(duration / interval)).fill('1').map((item, index) => {
                          return {
                              itemTime: start,
                              startWeekDay: getFirstWeekDayByDate({ date: start, startWeekDay }),
                              col: ((day - startWeekDay + 7) % 7) + colOffset,
                              disabled: callback(),
                              row:
                                  Math.floor(
                                      (startHour * 60 + startMinutes - startTime) / interval
                                  ) +
                                  index +
                                  rowOffset,
                          };
                      }),
                  ];
              }, []);
    };

    return [
        ...resPrepare(customTimeIntervals.enabled, () => false),
        ...resPrepare(customTimeIntervals.disabled, () => true),
    ];
};
