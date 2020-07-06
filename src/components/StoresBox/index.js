import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import appStore from '../../static/images/stores/appStore.png';
import googlePlay from '../../static/images/stores/googlePlay.png';

const StoresBox = ({ appStoreLink, googlePlayLink, target = '_blank' }) => {
    return (
        <div className={styles.container}>
            <a
                href={appStoreLink}
                target={target}
                className={styles.link}
                rel={target == '_blank' ? 'noopener noreferrer' : undefined}
            >
                <img className={styles.imageContainer} alt="app_store" src={appStore} />
            </a>
            <a
                href={googlePlayLink}
                target={target}
                className={styles.link}
                rel={target == '_blank' ? 'noopener noreferrer' : undefined}
            >
                <img className={styles.imageContainer} alt="google_play" src={googlePlay} />
            </a>
        </div>
    );
};

StoresBox.propTypes = {
    appStoreLink: PropTypes.string,
    googlePlayLink: PropTypes.string,
    target: PropTypes.string,
};

export default StoresBox;
