import React from 'react'
import styles from './style.module.scss'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputRating from '../InputRating'
import Avatar from '../Avatar'
import image from '../../static/images/bigstar.png'
import imagesmall from '../../static/images/invalid-name.png'

class ReviewForm extends React.Component {
	onChange={(event) => {
                    this.setState({ value: event.target.value })
                  }}
	render() {
		const { className, onClose, onClick } = this.props
		return (
			<div className={styles.container}>
				<div className={styles.formTitle}>
					<div className={styles.formTitleText}>
						<span>Все ли вам </span>
						<span>понравилось?</span>
					</div>

					<Avatar imageUrl={image} className={styles.formStar} />
					<Avatar imageUrl={imagesmall} className={styles.formStarsmall} />
				</div>
				<div className={styles.formInputs}>
					<InputRating />
					<TextField
						id="standard-full-width"
						style={{ margin: 8 }}
						placeholder="Напишите что-нибудь приятное!"
						fullWidth
						margin="normal"
						state = { value: ''}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</div>
				<div className={styles.formSubmit}>
					<Button onClose={this.onClose} className={styles.button}>
						Напомнить позже
					</Button>
					<Button onClick={() => { onClick(this.state.value) }} variant="contained" color="primary" className={styles.button}>
						ОСТАВИТЬ ОТЗЫВ
					</Button>
				</div>
			</div>
		)
	}
}

export default ReviewForm
