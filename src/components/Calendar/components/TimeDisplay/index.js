import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
const DISABLE_CLASS_NAME = 'time_grid__item-disable';
const SELECTED_CLASS_NAME = 'time_grid__item-selected';

const TimeDisplay = props => {
	const timeProps = (i, props) => {
		const { disabledTime, selectedTime, onTimeClick } = props;
		const disabledArr = disabledTime.map(item => item * 2);
		const disabled = disabledArr.indexOf(i) !== -1;
		const selectedName = selectedTime === i ? SELECTED_CLASS_NAME : '';
		return {
			onClick: () => {
				if (!disabled) {
					onTimeClick(i);
				}
			},
			className: disabled
				? `time_grid__item ${DISABLE_CLASS_NAME} `
				: `time_grid__item ${selectedName}`,
			disabled,
		};
	};

	const timesGrid = () => {
		let arr = [];
		for (var i = 0; i < 48; i++) {
			const timeProperties = timeProps(i, props);
			if (!timeProperties.disabled) {
				arr.push(
					<div key={i} {...timeProperties} index-key={i}>{`${Math.floor(i / 2)}:${(i % 2) * 30 ||
						'00'}`}</div>
				);
			}
		}
		return arr;
	};
	const times = timesGrid();
	return (
		<div className={times.length > 0 ? 'time_grid' : 'time_grid empty'}>
			{times.length > 0 ? (
				times
			) : (
				<div className={'emptyDay_shedule'}>Отсутствует свободное время</div>
			)}
		</div>
	);
};

TimeDisplay.defaultProps = {
	disabledTime: [0, 1, 2, 3, 4, 5, 6],
};
TimeDisplay.propTypes = {
	disabledTime: PropTypes.array,
	selectedTime: PropTypes.number,
	onTimeClick: PropTypes.func,
};
export default TimeDisplay;
