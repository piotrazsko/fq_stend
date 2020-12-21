import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import Grid from '../Grid';
import Cell from './components/Cell';
import EventCell from './components/EventCell';

const events = [
    { id: 1, masterid: 1, startTime: 0, endTime: 60 },
    { id: 1, masterid: 1, startTime: 360, endTime: 390 },
    { id: 1, masterid: 2, startTime: 600, endTime: 700 },
    { id: 2, masterid: 1, startTime: 860, endTime: 900 },
];

const masters = [
    { name: 'Vasia', avatar: '' },
    { name: 'Petia', avatar: '' },
    { name: 'Tolia', avatar: '' },
];

const TimeGrid = ({ interval = 10, ...props }) => {
    const verticalSize = 3;
    return (
        <Grid
            className={style.gridContainer}
            setRowStyle={row => {
                switch (true) {
                    case row === 0:
                        return style.firstRow;
                    case row % (60 / interval) == 1:
                        return style.borderedCell;
                    default:
                        return style.cell;
                }
            }}
            setColStyle={col => {
                return col === 0 ? style.firstColumn : '';
            }}
            cols={masters.length + 1}
            verticalSize={verticalSize}
            rows={(60 / interval) * 24 + 1}
            cellProps={{
                children: (
                    <Cell
                        interval={interval}
                        getMaster={col => {
                            return masters[col - 1];
                        }}
                    />
                ),
            }}
            setCellStyle={cell => {
                // return cell;
            }}
        >
            {events.map(i => (
                <EventCell
                    key={i.id}
                    startTime={i.startTime}
                    endTime={i.endTime}
                    verticalSize={verticalSize}
                    col={i.masterid}
                    interval={interval}
                    rowOffset={1}
                />
            ))}
        </Grid>
    );
};

TimeGrid.propTypes = {};

export default TimeGrid;
