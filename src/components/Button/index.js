import React from 'react'
import PropTypes from 'prop-types'
import ButtonMaterial from '@material-ui/core/Button'
import styles from './styles.module.scss'

const Button = ({ children, onClick, ...props }) => (
	<ButtonMaterial
		variant="contained"
		color="primary"
		onClick={onClick}
		className={styles.button}
		{...props}
	>
		{children}
	</ButtonMaterial>
)

Button.propTypes = {
	children: PropTypes.string,
	onClick: PropTypes.func,
}

export default Button
