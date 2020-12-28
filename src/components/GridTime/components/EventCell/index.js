import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import moment from 'moment';

const EventCell = ({
    startTime,
    endTime,
    verticalSize,
    col,
    interval,
    rowOffset = 1,
    eventData,
    eventConfirmed = true,
    data,
    setRef,
}) => {
    const { title, comment } = data;
    // const
    //
    const ref = React.useRef();
    React.useEffect(() => {
        if (ref.current) {
            setRef(ref.current);
        }
    }, [ref]);
    const cellRowStart = startTime / (interval * verticalSize);
    const cellRowEnd = endTime / (interval * verticalSize);
    const row = Math.ceil((cellRowStart * verticalSize + rowOffset) * verticalSize);
    const colSpan = Math.ceil((cellRowEnd * verticalSize + rowOffset) * verticalSize);

    const gridArea = `${row + 1} / ${col + 1} / ${colSpan + 1} / ${col + 2}`;
    return (
        <div
            ref={ref}
            className={eventConfirmed ? style.confirmedEvent : style.orderEvent}
            style={{
                gridArea: gridArea,
            }}
        >
            <div className={style.container}>
                <div
                    className={eventConfirmed ? style.confirmedTime : style.orderedTime}
                >{`${moment()
                    .hour(0)
                    .minute(startTime)
                    .format('HH:mm')} - ${moment()
                    .hour(0)
                    .minute(endTime)
                    .format('HH:mm')}`}</div>
                <div className={eventConfirmed ? style.confirmedTitle : style.orderedTitle}>
                    {title}
                </div>
                <div className={eventConfirmed ? style.confirmedComment : style.orderedComment}>
                    {comment}
                </div>
            </div>
        </div>
    );
};

EventCell.propTypes = {
    setRef: PropTypes.func,
};
EventCell.defaultProps = {
    setRef: () => {},
};

export default EventCell;
