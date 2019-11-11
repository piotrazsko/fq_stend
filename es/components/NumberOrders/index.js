import React from 'react';
import PropTypes from 'prop-types';
var styles = {
  "container": "style-module_fq_container___3UmWF",
  "baseblock": "style-module_fq_baseblock___3PR-Y",
  "numberblock": "style-module_fq_numberblock___1dan-"
};

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