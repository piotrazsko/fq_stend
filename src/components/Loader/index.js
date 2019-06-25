import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Loader = ({ isLoading}) => {
  return isLoading ? (
    <div className={styles.container }>
      <div className={styles.loader}>
        <svg>
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="2"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2"
                result="gooey"
              />
              <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  ) : null;
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  
};

export default Loader;
