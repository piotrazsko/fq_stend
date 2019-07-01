import React from 'react'
import styles from './style.module.scss'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputRating from '../InputRating'
import Avatar from '../Avatar'
import image from '../../static/images/bigstar.png'
import imagesmall from '../../static/images/invalid-name.png'
import imagexsmall from '../../static/images/xsmallstar.svg'

class ReviewForm extends React.Component {
	state = {
		rating: 0,
		text: '',
	}
	onClickRating = rating => {
		this.setState({ rating: rating })
	}

	onChangeText = ev => {
		// console.log()
		const value = ev.target.value
		this.setState({ text: value })
	}
	onCkickSubmit = ev => {
		const { onClick } = this.props
		const state = { ...this.state }
		onClick(state)
	}

	render() {
		console.log(this.myRef)
		const { className, onClose = () => {}, onClick } = this.props
		return (
			<div className={styles.container}>
				<div className={styles.formTitle}>
					<div className={styles.formTitleText}>
						<span>Все ли вам </span>
						<span>понравилось?</span>
					</div>

					<Avatar imageUrl={image} className={styles.formStar} />
					<Avatar imageUrl={imagesmall} className={styles.formStarsmall} />
					<Avatar imageUrl={imagexsmall} className={styles.formStarxsmall} />
				</div>
				<div className={styles.formInputs}>
					<InputRating rating={this.state.rating} onClick={this.onClickRating} />
					<TextField
						id="standard-full-width"
						style={{ margin: 8 }}
						placeholder="Напишите что-нибудь приятное!"
						margin="normal"
						state={{ value: '' }}
						className={styles.TextField}
						onChange={this.onChangeText}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</div>
				<div className={styles.formSubmit}>
					<Button onClick={onClose}>Напомнить позже</Button>
					<Button
						onClick={this.onCkickSubmit}
						variant="contained"
						color="primary"
						className={styles.button}
					>
						ОСТАВИТЬ ОТЗЫВ
					</Button>
				</div>
			</div>
		)
	}
}

export default ReviewForm
