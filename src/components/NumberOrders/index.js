import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

const NumberOrders = ({ ordersValue, text }) => {
	return (
		<div className={styles.container}>
			<div className={styles.baseblock}>{text}</div>
			<div className={styles.numberblock}>{ordersValue}</div>
		</div>
	)
}
NumberOrders.propTypes = {
	text: PropTypes.string,
	ordersValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
NumberOrders.defaultProps = {
	text: 'Количество заказов',
	ordersValue: 0,
}
export default NumberOrders
