import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
const DISABLE_CLASS_NAME = "time_grid__item-disable";
const SELECTED_CLASS_NAME = "time_grid__item-selected";

const TimeDisplay = (props) => {
    const timeProps = (i, props) => {
        const {disabledTime, selectedTime, onTimeClick} = props;
        const disabled = disabledTime.indexOf(i) !== -1;
        const selectedName = selectedTime === i
            ? SELECTED_CLASS_NAME
            : '';
        return {
            onClick: () => {
                if (!disabled) {
                    onTimeClick(i);
                }
            },
            className: disabled
                ? `time_grid__item ${DISABLE_CLASS_NAME} `
                : `time_grid__item ${selectedName}`
        }
    }

    const timesGrid = () => {
        let arr = [];
        for (var i = 0; i < 24; i++) {
            arr.push(<div key={i} {...timeProps(i,props)} index-key={i}>{`${i}:00`}</div>)
        }
        return arr;
    }
    return (<div className="time_grid">{timesGrid()}</div>)
}

TimeDisplay.defaultProps = {
    disabledTime: [
        0,
        1,
        2,
        3,
        4,
        5,
        6
    ]
}
TimeDisplay.propTypes = {
    disabledTime:PropTypes.array,
    selectedTime:PropTypes.number,
    onTimeClick:PropTypes.func,    
};
export default TimeDisplay
