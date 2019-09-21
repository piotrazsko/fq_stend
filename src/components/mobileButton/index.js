import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Fab from '@material-ui/core/Fab';


const MobileButton = ({ text, onClick }) => {
	return (
		<div className={styles.container}>
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
		</div>
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
