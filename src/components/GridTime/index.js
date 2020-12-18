import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import Grid from '../Grid';
const parseArr = (start, end) => {
    const arr = [];
    for (
        let i = start.col < end.col ? start.col : end.col;
        i <= (start.col < end.col ? end.col : start.col);
        i++
    ) {
        for (
            let j = start.row < end.row ? start.row : end.row;
            j <= (start.row < end.row ? end.row : start.row);
            j++
        ) {
            arr.push({ col: i, row: j });
        }
    }
    return arr;
};

const TimeGrid = ({
    rows = 5,
    verticalSize = 1,
    cols = 5,
    cellProps = {},
    selected = [],
    onSelect = () => {},
    children = '',
    selectFromCol = 0,
    selectToCol = Infinity,
    selectFromRow = 0,
    selectToRow = Infinity,
    className = '',
    cellClassName = '',
    setColStyle = () => '',
    setRowStyle = () => '',
    setCellStyle = () => '',
    rowSize = '1fr',
    colSize = '1fr',
}) => {
    return (
        <Grid
            cols={1}
            rows={60}
            cellProps={{
                children: () => '1',
            }}
        />
    );
};

TimeGrid.propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    selected: PropTypes.arrayOf(
        PropTypes.shape({
            col: PropTypes.number,
            row: PropTypes.number,
            children: PropTypes.any,
            props: PropTypes.object,
        })
    ),
    verticalSize: PropTypes.number,
    setColStyle: PropTypes.func,
    setRowStyle: PropTypes.func,
    setCellStyle: PropTypes.func,
    selectFromCol: PropTypes.number,
    selectToCol: PropTypes.number,
    selectFromRow: PropTypes.number,
    selectToRow: PropTypes.number,
    cellClassName: PropTypes.string,
    className: PropTypes.string,
    cellProps: PropTypes.object,
    children: PropTypes.any,
    onSelect: PropTypes.func,
    rowSize: PropTypes.string,
    colSize: PropTypes.string,
};

export default TimeGrid;
