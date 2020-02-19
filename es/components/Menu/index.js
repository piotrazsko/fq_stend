import React from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover';
var style = {
  "item": "style-module_fq_item___r9VHj"
};

var Menu = function Menu(_ref) {
  var _ref$menuItems = _ref.menuItems,
      menuItems = _ref$menuItems === void 0 ? [] : _ref$menuItems,
      defaultShow = _ref.defaultShow,
      _ref$showForce = _ref.showForce,
      showForce = _ref$showForce === void 0 ? false : _ref$showForce,
      _ref$anchorEl = _ref.anchorEl,
      anchorEl = _ref$anchorEl === void 0 ? null : _ref$anchorEl;
  return React.createElement(Popover, {
    anchorEl: anchorEl,
    defaultShow: defaultShow,
    showForce: showForce
  }, menuItems.map(function (item, index) {
    return React.createElement("div", {
      className: style.item,
      onClick: function onClick(ev) {
        item.clickHandler(ev);
        ev.nativeEvent.stopPropagation();
        ev.nativeEvent.preventDefault();
      },
      key: item.title + index
    }, item.title);
  }));
};

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    onClick: PropTypes.func
  })).isRequired,
  defaultShow: PropTypes.bool,
  showForce: PropTypes.bool,
  anchorEl: PropTypes.any // : PropTypes.

};
export default Menu;