import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Avatar from '../Avatar';
import appStore from '../../static/images/stores/appStore.png';
import googlePlay from '../../static/images/stores/googlePlay.png';
import Button from '@material-ui/core/Button';

const StoresBox = ({ appStoreLink, googlePlayLink, target = '_blank' }) => {
	return (
		<div className={styles.container}>
			<a href={appStoreLink} target={target} className={styles.link}>
				<Avatar imageUrl={appStore} className={styles.appStore} />
			</a>
			<a href={googlePlayLink} target={target} className={styles.link}>
				<Avatar imageUrl={googlePlay} className={styles.googlePlay} />
			</a>
		</div>
	);
};

StoresBox.propTypes = {
	appStoreLink: PropTypes.string,
	googlePlayLink: PropTypes.string,
};

export default StoresBox;
