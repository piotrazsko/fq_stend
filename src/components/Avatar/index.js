import React from 'react'
import styles from './styles.module.scss'
import classes from 'classnames'

const Avatar = ({ imageUrl, className, onClick, children }) => (
	<div
		onClick={onClick}
		style={
			imageUrl
				? {
						backgroundImage: `url(${imageUrl})`,
				  }
				: null
		}
		className={classes(styles.icon, styles.iconDefault, className)}
	>
		{children}
	</div>
)

export default Avatar
