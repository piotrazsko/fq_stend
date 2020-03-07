import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid';
import Cell from './Cell';
import Days from './Days';
import style from './style.module.scss';

const WorkingTimeSelect = ({
	onChange = data => {
		console.log(data);
	},
	workingTime = [],
	isMobile = false,
}) => {
	const [selectedTime, selectTime] = React.useState(workingTime);
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
	const onClear = col => {
		selectTime([...[...selectedTime].filter(item => item.col !== col)]);
	};
	React.useEffect(() => {
		onChange([...selectedTime]);
	}, [selectedTime]);
	React.useEffect(() => {}, [workingTime]);
	return (
		<div>
			<div className={style.title}>Установите подходящее для вас время</div>
			<div className={style.resultContainer}>
				<Days selectedTime={selectedTime} />
			</div>
			<Grid
				isMobile={isMobile}
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
				setColStyle={col => {
					return col === 0 ? style.firstColumn : '';
				}}
				cellProps={{ children: <Cell onClear={onClear} isMobile={isMobile} /> }}
				selected={selectedTime}
				onSelect={onSelect}
			/>
		</div>
	);
};

WorkingTimeSelect.propTypes = {
	onChange: PropTypes.func,
	workingTime: PropTypes.arrayOf(PropTypes.shape({ col: PropTypes.number, row: PropTypes.number })),
	isMobile: PropTypes.bool,
};

export default WorkingTimeSelect;
