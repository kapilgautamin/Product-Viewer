'use strict';

Element = React.createElement(
  "div",
  {className:"customized"},
  "This is the first REACT text.");

const domContainer = document.getElementById('react-root');

ReactDOM.render(Element, domContainer);