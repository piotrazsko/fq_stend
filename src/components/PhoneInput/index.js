import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import textMask from './components/textMask';
const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing(1),
	},
}));

export default function PhoneInput({
	value,
	onChange = () => {},
	name,
	disabled,
	label = '',
	classNames = {},
}) {
	const classes = useStyles();
	const [values, setValues] = React.useState({
		textmask: value,
	});
	React.useEffect(() => {
		setValues({
			...values,
			textmask: value,
		});
	}, [value]);
	function setCaretPosition(ctrl, pos) {
		// Modern browsers
		if (ctrl.setSelectionRange) {
			ctrl.focus();
			ctrl.setSelectionRange(pos, pos);

			// IE8 and below
		} else if (ctrl.createTextRange) {
			var range = ctrl.createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	}

	const handleChange = nameField => event => {
		setValues({
			...values,
			[nameField]: event.target.value,
		});

		onChange({ target: { value: event.target.value.replace(/\D/g, ''), name: name } });
	};
	const onFocus = ev => {
		const { target } = ev;
		setTimeout(function() {
			let res = target.value.replace(/\D/g, '');
			res = target.value.lastIndexOf(res[res.length - 1]);
			res = res === -1 ? 0 : res;
			target.setSelectionRange(res + 1, res + 1);
		}, 50);
	};
	return (
		<FormControl className={[classes.formControl, classNames.root].join(' ')}>
			<InputLabel htmlFor="formatted-text-mask-input">{label}</InputLabel>
			<Input
				className={classNames.input}
				onFocus={onFocus}
				disabled={disabled}
				value={values.textmask}
				name={name}
				onChange={handleChange('textmask')}
				id="formatted-text-mask-input"
				inputComponent={textMask}
			/>
		</FormControl>
	);
}
PhoneInput.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	name: PropTypes.string,
	disabled: PropTypes.bool,
	label: PropTypes.string,
	classNames: PropTypes.shape({
		root: PropTypes.string,
		input: PropTypes.string,
	}),
};
