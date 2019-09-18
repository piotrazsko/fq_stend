import React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import styles from './styles.module.scss';

const ButtonSign = ({ children, className, onClick, ...props }) => (
	<Button className={styles.ButtonSign}>
		<Fab variant="extended" size="medium" color="primary" className={styles.Fab} aria-label="add">
			Записаться
		</Fab>
	</Button>
);
export default ButtonSign;
