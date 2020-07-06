import React from 'react';
import PropTypes from 'prop-types';
var styles = {
  "container": "styles-module_fq_container___m2A_R",
  "appStore": "styles-module_fq_appStore___d0OZc",
  "googlePlay": "styles-module_fq_googlePlay___2Lxtp",
  "link": "styles-module_fq_link___2POHs",
  "imageContainer": "styles-module_fq_imageContainer___1Gs7j"
};
import appStore from '../../static/images/stores/appStore.png';
import googlePlay from '../../static/images/stores/googlePlay.png';

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
    className: styles.link,
    rel: target == '_blank' ? 'noopener noreferrer' : undefined
  }, React.createElement("img", {
    className: styles.imageContainer,
    alt: "app_store",
    src: appStore
  })), React.createElement("a", {
    href: googlePlayLink,
    target: target,
    className: styles.link,
    rel: target == '_blank' ? 'noopener noreferrer' : undefined
  }, React.createElement("img", {
    className: styles.imageContainer,
    alt: "google_play",
    src: googlePlay
  })));
};

StoresBox.propTypes = {
  appStoreLink: PropTypes.string,
  googlePlayLink: PropTypes.string,
  target: PropTypes.string
};
export default StoresBox;