import React from 'react';
import PropTypes from 'prop-types';
import PopupBackground from '../../PopupBackground';
import Button from '../PopupButton';
import style from '../style.module.scss';

const PopupCore = ({
	showPopup = true,
	colorConfirm = 'primary',
	colorCancel = 'primary',
	color,
	children = 'test',
	type,
	textConfirm = 'Ok',
	textCancel = 'Cancel',
	onClick,
	onClose,
	typeConfirm = 'button',
	typeCancel = 'button',
	cancellButtonProps = {},
	confirmButtonProps = {},
	showForce = false,
}) => {
	const [popup, switchPopup] = React.useState(showPopup || showForce);
	React.useEffect(() => {
		switchPopup(showPopup);
	}, [showPopup]);
	const closeHandler = ev => {
		onClose(ev);
		if (!showForce) {
			switchPopup(!popup);
		}
	};
	const confirmHandler = ev => {
		if (!showForce) {
			switchPopup(!popup);
		}
		onClick(ev);
	};
	return (
		popup && (
			<PopupBackground onClick={closeHandler} visible>
				<div className={style.container}>
					<div className={style.icon} />
					<div>{children}</div>
					<div>
						{Boolean(textCancel.length) && (
							<Button
								className={style.button}
								color={colorCancel}
								onClick={closeHandler || color}
								type={typeCancel || type}
								text={textCancel}
								{...cancellButtonProps}
							/>
						)}
						{Boolean(textConfirm.length) && (
							<Button
								className={style.button}
								color={colorConfirm || color}
								onClick={confirmHandler}
								type={typeConfirm || type}
								text={textConfirm}
								{...confirmButtonProps}
							/>
						)}
					</div>
				</div>
			</PopupBackground>
		)
	);
};

PopupCore.propTypes = {
	children: PropTypes.any,
	textConfirm: PropTypes.string,
	textCancel: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
	typeConfirm: PropTypes.string,
	typeCancel: PropTypes.string,
	colorConfirm: PropTypes.string,
	colorCancel: PropTypes.string,
	type: PropTypes.string,
	showForce: PropTypes.bool,
};
export default PopupCore;
