import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
it('renders without crashing', function () {
  var div = document.createElement('div');
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), div);
  ReactDOM.unmountComponentAtNode(div);
});