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
				cols={8}
				rows={25}
				selectFromCol={1}
				selectToCol={7}
				selectFromRow={1}
				selectToRow={24}
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

function word() {
	let kol = 0;
	let massivGlasnih = ['а', 'о', 'и', 'е', 'э', 'ы', 'у', 'ю', 'я'];
	let stroka = prompt('введите строку:');
	for (var i = 0; i < stroka.length; i++)
		for (var j = 0; j < massivGlasnih.length; j++)
			if (stroka[i] === massivGlasnih[j]) {
				++kol;
				break;
			}
	return kol ? kol : 'в вашем слове нет гласных букв';
}
word();
