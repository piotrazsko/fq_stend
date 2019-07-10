import React from 'react'
import ButtonMaterial from '@material-ui/core/Button'
import styles from './style.module.scss'
import InputBase from '@material-ui/core/InputBase'

class NumberOrders extends React.Component {
	render() {
		const { className } = this.props
		return (
			<div className={styles.container}>
				<InputBase
					className={styles.InputBase}
					defaultValue="Количество заказов"
					inputProps={{ 'aria-label': 'naked' }}
				/>
				<div className={styles.numberblock} />
			</div>
		)
	}
}

export default NumberOrders
