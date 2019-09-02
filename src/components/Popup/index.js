import React, { Component } from 'react'
import PopupBackground from '../PopupBackground'
import { Grid } from '@material-ui/core'
import Button from '../Button'
import styles from './style.module.scss'

class Popup extends Component {
	state = { showPopup: true }
	handleSubmit = () => {
		const { onSubmit } = this.props
		onSubmit(this.state)
		this.setState({ showPopup: false })
	}
	handleCancell = () => {
		const { onCancel = ()=>{} } = this.props
		onCancel()
		this.setState({ showPopup: false })
	}
	render() {
		const { closePop, children = '', ...props } = this.props
		const { showPopup } = this.state
		return showPopup ? (
			<React.Fragment>
				<PopupBackground visible onClick={this.handleCancell}>
					<Grid contsiner>
						<Grid item xs={12}>
							{React.createElement(children, props)}
						</Grid>
						<Grid item xs={12}>
							<Button onClick={this.handleCancell} color="primary" variant="raised">
								Отменить
							</Button>
							<Button color="primary" onClick={this.handleSubmit} type="submit">
								Применить
							</Button>
						</Grid>
					</Grid>
				</PopupBackground>
			</React.Fragment>
		) : null
	}
}

export default Popup
