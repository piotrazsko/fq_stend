import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import Fab from '@material-ui/core/Fab';
// import Button from '@material-ui/core/Button';

const MobileButton = ({ text, onClick }) => {
	return (
		<Fab
			variant="extended"
			size="medium"
			color="primary"
			className={styles.Fab}
			onClick={onClick}
			aria-label="add"
		>
			{text}
		</Fab>
	);
};
MobileButton.propTypes = {
	text: PropTypes.string,
	ordersValue: PropTypes.oneOfType([PropTypes.string]),
};
MobileButton.defaultProps = {
	text: 'Записаться',
};
export default MobileButton;
