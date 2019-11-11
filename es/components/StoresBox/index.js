import React from 'react';
import PropTypes from 'prop-types';
var styles = {
  "container": "styles-module_fq_container___m2A_R",
  "appStore": "styles-module_fq_appStore___d0OZc",
  "googlePlay": "styles-module_fq_googlePlay___2Lxtp",
  "link": "styles-module_fq_link___2POHs",
  "imageContainer": "styles-module_fq_imageContainer___1Gs7j"
};
import Avatar from '../Avatar';
import appStore from '../../static/images/stores/appStore.png';
import googlePlay from '../../static/images/stores/googlePlay.png';
import Button from '@material-ui/core/Button';

var StoresBox = function StoresBox(_ref) {
  var appStoreLink = _ref.appStoreLink,
      googlePlayLink = _ref.googlePlayLink,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? '_blank' : _ref$target;
  return React.createElement("div", {
    className: styles.container
  }, React.createElement("a", {
    href: appStoreLink,
    target: target,
    className: styles.link
  }, React.createElement("img", {
    className: styles.imageContainer,
    src: appStore
  })), React.createElement("a", {
    href: googlePlayLink,
    target: target,
    className: styles.link
  }, React.createElement("img", {
    className: styles.imageContainer,
    src: googlePlay
  })));
};

StoresBox.propTypes = {
  appStoreLink: PropTypes.string,
  googlePlayLink: PropTypes.string
};
export default StoresBox;