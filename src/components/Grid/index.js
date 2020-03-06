import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

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

const Grid = ({
	rows,
	cols,
	cellProps = {},
	selected = [{ col: 0, row: 0, children: 'wrerw', props: {} }, { col: 5, row: 4 }],
	onSelect = () => {},
	children = '',
	selectFromCol = 0,
	selectToCol = Infinity,
	selectFromRow = 0,
	selectToRow = Infinity,
}) => {
	const divs = rows * cols;
	const arr = Array(divs).fill(1);

	const [mouseDownCell, setMouseDown] = React.useState(null);
	const [mouseEnterCell, setMouseEnter] = React.useState([]);
	const onMouseDown = cell => {
		setMouseDown(cell);
	};
	const onMouseUp = cell => {
		if (mouseDownCell) {
			onSelect(
				parseArr(mouseDownCell, cell).filter(item => {
					return (
						item.col >= selectFromCol &&
						item.row >= selectFromRow &&
						item.col <= selectToCol &&
						item.row <= selectToRow
					);
				})
			);
			setMouseDown(null);
			setMouseEnter([]);
		}
	};
	const onMouseLeave = () => {
		setMouseDown(null);
	};
	const onMouseEnter = cell => {
		if (mouseDownCell) {
			setMouseEnter(parseArr(mouseDownCell, cell));
		}
	};
	return (
		<div
			onPointerLeave={onMouseLeave}
			className={style.gridContainer}
			style={{
				'grid-template-columns': `repeat(${cols}, 1fr)`,
				'grid-template-rows': `repeat(${rows}, 1fr)`,
			}}
		>
			{arr.map((item, index) => {
				const key = `col_${index}`;
				const col = index % cols;
				const row = Math.floor(index / cols);
				const isSelected = selected.find(item => item.col == col && item.row == row);
				const isHovered = mouseEnterCell.find(item => item.col == col && item.row == row);
				return (
					<div
						onMouseDown={() => {
							onMouseDown({ col, row });
						}}
						onMouseUp={() => {
							onMouseUp({ col, row });
						}}
						onMouseEnter={() => onMouseEnter({ col, row })}
						style={{
							'grid-area': `${row + 1} / ${col + 1} / ${row + 2} / ${col + 2}`,
						}}
						className={[
							style.cell,
							isSelected ? style.selected : '',
							isHovered ? style.hovered : '',
							item.className || '',
						].join(' ')}
						col={col}
						row={row}
						key={key}
						{...(item.props ? item.props : {})}
						{...cellProps}
					>
						{isSelected ? isSelected.children : ''}
						{cellProps.children &&
							React.cloneElement(cellProps.children, { row, col, isSelected: Boolean(isSelected) })}
					</div>
				);
			})}
			{children}
		</div>
	);
};

Grid.propTypes = {
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
	selectFromCol: PropTypes.number,
	selectToCol: PropTypes.number,
	selectFromRow: PropTypes.number,
	selectToRow: PropTypes.number,

	cellProps: PropTypes.object,
	children: PropTypes.any,
	onSelect: PropTypes.func,
};

export default Grid;
