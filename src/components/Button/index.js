import React from 'react';
import PropTypes from 'prop-types';
import { Fab, Button as ButtonMat, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	primary: {
		'background-color': '#1c7cff',
		color: 'white',
	},
	root: {
		'font-weight': 'bold',
		'font-size': '16px',
		'padding-left': '20px',
		'padding-right': '20px',
		'min-width': 120,
		margin: '0 5px',
	},
	disabled: {
		'background-color': 'rgba(0, 0, 0, 0.12)',
	},
	outlinedPrimary: {
		color: '#1c7cff',
		'border-color': '#1c7cff',
	},
}));

const Button = ({
	text = 'test',
	type = false,
	color = 'primary',
	classesExt,
	children,
	fontSize,
	typeButton,
	variant = '',
	style,
	...rest
}) => {
	const classes = useStyles();
	switch (type) {
		case 'icon':
			return (
				<IconButton
					color={color}
					type={typeButton}
					classes={{
						primary: classes.primary,
						disabled: classes.disabled,
						...classesExt,
					}}
					variant={variant}
					style={{ fontSize: fontSize, ...style }}
					aria-label="edit"
					{...rest}
				>
					{children || text}
				</IconButton>
			);
		case 'fab':
			return (
				<Fab
					color={color}
					variant={variant || 'extended'}
					type={typeButton}
					classes={{
						root: variant !== 'round' ? classes.root : '',
						primary: classes.primary,
						disabled: classes.disabled,
						...classesExt,
					}}
					style={{ fontSize: fontSize }}
					aria-label="edit"
					{...rest}
				>
					{children || text}
				</Fab>
			);
		default:
			return (
				<ButtonMat
					type={typeButton}
					color={color}
					variant={variant || 'contained'}
					classes={{
						root: classes.root,
						containedPrimary: classes.primary,
						outlinedPrimary: classes.outlinedPrimary,
						disabled: classes.disabled,
						...classesExt,
					}}
					style={{ fontSize: fontSize }}
					aria-label="edit"
					{...rest}
				>
					{children || text}
				</ButtonMat>
			);
	}
};

Button.propTypes = {
	children: PropTypes.any,
	variant: PropTypes.string,
	text: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
	color: PropTypes.string,
	classesExt: PropTypes.object,
	style: PropTypes.object,
	fontSize: PropTypes.number,
	typeButton: PropTypes.string,
};

export default Button;
