
'use strict';


function ProductImage(props){
  return React.createElement(
    "img",
  {
    src:"assets/red.jpg",
    alt:"Product Image"
  });
}

function Product(props){
  return React.createElement(
    "div",
    {
      className:"product-image"
    },
    React.createElement(ProductImage)
  );
}

const domContainer = document.getElementById('react-root');

ReactDOM.render(React.createElement(Product), domContainer);