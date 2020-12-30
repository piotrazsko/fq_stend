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
    name,
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
                classes.root,
                eventConfirmed ? style.confirmedEvent : style.orderEvent,
            ].join(' ')}
            style={{
                gridArea: gridArea,
            }}
        >
            <div className={[style.container, classes.container].join(' ')}>
                <div
                    className={[
                        classes.time,
                        eventConfirmed ? style.confirmedTime : style.orderedTime,
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
                        classes.title,
                        eventConfirmed ? style.confirmedTitle : style.orderedTitle,
                    ].join(' ')}
                >
                    {title}
                </div>
                <div
                    className={[
                        classes.name,
                        eventConfirmed ? style.confirmedTitle : style.orderedTitle,
                    ].join(' ')}
                >
                    {name}
                </div>
                <div
                    className={[
                        classes.content,
                        eventConfirmed ? style.confirmedComment : style.orderedComment,
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
        name: PropTypes.string,
        container: PropTypes.string,
    }),
    onClick: PropTypes.func,
    name: PropTypes.string,
};
EventCell.defaultProps = {
    setRef: () => {},
    onClick: () => {},
    classes: { root: '', title: '', content: '', time: '', name: '', container: '' },
    name: '',
};

export default EventCell;
