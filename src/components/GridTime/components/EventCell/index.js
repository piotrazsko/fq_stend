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
    classes,
    onClick,
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
            onClick={onClick}
            ref={ref}
            className={[
                eventConfirmed ? style.confirmedEvent : style.orderEvent,
                classes.root,
            ].join(' ')}
            style={{
                gridArea: gridArea,
            }}
        >
            <div className={style.container}>
                <div
                    className={[
                        eventConfirmed ? style.confirmedTime : style.orderedTime,
                        classes.time,
                    ].join(' ')}
                >{`${moment()
                    .hour(0)
                    .minute(startTime)
                    .format('HH:mm')} - ${moment()
                    .hour(0)
                    .minute(endTime)
                    .format('HH:mm')}`}</div>
                <div
                    className={[
                        eventConfirmed ? style.confirmedTitle : style.orderedTitle,
                        classes.title,
                    ].join(' ')}
                >
                    {title}
                </div>
                <div
                    className={[
                        eventConfirmed ? style.confirmedComment : style.orderedComment,
                        classes.content,
                    ].join(' ')}
                >
                    {comment}
                </div>
            </div>
        </div>
    );
};

EventCell.propTypes = {
    setRef: PropTypes.func,
    classes: PropTypes.shape({
        root: PropTypes.string,
        title: PropTypes.string,
        time: PropTypes.string,
        content: PropTypes.string,
    }),
    onClick: PropTypes.func,
};
EventCell.defaultProps = {
    setRef: () => {},
    onClick: () => {},
    classes: { root: '', title: '', content: '', time: '' },
};

export default EventCell;
