import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

var NumberOrders = function NumberOrders(_ref) {
  var ordersValue = _ref.ordersValue,
      text = _ref.text;
  return React.createElement("div", {
    className: styles.container
  }, React.createElement("div", {
    className: styles.baseblock
  }, text), React.createElement("div", {
    className: styles.numberblock
  }, ordersValue));
};

NumberOrders.propTypes = {
  text: PropTypes.string,
  ordersValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
NumberOrders.defaultProps = {
  text: 'Количество заказов',
  ordersValue: 0
};
export default NumberOrders;