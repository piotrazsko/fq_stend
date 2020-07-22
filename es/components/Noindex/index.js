import React from 'react';
import PropTypes from 'prop-types';

var Noindex = function Noindex(_ref) {
  var children = _ref.children;
  return React.createElement(React.Fragment, null, "<!--googleoff: all--><!--noindex-->", children, "<!--/noindex--><!--googleon: all-->");
};

Noindex.propTypes = {
  children: PropTypes.any
};
export default Noindex;