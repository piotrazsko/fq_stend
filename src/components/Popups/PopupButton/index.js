import React from 'react';
import PropTypes from 'prop-types';
import { Fab, Button as ButtonMat } from '@material-ui/core';
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

const Button = ({ text = 'test', type = false, color, classesExt, ...rest }) => {
	const classes = useStyles();
	return type === 'fab' ? (
		<Fab
			color={color}
			variant="extended"
			classes={{
				root: classes.root,
				primary: classes.primary,
				disabled: classes.disabled,
				...classesExt,
			}}
			aria-label="edit"
			{...rest}
		>
			{text}
		</Fab>
	) : (
		<ButtonMat
			color={color}
			variant="contained"
			classes={{
				root: classes.root,
				containedPrimary: classes.primary,
				outlinedPrimary: classes.outlinedPrimary,
				disabled: classes.disabled,
				...classesExt,
			}}
			aria-label="edit"
			{...rest}
		>
			{text}
		</ButtonMat>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
	color: PropTypes.string,
	classesExt: PropTypes.object,
};

export default Button;
