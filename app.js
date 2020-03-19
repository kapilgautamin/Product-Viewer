
'use strict';


function ProductImage(props){
  return <img src="assets/red.jpg" alt="Product Image" />;
}

function Product(props){
  return (
    <div>
    <ProductImage />
    </div>
  );
}

const domContainer = document.getElementById('react-root');

ReactDOM.render(<Product />, domContainer);