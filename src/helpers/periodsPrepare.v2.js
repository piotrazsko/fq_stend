import moment from 'moment';
const reduceIntervals = (arr, interval) => {
    return arr.reduce((acc, item) => {
        const startTimeArr = item.start.match(/^.{1,2}:..:../gm)
            ? item.start.split(':')
            : (() => {
                  const time = new Date(moment(item.start).toDate());
                  return [time.getHours().toString(), time.getMinutes().toString()];
              })();
        const endTimeArr = item.end.match(/^.{1,2}:..:../gm)
            ? item.end.split(':')
            : (() => {
                  const time = new Date(moment(item.end).toDate());
                  const hours = time.getHours();
                  return [hours.toString(), time.getMinutes().toString()];
              })();
        endTimeArr[0] = endTimeArr[0] == 0 ? '24' : endTimeArr[0];
        const startTime = startTimeArr[0] * 60 + parseInt(startTimeArr[1]);
        const endTime = endTimeArr[0] * 60 + parseInt(endTimeArr[1]);
        const externalItervals = Math.floor((endTime - startTime) / interval);
        for (let i = 0; i < externalItervals; i++) {
            acc = [...acc, startTime + i * interval];
        }
        return acc;
    }, []);
};

export const getPermanentWorkingPeriods = ({ workingTimeDay, interval = 60 }) => {
    return workingTimeDay && Object.keys(workingTimeDay).length > 0
        ? reduceIntervals(workingTimeDay, interval)
        : [];
};

export const getCustomTimePeriods = ({ customTimeDay, interval = 60 }) => {
    return {
        enabled: customTimeDay.enabled ? reduceIntervals(customTimeDay.enabled, interval) : [],
        disabled: customTimeDay.disabled ? reduceIntervals(customTimeDay.disabled, interval) : [],
    };
};
export const getBookedTimePeriods = ({ bookedTimeDay, interval = 60 }) => {
    return bookedTimeDay.reduce((acc, item) => {
        const date = new Date(moment(item.date).toDate());
        const startTime = date.getHours() * 60 + date.getMinutes();
        const externalItervals = Math.floor(item.duration / interval);
        // TODO:  need check it for calnedar
        for (let i = 0; i <= externalItervals; i++) {
            acc = [...acc, startTime + i * interval];
        }
        return [...acc];
    }, []);
};
