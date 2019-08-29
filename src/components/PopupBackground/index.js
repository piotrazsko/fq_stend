import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const CLASS_BACKGROUND = 'popup_background'
class PopupBackground extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state = {
			showPopup: true,
		}
	}
	static propTypes = {
		onClick: PropTypes.func,
	}
	static defaultProps = {
		onClick: () => {},
	}
	handleClick(event) {
		if (event.target.classList.contains(CLASS_BACKGROUND)) {
			this.setState({
				showPopup: false,
			})
			const { onClick } = this.props
			onClick()
		}
	}

	render() {
		return this.state.showPopup ? (
			<div
				className={CLASS_BACKGROUND}
				role="presentation"
				onClick={this.handleClick}
				onKeyDown={() => {}}
			>
				<div className="popup_background_inbox">{this.props.children}</div>
			</div>
		) : null
	}
}

export default PopupBackground
