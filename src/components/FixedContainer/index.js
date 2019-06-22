import React from 'react'
import styles from './style.module.scss'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputRating from 'react-rating'
import emptyStar from '../../static/images/emptyStar.svg'
import fullStar from '../../static/images/fullStar.svg'

// import bigStar from '../../static/images/bigStar.svg'

const FixedContainer = ({ imageUrl, rating = 0, className, onClick, ...props }) => {
	return (
		<div className={styles.container}>
			<div className={styles.formTitle}>
				<div className={styles.formTitleText}>
					<span>Все ли вам </span>
					<span>понравилось?</span>
				</div>

				<div className={styles.formStar} />
			</div>
			<div className={styles.formInputs}>
				<InputRating
					initialRating={parseFloat(rating)}
					fractions={1}
					onClick={rating => onClick(rating)}
					emptySymbol={
						<img className={className} src={emptyStar} width="58" height="56" alt="пустая звезда" />
					}
					fullSymbol={
						<img className={className} src={fullStar} width="58" height="56" alt="заполненная звезда" />
					}
				/>
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

export default FixedContainer
