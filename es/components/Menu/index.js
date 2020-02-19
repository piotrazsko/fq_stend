function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover';
var style = {
  "item": "style-module_fq_item___r9VHj"
};

var Menu = function Menu(_ref) {
  var _ref$menuItems = _ref.menuItems,
      menuItems = _ref$menuItems === void 0 ? [] : _ref$menuItems,
      props = _objectWithoutProperties(_ref, ["menuItems"]);

  return React.createElement(Popover, props, menuItems.map(function (item, index) {
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
  visible: PropTypes.bool,
  showForce: PropTypes.bool,
  anchorEl: PropTypes.any // : PropTypes.

};
export default Menu;