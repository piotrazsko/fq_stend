import React from 'react'
import styles from './styles.module.scss'
import Avatar from '../Avatar'
import appStore from '../../static/images/stores/appStore.png'
import googlePlay from '../../static/images/stores/googlePlay.png'
import Button from '@material-ui/core/Button'

const StoresBox = ({ onClickgoogle = () => {}, onClick }) => {
	return (
		<div className={styles.container}>
			<Button
				onClick={() => {
					alert('Скоро в AppStore ')
				}}
			>
				<Avatar imageUrl={appStore} className={styles.appStore} />
			</Button>
			<Button onClick={onClickgoogle} target="_blank" href="https://play.google.com/store">
				<Avatar imageUrl={googlePlay} className={styles.googlePlay} />
			</Button>
		</div>
	)
}

export default StoresBox
