import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid';
import Cell from './Cell';
import style from './style.module.scss';

const WorkingTimeSelect = ({ cellProps }) => {
	const [selectedTime, selectTime] = React.useState([]);
	const onSelect = selected => {
		if (
			selectedTime.find(item => {
				return selected.length > 0 && item.col === selected[0].col && item.row === selected[0].row;
			})
		) {
			selectTime([
				...selectedTime.filter(item => {
					return !selected.find(i => item.col == i.col && item.row == i.row);
				}),
			]);
		} else {
			selectTime([...selectedTime, ...selected]);
		}
	};
	return (
		<div>
			<Grid
				className={style.gridContainer}
				cols={8}
				rows={25}
				selectFromCol={1}
				selectToCol={7}
				selectFromRow={1}
				selectToRow={24}
				setRowStyle={row => {
					return row === 0 ? style.firstRow : '';
				}}
				cellProps={{ children: <Cell /> }}
				selected={selectedTime}
				onSelect={onSelect}
			/>
		</div>
	);
};

WorkingTimeSelect.propTypes = {
	// : PropTypes.
};

export default WorkingTimeSelect;
