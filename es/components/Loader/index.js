import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

var Loader = function Loader(_ref) {
  var isLoading = _ref.isLoading;
  return isLoading ? React.createElement("div", {
    className: styles.container
  }, React.createElement("div", {
    className: styles.loader
  }, React.createElement("svg", null, React.createElement("defs", null, React.createElement("filter", {
    id: "goo"
  }, React.createElement("feGaussianBlur", {
    in: "SourceGraphic",
    stdDeviation: "2",
    result: "blur"
  }), React.createElement("feColorMatrix", {
    in: "blur",
    mode: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2",
    result: "gooey"
  }), React.createElement("feComposite", {
    in: "SourceGraphic",
    in2: "gooey",
    operator: "atop"
  })))))) : null;
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};
export default Loader;