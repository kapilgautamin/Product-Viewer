'use strict';
function SizeSelector(props){
  
  function sizeOptions(){
    var sizes = window.Inventory.allSizes;
    return sizes.map(function(num){
      return (
        <option value={num} key={num}>
            {num}
        </option>
      );
    });
  }

  return (
  // <label htmlFor="size-options">Size:</label>
    <select name="size-options">
      {sizeOptions()}
    </select>
  );
}

function ProductImage(props){
  return <img src="assets/red.jpg" alt="Product Image" />;
}

function Product(props){
  return (
    <div className="customizer">
      <div className="product-image">
        <ProductImage />
      </div>
      <div className="selector">
        <SizeSelector />
      </div>
    </div>
  );
}

const domContainer = document.getElementById('react-root');

ReactDOM.render(<Product />, domContainer);