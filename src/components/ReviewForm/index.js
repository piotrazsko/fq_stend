import React from 'react'
import styles from './style.module.scss'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputRating from '../InputRating'
import Avatar from '../Avatar'
// import bigStar from '../../static/images/bigStar.svg'

class ReviewForm extends React.Component {
	render() {
		const { className, onClose, onClick } = this.props
		return (
			<div className={styles.container}>
				<div className={styles.formTitle}>
					<div className={styles.formTitleText}>
						<span>Все ли вам </span>
						<span>понравилось?</span>
					</div>

					<Avatar
						imageUrl="https://randomuser.me/api/portraits/men/99.jpg"
						className={styles.formStar}
					/>
				</div>
				<div className={styles.formInputs}>
					<InputRating />
					<TextField
						id="standard-full-width"
						style={{ margin: 8 }}
						placeholder="Напишите что-нибудь приятное!"
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</div>
				<div className={styles.formSubmit}>
					<Button className={styles.button}>Напомнить позже</Button>
					<Button variant="contained" color="primary" className={styles.button}>
						ОСТАВИТЬ ОТЗЫВ
					</Button>
				</div>
			</div>
		)
	}
}

export default ReviewForm
