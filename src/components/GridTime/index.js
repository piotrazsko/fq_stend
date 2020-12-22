import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import Grid from '../Grid';
import Cell from './components/Cell';
import EventCell from './components/EventCell';
import DisabledCell from './components/DisabledCell';

const masters = [
    {
        name: 'Vasia',
        avatar: '',
        disabledTime: [{ startTime: 0, endTime: 200 }, { startTime: 450, endTime: 600 }],
        events: [
            { id: 1, startTime: 50, endTime: 160, confirmed: false },
            { id: 1, startTime: 260, endTime: 390 },
            { id: 1, startTime: 300, endTime: 600 },
        ],
    },
    {
        name: 'Petia',
        avatar: '',
        disabledTime: [{ startTime: 0, endTime: 200 }, { startTime: 450, endTime: 600 }],
        events: [
            { id: 1, startTime: 0, endTime: 60 },
            { id: 1, startTime: 760, endTime: 890, confirmed: false },
            { id: 1, startTime: 900, endTime: 980 },
        ],
    },
    {
        name: 'Tolia',
        avatar: '',
        disabledTime: [
            { startTime: 0, endTime: 100 },
            { startTime: 470, endTime: 600 },
            { startTime: 1200, endTime: 1440 },
        ],
        events: [
            { id: 1, startTime: 20, endTime: 60 },
            { id: 1, startTime: 360, endTime: 300, confirmed: false },
            { id: 1, startTime: 200, endTime: 400 },
        ],
    },
];

const TimeGrid = ({ interval = 10, ...props }) => {
    const verticalSize = 5;

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
            {masters.reduce((acc, item, index) => {
                const { events } = item;
                const masterEvents = events.map(i => (
                    <EventCell
                        eventConfirmed={i.confirmed}
                        key={i.id}
                        startTime={i.startTime}
                        endTime={i.endTime}
                        verticalSize={verticalSize}
                        col={index + 1}
                        interval={interval}
                        rowOffset={1}
                        data={i}
                    />
                ));
                return [...acc, ...masterEvents];
            }, [])}
            {masters.reduce((acc, item, index) => {
                const { disabledTime } = item;
                const masterEvents = disabledTime.map(i => (
                    <DisabledCell
                        key={i.id}
                        startTime={i.startTime}
                        endTime={i.endTime}
                        verticalSize={verticalSize}
                        col={index + 1}
                        interval={interval}
                        rowOffset={1}
                    />
                ));
                return [...acc, ...masterEvents];
            }, [])}
        </Grid>
    );
};

TimeGrid.propTypes = {};

export default TimeGrid;
