import React from 'react'
import PropTypes from 'prop-types'
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

Avatar.propTypes = {
	imageUrl: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	children:	PropTypes.element,
}

export default Avatar
