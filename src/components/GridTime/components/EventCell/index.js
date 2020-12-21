import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const EventCell = ({ startTime, endTime, verticalSize, col, interval, rowOffset = 1 }) => {
    // const
    //
    const cellRowStart = startTime / (interval * verticalSize);
    const cellRowEnd = endTime / (interval * verticalSize);
    // console.log(cellRowEnd, colSpan);

    const row = Math.ceil((cellRowStart * verticalSize + rowOffset) * verticalSize);
    const colSpan = Math.ceil((cellRowEnd * verticalSize + rowOffset) * verticalSize);

    const gridArea = `${row + 1} / ${col + 1} / ${colSpan + 1} / ${col + 2}`;
    return (
        <div style={{ gridArea: gridArea, background: '#61C9BE', margin: 2, borderRadius: 5 }}>
            555
        </div>
    );
};

EventCell.propTypes = {
    // : PropTypes.
};

export default EventCell;
